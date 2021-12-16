const { search } = require('../services/dbSearch');
const axios = require('axios');

const searchPoke = async (req, res) => {
  try {
    const hint = req.query.name;
    if (hint !== null) {
      const foundedPokes = await search(hint);
      if (foundedPokes.length > 0) {
        const axiosArray = foundedPokes.map((object) => {
          const modObject = {
            url: object.dataValues.url,
            name: object.dataValues.name
          };
          return modObject;
        });
        const dataArray = [];
        for (let i = 0; i < axiosArray.length; i++) {
          dataArray.push((await axios.get(axiosArray[i].url)).data);
        }
        const dataResponce = {
          meta: { found: foundedPokes.length },
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
      } else {
        return res.status(404).send({ meta: { found: foundedPokes.length } });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { searchPoke };
