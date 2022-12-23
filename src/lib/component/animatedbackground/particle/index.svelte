<script lang="ts">
  import { onMount } from "svelte"
  import {
    Rhombus,
    Circle,
    Pentahedron,
    Point,
    Cross,
    type Particle,
  } from "./Particle"

  export let offset: { start: number; end: number } = { start: 0, end: 0 }

  function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  let paused = false

  onMount(() => {
    const handleBlur = () => (paused = true)
    const handleFocus = () => (paused = false)
    window.addEventListener("blur", handleBlur)
    window.addEventListener("focus", handleFocus)

    return () => {
      window.removeEventListener("blur", handleBlur)
      window.removeEventListener("focus", handleFocus)
    }
  })

  let containerEl: HTMLElement

  onMount(() => {
    const particleMolds = [Rhombus, Circle, Pentahedron, Point, Cross]
    let particles: Particle[] = []

    const timer = setInterval(function () {
      if (!paused) {
        const RandomParticle =
          particleMolds[randomInt(0, particleMolds.length - 1)]
        particles.push(
          new RandomParticle(containerEl, 1 + 3 * Math.random(), offset)
        )
      }
    },1000)

    let request: number

    function update() {
      particles.forEach((particle) => particle.move())
      particles = particles.filter((particle) => !particle.destroyed)
      request = requestAnimationFrame(update)
    }
    update()
    return () => {
      cancelAnimationFrame(request)
      clearInterval(timer)
    }
  })
</script>

<div bind:this={containerEl} class="absolute top-0 left-0 h-full w-full" />

<style>
  :global([data-shape="pentahedron"]) {
    fill: #3e82f7;
  }
  :global([data-shape="point"]) {
    fill: #8491a3;
  }
  :global([data-shape="rhombus"]) {
    fill: #2da94f;
  }
  :global([data-shape="cross"]) {
    fill: #fdbd00;
  }
  :global([data-shape="circle"]) {
    fill: #ed412d;
  }
</style>
