const { gql } = require("apollo-server");

// Schema: A cosa la nostra data assomiglierà. Esempio: fruits: [String]
// Se definisco un type cosi': String sara' una string o potrà essere null. Se invece è cosi': String! sara solo string
exports.typeDefs = gql`
  type Query {
    products(filter: ProductsFilterInput): [Product!]!
    # Prendere solo 1 product
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!
    deleteCategory(id: ID!): Boolean!
  }

  # Object Type ovvero un type con dentro scalar types
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
    categoryId: ID!
    reviews: [Review]
  }

  type Category {
    name: String!
    id: ID!
    products(filter: ProductsFilterInput): [Product!]
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Float!
    productId: ID!
  }

  input ProductsFilterInput {
    onSale: Boolean
    averageRating: Int
  }

  input AddCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryName: String!
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productName: String!
  }
`;
