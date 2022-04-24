class SpiderMan {
  constructor(name, age, actorName, movies, studioCinema) {
      this.name = name
      this.age = age
      this.actorName = actorName
      this.movies = movies
      this.studioCinema = studioCinema
  }

  getInfo(){
    return `Hey! I\'m ${this.actorName} From ${this.studioCinema}`
  }
}

module.exports = SpiderMan
