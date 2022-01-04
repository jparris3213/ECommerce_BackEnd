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
});

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_tags",
}),
  // Tags belongToMany Products (through ProductTag)
  Tags.belongsToMany(Product, {
    through: {
      model: ProductTag,
      unique: false,
    },
    as: "tagged_products",
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
