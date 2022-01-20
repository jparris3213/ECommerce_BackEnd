// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "product_id",
  onDelete: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: 'product_id',//Keep an Eye on this for future developemnt problems with "SequlizeEagerError"
  as: 'product_tagged'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: 'tag_id',
  as: 'tagged_Product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
