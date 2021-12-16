// search for specific pokemon by name or part of it
const { random } = require('../services/dbSearchRandom');
const axios = require('axios');

const randomPoke = async (req, res) => {
  const pokesNeeded = req.query.num;
  const responce = await random(pokesNeeded);
  try {
    const dataArray = [];
    for (let i = 0; i < pokesNeeded; i++) {
      dataArray.push((await axios.get(responce[i].url)).data);
    }
    const dataResponce = {
      meta: { returned: responce.length },
      data: dataArray.map((object) => {
        const modObject = {
          name: object.name,
          image: object.sprites.other['official-artwork'].front_default,
          order: object.order
        };
        return modObject;
      })
    };
    res.status(200).send(dataResponce);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = { randomPoke };
