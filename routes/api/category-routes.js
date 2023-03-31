const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories
  const catData = await Product.findAll({
    // be sure to include its associated Products
    include: [{ model : Product}]
  }); 

  res.status(200).json(catData);

}
catch (err) {
  res.status(500).json(err);
}

  
  
});

router.get('/:id', async (req, res) => {

  try {
    // find one category by its `id` value
  const catData = await Product.findByPk(req.params.id, {
    // be sure to include its associated Products
    include: [{ model : Product}]
  });

  if (!catData) {
    res.status(404).json({ message: 'Oops! No category found with that id!'});
    return;
  }

  res.status(200).json(catData);

  }
  catch (err) {
  res.status(500).json(err);

}
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
