const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const print = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, número${order.address.number}, apto.${order.address.apartment}`
  console.log(print);
}

customerInfo(order);

const orderModifier = (order, newName, newPrice) => {
  const orderModification = {
    name: newName,
    payment: {
      total: newPrice,
    }
  }
  Object.assign(order, orderModification);
  const pizzaValues = Object.keys(order.order.pizza);

  const newPrint = `Olá ${order.name}, o total do seu pedido de ${pizzaValues[0]}, ${pizzaValues[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00`;

  console.log(newPrint);
}

orderModifier(order, 'Luiz Silva', 50);
