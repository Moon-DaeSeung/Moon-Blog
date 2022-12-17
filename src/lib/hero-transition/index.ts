import { crossfade, type TransitionConfig } from "svelte/transition"

/*
  setTimeout(callback,0) 혹은 async 전략은 아주 유용합니다.
  빠르고 반복되는 동작에서 undefined 에러가 났을 때 말이죠. 
  setTimeout은 비동기 루프로 테스크를 지연시키기 때문에,
  callback이 호출하기 전에 해야할 테스크들을 충분히 실행시킬 기회를 제공합니다.
  그래서 여차하면 setTimeout을 써보세요~
  그럼 이만~
  아래 코드는 svelte의 transition에서 빠르게 이동할 경우 에러가 나는 걸 방지한 조치 입니다.

  문제 상황은 아래와 같습니다.
  https://svelte.dev/repl/a319a067d66e4b26b677ae94db22261c?version=3.31.0
*/

const [send, receive] = crossfade({ duration: 300 })

export function heroIn(node: Element, key: string): any {
  const fn = receive(node, { key })
  return () => noFade(fn())
}

export function heroOut(node: Element, key: string): any {
  const fn = send(node, { key })
  return () => noFade(fn())
}

function noFade(transition: TransitionConfig | undefined) {
  if (transition) {
    return {
      ...transition,
      css: (t: number, u: number) => {
        const css = transition.css?.(t, u).replace(/opacity: [^;]+;/, "")
        return css
      },
    }
  }
  return {
    duration: 300,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tick(u: number, t: number) {
      //
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    css(t: number, u: number) {
      return ""
    },
  }
}
