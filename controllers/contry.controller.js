const Contry = require("../models/Contry.model");

module.exports.contriesController = {
  getContries: async (req, res) => {
    try {
      const contries = await Contry.find({});

      return res.json(contries);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },

  addContry: async (req, res) => {
    const { name, cityId } = req.body;

    try {
      const contry = await Contry.create({
        name,
        cityId,
      });

      return res.json(contry);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },
};
