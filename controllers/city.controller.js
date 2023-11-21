const Cities = require("../models/City.model");

module.exports.citiesController = {
  getCities: async (req, res) => {
    try {
      const cities = await Cities.find({});

      return res.json(cities);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },

  addCity: async (req, res) => {
    const { name } = req.body;

    try {
      const cities = await Cities.create({
        name,
      });

      return res.json(cities);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },
};