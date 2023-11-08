const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (_, { input }, { categories }) => {
    const { name } = input;

    const newCategory = {
      id: uuid(),
      name: name,
    };

    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (_, { input }, { products, categories }) => {
    const { name, description, quantity, price, image, onSale, categoryName } =
      input;

    let category = categories.find(
      (category) => category.name === categoryName
    );

    const newProduct = {
      id: uuid(),
      name: name,
      description: description,
      quantity: quantity,
      price: price,
      image: image,
      onSale: onSale,
      categoryId: category.id,
    };

    products.push(newProduct);
    return newProduct;
  },
  addReview: (_, { input }, { products, reviews }) => {
    const { date, title, comment, rating, productName } = input;

    let product = products.find((product) => product.name === productName);

    const newReview = {
      id: uuid(),
      date: date,
      title: title,
      comment: comment,
      rating: rating,
      productId: product.id,
    };

    reviews.push(newReview);
    return newReview;
  },
  deleteCategory: (parent, { id }, { categories }) => {
    categories = categories.filter((category) => category.id !== id);
    return true;
  },
};
