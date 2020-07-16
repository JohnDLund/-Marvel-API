import HeroesService from "../Services/HeroesService.js";
import store from "../store.js";
import Hero from "../Models/Hero.js";

//Private
function _drawHeroes() {
  let heroes = store.State.heroes;
  console.log(heroes);
  let template = ""
  store.State.heroes.forEach(hero => template += Hero.generateHerosTemplate(hero))
  document.getElementById("heroes").innerHTML = template
}

function _drawActiveHero() {
  console.log(store.State.activeHero);
  let template = store.State.activeHero.Template
  document.getElementById("activeHeroes").innerHTML = template
}



//Public
export default class HeroesController {
  constructor() {
    store.subscribe("heroes", _drawHeroes);
    store.subscribe("activeHero", _drawActiveHero);
  }
  getHeroInfo(name) {
    HeroesService.getHeroInfo(name)
  }
}
