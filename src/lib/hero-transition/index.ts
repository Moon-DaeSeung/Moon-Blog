import { cubicOut } from "svelte/easing"
import { assign, is_function } from "svelte/internal"
import type { CrossfadeParams, TransitionConfig } from "svelte/transition"

const [send, receive] = crossfade2({
  duration: 300,
  // fallback는 svelte의 transition에서 빠르게 이동할 경우 에러가 나는 걸 방지한 조치 입니다.

  // 문제 상황은 아래와 같습니다.
  // https://svelte.dev/repl/a319a067d66e4b26b677ae94db22261c?version=3.31.0
  fallback: () =>
    ({
      duration: 300,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      tick(u: number, t: number) {
        //
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      css(t: number, u: number) {
        return ""
      },
    } as TransitionConfig),
})

export function heroIn(node: Element, key: string): any {
  return receive(node, { key })
}

export function heroOut(node: Element, key: string): any {
  return send(node, { key })
}

export function crossfade2({
  fallback,
  ...defaults
}: CrossfadeParams & {
  fallback?: (
    node: Element,
    params: CrossfadeParams,
    intro: boolean
  ) => TransitionConfig
}): [
  (
    node: Element,
    params: CrossfadeParams & {
      key: any
    }
  ) => () => TransitionConfig,
  (
    node: Element,
    params: CrossfadeParams & {
      key: any
    }
  ) => () => TransitionConfig
] {
  const to_receive: ClientRectMap = new Map()
  const to_send: ClientRectMap = new Map()

  function crossfade(
    from: DOMRect,
    node: Element,
    params: CrossfadeParams,
    intro: boolean
  ): TransitionConfig {
    const {
      delay = 0,
      duration = (d) => Math.sqrt(d) * 30,
      easing = cubicOut,
    } = assign(assign({}, defaults), params)

    const to = node.getBoundingClientRect()

    const style = getComputedStyle(node)
    const transform = style.transform === "none" ? "" : style.transform

    let dx = from.left - to.left - (document.scrollingElement?.scrollLeft || 0)
    let dy = from.top - to.top - (document.scrollingElement?.scrollTop || 0)
    let ready = false
    requestAnimationFrame(() => {
      dx += document.scrollingElement?.scrollLeft || 0
      dy += document.scrollingElement?.scrollTop || 0
      ready = true
    })

    const dw = from.width / to.width
    const dh = from.height / to.height
    const d = Math.sqrt(dx * dx + dy * dy)

    const currentStyle = node.getAttribute("style")
    return {
      delay,
      duration: is_function(duration) ? duration(d) : duration,
      easing,
      tick: (t, u) => {
        if (!intro) return
        node.setAttribute(
          "style",
          currentStyle +
            ` ${ready ? "diplay: none;" : ""}
              position: relative; 
              z-index: 9999; 
              transform-origin: top left;
              transform: ${transform} translate(${u * dx}px,${
              u * dy
            }px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
        `
        )
      },
    }
  }

  function transition(
    items: ClientRectMap,
    counterparts: ClientRectMap,
    intro: boolean
  ) {
    return (node: Element, params: CrossfadeParams & { key: any }) => {
      const rect = node.getBoundingClientRect()
      items.set(params.key, {
        rect,
      })

      return () => {
        if (counterparts.has(params.key)) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const { rect } = counterparts.get(params.key)!
          counterparts.delete(params.key)

          return crossfade(rect, node, params, intro)
        }

        // if the node is disappearing altogether
        // (i.e. wasn't claimed by the other list)
        // then we need to supply an outro
        items.delete(params.key)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return fallback!(node, params, intro)
      }
    }
  }

  return [
    transition(to_send, to_receive, false),
    transition(to_receive, to_send, true),
  ]
}

type ClientRectMap = Map<any, { rect: DOMRect }>
