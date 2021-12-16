const { Pokemones } = require('../database/models');

const random = async (num) => {
  const maxPoke = 1118;
  const randomArray = [];
  for (let i = 0; i < num; i++) {
    randomArray.push(Math.floor(Math.random() * maxPoke));
  }
  try {
    const responce = await Pokemones.findAll({ where: { id: [...randomArray] } });
    const mapedResponce = responce.map((object) => {
      const modObject = {
        url: object.dataValues.url,
        id: object.dataValues.id,
        name: object.dataValues.name
      };
      return modObject;
    });
    return mapedResponce;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { random };
