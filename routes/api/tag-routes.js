const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
     // find all tags
  const tagData = await Tag.findAll({
    // be sure to include its associated Product data
    include: [{ model : Product}]
  }); 

  res.status(200).json(tagData);

}
  catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id`
  const tagData = await Tag.findByPk(req.params.id, {
    // be sure to include its associated Product data
    include: [{ model : Product}]
  });

  if (!tagData) {
    res.status(404).json({ message: 'Oops! No product found with that id!'});
    return;
  }

  res.status(200).json(tagData);

}
catch (err) {
  res.status(500).json(err);

}

});

router.post('/', (req, res) => {
  // create a new tag
 
    Tag.create(req.body)
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      res.status(400).json(err)
    });
  
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
