const order = {
  customer: {
    address: {
      street: 'Via Roma 100',
      city: ''
    }
  }
};

if (order?.customer?.address && !order.customer.address.city) {
  console.log('City is required');
} else console.log('Correct order');