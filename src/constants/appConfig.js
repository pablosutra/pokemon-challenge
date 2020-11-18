export const BASE_API_URL = 'https://pokeapi.co/api/v2/';

export const ENDPOINTS = {
    list: 'pokemon?&limit=150',
    detail: (name) => `pokemon/${name}`
}