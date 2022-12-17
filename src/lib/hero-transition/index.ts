import { crossfade, type TransitionConfig } from "svelte/transition"

const [send, receive] = crossfade({ duration: 300 })

export function heroIn(node: Element, key: string): any {
  const fn = receive(node, { key })
  return () =>
    [dodgeBug, noFade].reduce(
      (prevConfig, process) => process(prevConfig),
      fn()
    )
}

export function heroOut(node: Element, key: string): any {
  const fn = send(node, { key })
  return () => noFade(fn())
}

function noFade(transition: TransitionConfig) {
  if (!transition) throw { message: "config must not be undefined" }
  return {
    ...transition,
    css: (t: number, u: number) => {
      const css = transition.css?.(t, u).replace(/opacity: [^;]+;/, "")
      return css
    },
  } as TransitionConfig
}

/*
  아래 코드는 svelte의 transition에서 빠르게 이동할 경우 에러가 나는 걸 방지한 조치 입니다.

  문제 상황은 아래와 같습니다.
  https://svelte.dev/repl/a319a067d66e4b26b677ae94db22261c?version=3.31.0
*/

function dodgeBug(transition: TransitionConfig) {
  return (
    transition ||
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
    } as TransitionConfig)
  )
}
