exports.Query = {
  products: (_, { filter }, { products, reviews }) => {
    let filteredProducts = products;
    let filteredReviews = reviews;

    if (filter) {
      const { onSale, averageRating } = filter;

      if (onSale) {
        // Questo ci ritorna i products che sono onSale
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }

      if ([1, 2, 3, 4, 5].includes(averageRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const averageProductRating = sumRating / numberOfReviews;
          return averageProductRating >= averageRating;
        });
      }
    }

    return filteredProducts;
  },
  product: (_, args, { products }) => {
    const { id } = args;
    return products.find((product) => product.id === id);
  },
  categories: (_, args, { categories }) => categories,
  category: (_, args, { categories }) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
