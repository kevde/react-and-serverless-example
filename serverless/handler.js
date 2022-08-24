'use strict';

module.exports.getLastNames = (event, context, callback) => {
  const lastNames = ['Smith', 'Taylor', 'Resco'];
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      last_names: lastNames,
    }),
  };

  callback(null, response);
};
