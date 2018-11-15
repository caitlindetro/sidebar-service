const faker = require('faker');
const fs = require('fs');
const stringify = require('csv-stringify');

const bottomBar = [];

for(var i = 1; i <= 500000; i++) {
  bottomBar.push({
    'id': i,
    'price': Math.floor(Math.random() * (1000000 - 100000) + 100000),
    'sellDate': faker.date.recent(),
    'beds': Math.floor(Math.random() * 5),
    'baths': Math.floor(Math.random() * 5),
    'squareFeet': Math.floor(Math.random() * (10000 - 1000) + 1000),
    'address': faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.stateAbbr() + ' ' + faker.address.zipCode()
  })
}

stringify(bottomBar, (err, output) => {
  fs.appendFile('bottom.csv', output, err => {
    if (err) {
      console.error(err);
    }
    console.log('csv created!');
  });
});
