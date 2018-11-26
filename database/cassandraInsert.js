const ExpressCassandra = require('express-cassandra');

const models = ExpressCassandra.createClient({
  clientOptions: {
      contactPoints: ['127.0.0.1'],
      protocolOptions: { port: 9042 },
      keyspace: 'sidebar',
      queryOptions: {consistency: ExpressCassandra.consistencies.one}
  },
  ormOptions: {
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1
    },
    migration: 'safe'
  }
});

var AgentModel = models.loadSchema('Agent', {
  fields: {
    id: 'int',
    name: 'text',
    imageUrl: 'text',
    rating: 'int',
    phone: 'text',
    sales: 'int'
  },
  key: ['id']
});

AgentModel.syncDB(function(err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log('Changed agent schema: ', result);
  }
});

var SaleModel = models.loadSchema('Sale', {
  fields: {
    id: 'int',
    price: 'int',
    sellDate: 'text',
    beds: 'int',
    baths: 'int',
    squareFeet: 'int',
    address: 'text'
  },
  key: ['id']
});

SaleModel.syncDB(function(err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log('Changed sale schema: ', result);
  }
});
