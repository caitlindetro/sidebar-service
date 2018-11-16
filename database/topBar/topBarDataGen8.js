const faker = require('faker');
const fs = require('fs');
const stringify = require('csv-stringify');

const topBar = [];

for (var i = 7000001; i <= 8000000; i++) {
  topBar.push({
    'id': i,
    'name': faker.name.findName(),
    'imageUrl': faker.image.avatar(),
    'rating': Math.floor(Math.random() * (5 - 1) + 1),
    'phone': faker.phone.phoneNumber(),
    'sales': Math.floor(Math.random() * (100 - 0) + 0) 
  })
}

stringify(topBar, (err, output) => {
  fs.appendFile('database/top.csv', output, err => {
    if (err) {
      console.error(err);
    }
    console.log('csv created!');
  });
});
