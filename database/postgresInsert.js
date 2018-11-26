const pg = require('pg');

const connect = 'postgres://localhost:5432/caitlindetro';
const db = new pg.Client(connect);
db.connect();

const listingAgents =
`CREATE TABLE IF NOT EXISTS listing_agents (
  id int PRIMARY KEY,
  name varchar,
  imageUrl varchar,
  rating int,
  phone varchar,
  sales int
)`;

const similarSales =
`CREATE TABLE IF NOT EXISTS similar_sales (
  id int PRIMARY KEY,
  price int,
  sellDate varchar,
  beds int,
  baths int,
  squareFeet int,
  address varchar
)`;

const csvSeed = 'COPY listing_agents FROM \'/Users/caitlindetro/Hack Reactor/SDC/sidebar-service/database/top.csv\' with (format csv)';

const csvSeed2 = 'COPY similar_sales FROM \'/Users/caitlindetro/Hack Reactor/SDC/sidebar-service/database/bottom.csv\' with (format csv)';

db.query(listingAgents)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
    
db.query(similarSales)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

db.query(csvSeed)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
        
db.query(csvSeed2)
  .then((res) => {
    console.log(res);
    db.end();
  })
  .catch((err) => {
    console.log(err);
    db.end();
  });

module.exports = db;
