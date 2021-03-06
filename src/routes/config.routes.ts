const {Router} = require('express');
const Config = require('../models/Config');
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const router = Router();

// POST /api/config
router.post(
  '/',
  jsonParser,
  body('text').isString(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array(), message: 'invalid data'});
      }
      const { text } = req.body;
      const newConfig = new Config(JSON.parse(text));
      await newConfig.save();
      res.status(200).json({message: 'Новый конфиг успешно сохранен'});

    } catch (e) {
      console.log('Oshibka', e);
      res.status(500).json({message: 'Что то пошло не так, попробуйте снова', e});
    }
  });

// GET /api/config
router.get('/', async (req, res) => {
  // const data = await Config.find({});
  try {
    const data = await Config.find().sort({ _id: -1 }).limit(1);
    res.status(200).json(data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;