export class Particle {
  steps: number
  x: number
  y: number
  rotation: "+" | "-" = Math.random() > 0.5 ? "-" : "+"
  scale: number = 0.5 + Math.random()
  siner: number = 200 * Math.random()
  item: SVGElement
  width = 0
  height = 0
  destroyed = false

  constructor(private container: HTMLElement, private friction: number, private offset: {start: number, end: number}) {
    this.steps = container.clientHeight / 2
    this.friction = friction
    const { item, width, height } = this.render()
    this.item = item
    this.width = width
    this.height = height
    this.x = Math.random() * this.container.clientWidth
    this.y = this.container.clientHeight + offset.start
    this.mount()
  }

  mount() {
    //this.item.setAttribute("transform", `translate(${this.x}, ${this.y})`)
    this.item.setAttribute("viewBox", `0 0 ${this.width} ${this.height}`)
    this.item.setAttribute("width", "30px")
    this.item.setAttribute("height", "30px")
    this.item.setAttribute("style", "position: absolute;")
    this.container.appendChild(this.item)
  }

  destroy() {
    this.item.remove()
    this.destroyed = true
  }

  move() {
    this.y -= this.friction
    const top = this.y
    const left = this.x + Math.sin((this.y * Math.PI) / this.steps) * this.siner
    const style = this.item.getAttribute("style")

    this.item.setAttribute(
      "style",
      `${style} transform: translate(${left}px, ${top}px) scale(${
        this.scale
      }) rotate(${this.y + this.height}deg);`
    )

    if (this.y < -(this.height + this.offset.end)) {
      this.destroy()
    }
  }

  render(): { item: SVGSVGElement; width: number; height: number } {
    throw { message: "particle must implemented" }
  }
}

export class Rhombus extends Particle {
  override render(): { item: SVGSVGElement; width: number; height: number } {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    const [width, height] = [13, 14]

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute(
      "d",
      "M5.9,1.2L0.7,6.5C0.5,6.7,0.5,7,0.7,7.2l5.2,5.4c0.2,0.2,0.5,0.2,0.7,0l5.2-5.4 C12,7,12,6.7,11.8,6.5L6.6,1.2C6.4,0.9,6.1,0.9,5.9,1.2L5.9,1.2z M3.4,6.5L6,3.9c0.2-0.2,0.5-0.2,0.7,0l2.6,2.6 c0.2,0.2,0.2,0.5,0,0.7L6.6,9.9c-0.2,0.2-0.5,0.2-0.7,0L3.4,7.3C3.2,7.1,3.2,6.8,3.4,6.5L3.4,6.5z"
    )
    svg.setAttribute("data-shape", "rhombus")
    svg.append(path)
    return {
      width,
      height,
      item: svg,
    }
  }
}

export class Pentahedron extends Particle {
  override render(): { item: SVGSVGElement; width: number; height: number } {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    const [width, height] = [30, 30]
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`)

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute(
      "d",
      "M10.3,4.3H7.7V1.7C7.7,0.8,7,0,6,0S4.3,0.8,4.3,1.7v2.5H1.7C0.8,4.3,0,5,0,6s0.8,1.7,1.7,1.7h2.5v2.5 C4.3,11.2,5,12,6,12s1.7-0.8,1.7-1.7V7.7h2.5C11.2,7.7,12,7,12,6S11.2,4.3,10.3,4.3z"
    )
    svg.setAttribute("data-shape", "pentahedron")
    svg.append(path)
    return {
      width,
      height,
      item: svg,
    }
  }
}

export class Circle extends Particle {
  override render(): { item: SVGSVGElement; width: number; height: number } {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    const [width, height] = [13, 12]
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`)

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute(
      "d",
      "M6.5,0.1C3.4,0.1,0.8,2.8,0.8,6s2.6,5.9,5.7,5.9s5.7-2.7,5.7-5.9S9.7,0.1,6.5,0.1L6.5,0.1z M6.5,8.8 C5,8.8,3.8,7.6,3.8,6S5,3.2,6.5,3.2S9.2,4.4,9.2,6S8,8.8,6.5,8.8L6.5,8.8z"
    )
    svg.setAttribute("data-shape", "circle")
    svg.append(path)
    return {
      width,
      height,
      item: svg,
    }
  }
}

export class Point extends Particle {
  override render(): { item: SVGSVGElement; width: number; height: number } {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    const [width, height] = [12, 12]
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`)

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute(
      "d",
      "M6,7.5L6,7.5C5.1,7.5,4.5,6.9,4.5,6v0c0-0.9,0.7-1.5,1.5-1.5h0c0.9,0,1.5,0.7,1.5,1.5v0C7.5,6.9,6.9,7.5,6,7.5z "
    )
    svg.setAttribute("data-shape", "point")
    svg.append(path)
    return {
      width,
      height,
      item: svg,
    }
  }
}

export class Cross extends Particle {
  override render(): { item: SVGSVGElement; width: number; height: number } {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    const [width, height] = [12, 12]
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`)

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute(
      "d",
      "M10.3,4.3H7.7V1.7C7.7,0.8,7,0,6,0S4.3,0.8,4.3,1.7v2.5H1.7C0.8,4.3,0,5,0,6s0.8,1.7,1.7,1.7h2.5v2.5 C4.3,11.2,5,12,6,12s1.7-0.8,1.7-1.7V7.7h2.5C11.2,7.7,12,7,12,6S11.2,4.3,10.3,4.3z"
    )
    svg.setAttribute("data-shape", "cross")
    svg.append(path)
    return {
      width,
      height,
      item: svg,
    }
  }
}
