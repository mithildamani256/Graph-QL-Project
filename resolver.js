const myPackages =
[
  {
    id: 1,
    amount: 35000,
    description: "Indian Travels",
    maxcapacity: 25,
    currentcapacity: 17,
  },
  {
    id: 2,
    amount: 50000,
    description: "Foreign Travels",
    maxcapacity: 10,
    currentcapacity: 9,
  },
  {
    id: 3,
    amount: 45000,
    description: "Domestic Travels",
    maxcapacity: 15,
    currentcapacity: 15,
  },
];

const paymentinformation =
[
  {
    customer_id: 100,
    status: "half-paid",
  },
  {
    customer_id: 101,
    status: "full-paid",
  },
  {
    customer_id: 102,
    status: "full-paid",
  },
];

const customerinfo =
[
  {
    customer_id: 100,
    name: "Mithil Damani",
    age: 18,
    contact: 7229998855,
    package_id: 2,
  },
  {
    customer_id: 101,
    name:"Dev",
    age: 21,
    contact: 7689583900,
    package_id: 1,
  },
  {
    customer_id: 102,
    name: "Jos",
    age: 23,
    contact: 7245362855,
    package_id: 3,
  },
];

// customers

const resolvers = {
  Query: {

    allPackages: () =>
    {
      return myPackages;
    },

    get_package: (root, {name}) =>
    {
      return myPackages.filter(package => {
      return package.description === name;
      });
    },

    availablepackages: () =>
    {
      return myPackages.filter(package => {
        return package.maxcapacity > package.currentcapacity;
      });
    },

    customerdetails: (root, {id}) =>
    {
      return customerinfo.filter(customer => {
        return customer.package_id === id;
      });
    },

    halfpaid: (root, {id}) =>
    {
      return paymentinformation.filter(payment => {
      return payment.customer_id === id;
      });
    },
  },

Mutation:
{
  createCustomer: async (root, {name, age, contact, packageid}) =>
    {
      let m = await myPackages.filter(package => {
        return package.id === packageid;
      });

     console.log(m);
     m = m[0];
    console.log("the maximum capacity is " + m.maxcapacity);
    console.log("the current capacity is " + m.currentcapacity);


      if (m.maxcapacity > m.currentcapacity)
      {
        let customer =
        {
          customer_id: 100 + customerinfo.length,
          name: name,
          age: age,
          contact: contact,
          package_id: packageid,
        }
        customerinfo.push(customer);
        m.currentcapacity += 1;
        // return customer;
      }
      else {
        console.log("the given package is booked out !");
        throw new Error("no more booking allowed");
      }
    },
}

};

module.exports = { resolvers };


// 1. show all avaialable bookings for customer to book
// 2. as a customer i should be able to book a package and provide my details
// 3. as a travel agent, i should know which customers have paid half amount
// 4. as a travel agent, i should get the list of all the customers and their details for a package
