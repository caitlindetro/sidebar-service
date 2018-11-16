const Chance = require('chance');
const fs = require('fs');
const stringify = require('csv-stringify');

const chance = new Chance();

const bottomBar = [];

for (var i = 6000001; i <= 7000000; i++) {
  bottomBar.push({
    'id': i,
    'price': Math.floor(Math.random() * (1000000 - 100000) + 100000),
    'sellDate': chance.date({string: true, year: 2018}),
    'beds': Math.floor(Math.random() * 5),
    'baths': Math.floor(Math.random() * 5),
    'squareFeet': Math.floor(Math.random() * (10000 - 1000) + 1000),
    'address': `${chance.address()}, ${chance.city()}, ${chance.state()} ${chance.zip()}`
  })
}

stringify(bottomBar, (err, output) => {
  fs.appendFile('database/bottom.csv', output, err => {
    if (err) {
      console.error(err);
    }
    console.log('csv created!');
  });
});
