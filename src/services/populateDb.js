const axios = require('axios');
const { Pokemones } = require('../database/models');

const populateDb = async () => {
  const allPokesUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1118';
  try {
    const localPokesCount = await Pokemones.count();
    if (localPokesCount === 0) {
      const pokes = await axios.get(allPokesUrl);
      const allApiPokes = pokes.data.results;
      await Pokemones.bulkCreate(allApiPokes);
      console.log('db with index of pokemons was populated !!');
    } else if (localPokesCount === 1118) {
      console.log(`db is complete with ${localPokesCount} pokemons`);
    } else {
      console.log('check mySql db pokemon table pokemones');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  populateDb
};
