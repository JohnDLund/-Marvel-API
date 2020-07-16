export default class Hero {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.thumbnail = data.thumbnail.path + "." + data.thumbnail.extension

    }

    get Template() {
        return `

<div class="card col-5 m-3" style="width: 18rem;">
  <img class="card-img-top" src="${this.thumbnail}" alt="Image Goes Here">
  <div class="card-body">
    <h5 class="card-title">${this.name}</h5>
    <p class="card-text">${this.description}</p>
    <button class="btn btn-primary">Add to Team</button>
  </div>
</div>
`
    }

    static generateHerosTemplate(name) {
        return `<button class="btn btn-info btn-block btn-lg text-capitalize" onclick="app.heroesController.getHeroInfo('${name}')">${name}</button>`
    }
}