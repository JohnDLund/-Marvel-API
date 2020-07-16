import _store from "../store.js";
import Hero from "../Models/Hero.js";


// @ts-ignore
const _marvelApi = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/characters?apikey=2148bbf76c5acd7c1b486d33517c8d71&limit=20',
  timeout: 3000
})

// @ts-ignore
let _sandBoxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/YOURNAMEHERE/heroes',
  timeout: 15000
})



class HeroesService {
  constructor() {
    this.getHero()
  }

  getHero() {
    _marvelApi.get().then(res => {
      // console.log(res.data.data.results);
      _store.commit("heroes", res.data.data.results.map(rawHeroesData => rawHeroesData.name))
    }).catch(err => console.error(err))
  }


  getHeroInfo(name) {
    _marvelApi.get().then(res => {
      console.log(res.data.data.results);
      let activeHero = _store.State.heroes.find(h => h.name == name)
      _store.commit("activeHero", activeHero)
    }).catch(err => console.error(err))
  }
}

const service = new HeroesService();
export default service;





