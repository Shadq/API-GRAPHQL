exports.Category = {
  products: (parent, { filter }, { products }) => {
    const categoryId = parent.id;
    const categoryProducts = products.filter(
      (product) => product.categoryId === categoryId
    );
    let filteredCategoryProducts = categoryProducts;

    if (filter) {
      if (filter.onSale === true) {
        // Questo ci ritorna i products che sono onSale
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => {
            return product.onSale;
          }
        );
      }
      return filteredCategoryProducts;
    }
  },
};
