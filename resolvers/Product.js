exports.Product = {
  category: (parent, args, { categories }) => {
    const categoryId = parent.categoryId;
    return categories.filter((category) => category.id === categoryId);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((review) => review.productId === id);
  },
};
