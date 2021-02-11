export default class SwapiService {
    
    _apiBase = 'https://swapi.dev/api'

    async getResourses(url){
        const res = await fetch(`${this._apiBase}${url}`)
    
        if (!res.ok){
        throw new Error(`Could not fetch ${this._apiBase}${url}, received ${res.status}` )
        }
    
        const body = await res.json()
        return body
    }

    getAllPeople = async () => {
        const persons = await this.getResourses(`/people/`)
        return persons.results.map(this._transformPerson)
    }

    getPerson = async (id) => {
        const person = await this.getResourses(`/people/${id}`)
        return this._transformPerson(person)
    }

    getAllPlanets = async () => {
        const planets = await this.getResourses(`/planets/`)
        return planets.results.map(this._transformPlanet)
    }

    getPlanet = async (id) => { 
        const planet = await this.getResourses(`/planets/${id}`) 
        return this._transformPlanet(planet)
    }

    getAllStarships = async () => {
        const starships = await this.getResourses(`/starships/`)
        return starships.results.map(this._transformStarShip)
    }

    getStarship = async (id) => { 
        const starship = await this.getResourses(`/starships/${id}`) 
        return starship.results._transformStarShip(starship)
    }

    _extractId(item){
        const idRegexp = /\/([0-9]*)\/$/
        return item.url.match(idRegexp)[1]
    }
    
    _transformPlanet = (planet) => {

        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            orbital_period: planet.orbital_period,
            diameter: planet.diameter
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthDay: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    _transformStarShip = (starship) => {

        return {
            id: this._extractId(starship),
            name: starship.name,
            modle: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        }
    }
}