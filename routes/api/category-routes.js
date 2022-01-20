const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const catdata = await Category.findAll(
      {
        include: [ {model: Product} ]
      });
    res.status(200).json(catdata);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const catData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!catData) {
      res.status(404).json({ message: "no Category with this ID" });
      return;
    }

    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const catData = await Category.create(req.body);
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  Category.update(
      {
        category_name: req.body.category_name,
      },
      {
      where: {
        id: req.params.id,
      },
    }
  )
  .then((updatedCategory) => {
    res.status(200).json(updatedCategory);
  })
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value 
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCategory) => {
    res.status(200).json(deletedCategory);
  })
  .catch((err) => res.status(500).json(err));
});

module.exports = router;
