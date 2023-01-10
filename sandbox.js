class LateBloomer {
  constructor() {
    this.petalCount = Math.floor(Math.random() * 12) + 1
  }
  bloom() {
    setTimeout(this.declare.bind(this), 1000)
  }
  declare() {
    console.log(`I'm a beatiful flower with ${this.petalCount} petals!`)
  }
}

const flower = new LateBloomer()
flower.bloom()