import { cubicIn, cubicOut } from "svelte/easing"

export const laptop = {
  pageOut(node: Element, { active }: { active: boolean }) {
    const o = +getComputedStyle(node).opacity
    if (!active) {
      return {
        duration: 0,
        css: () => "z-index: -1; position: absolute; opacity: 0;",
      }
    }

    return {
      delay: 0,
      duration: 250,
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
    if (!active) {
      return {
        duration: 0,
        css: () => "z-index: -1; position: absolute; opacity: 0;",
      }
    }

    return {
      delay: 0,
      duration: 300,
      css: (t, u) =>
        `transform: translateX(${
          -cubicOut(u) * width
        }px); z-index: -1; position: absolute;`,
    }
  },
  pageIn(node: Element, { active }: { active: boolean }) {
    const { width } = node.getBoundingClientRect()
    if (!active) {
      return {
        delay: 0,
        duration: 0,
        css: () => "",
      }
    }

    return {
      delay: 0,
      duration: 300,
      css: (t, u) => `transform: translateX(${cubicIn(u) * width}px);`,
    }
  },
}
