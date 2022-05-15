const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Package
  {
  id: Int!
  amount: Int!
  description: String!
  maxcapacity: Int!
  currentcapacity: Int!
}
type customer
  {
    customer_id: Int!
    name: String!
    age: Int!
    contact: Int!
    package_id: Int!
}
type payment
  {
    customer_id: Int!
    status: String!
}
type Query
  {
    allPackages: [Package]
    get_package(name : String!): [Package]
    availablepackages: [Package]
    customerdetails(id : Int!): [customer]
    halfpaid(id : Int!): [payment]
  }

type Mutation
{
  createCustomer(name: String! , age: Int!, contact: Int! , packageid: Int!): [customer!]
}
`;

module.exports = { typeDefs };
