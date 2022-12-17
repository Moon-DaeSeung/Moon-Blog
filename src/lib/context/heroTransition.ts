import { pageIn, pageOut } from "$lib/hero-transition"
import { getContext, setContext } from "svelte"

const KEY = Symbol("HERO")

type HeroTransition = {
  heroIn: (node: HTMLElement, key: string) => any
  heroOut: (node: HTMLElement, key: string) => any
}

export function initHeroTransition() {
  setContext<HeroTransition>(KEY, {
    heroIn: pageIn,
    heroOut: pageOut,
  })
}

export function getHeroTransition() {
  return getContext<HeroTransition>(KEY)
}
