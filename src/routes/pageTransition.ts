import { cubicIn, cubicOut } from "svelte/easing"

export const laptop = {
  pageOut(node: Element, { active }: { active: boolean }) {
    const o = +getComputedStyle(node).opacity

    return {
      delay: 0,
      duration: active ? 250 : 0,
      css: (t, u) =>
        `opacity: ${t * o}; transform: translateX(${
          -cubicOut(u) * 40
        }px); z-index: -1; position: absolute;`,
    }
  },
  pageIn(node: Element, { active }: { active: boolean }) {
    const o = +getComputedStyle(node).opacity
    if (!active) {
      return {
        delay: 0,
        duration: 0,
        css: () => "",
      }
    }

    return {
      delay: 300,
      duration: 250,
      css: (t, u) =>
        `opacity: ${t * o}; transform: translateX(${cubicIn(u) * 40}px);`,
    }
  },
}

export const mobile = {
  pageOut(node: Element, { active }: { active: boolean }) {
    const { width } = node.getBoundingClientRect()

    return {
      delay: 0,
      duration: active ? 300 : 0,
      css: (t, u) =>
        `transform: translateX(${
          -cubicOut(u) * width
        }px); z-index: -1; position: absolute;`,
    }
  },
  pageIn(node: Element, { active }: { active: boolean }) {
    const { width } = node.getBoundingClientRect()

    return {
      delay: 0,
      duration: active ? 300 : 0,
      css: (t, u) => `transform: translateX(${cubicIn(u) * width}px);`,
    }
  },
}
