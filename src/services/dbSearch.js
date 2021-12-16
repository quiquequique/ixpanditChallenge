const { Pokemones } = require('../database/models');
const { Op } = require('sequelize');

const search = async (hint) => {
  try {
    // console.log(hint + '2');
    const pokes = await Pokemones.findAll({ where: { name: { [Op.like]: '%' + hint + '%' } } });
    return (pokes);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { search };
