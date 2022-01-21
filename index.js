const app = require('express')();
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

http.createServer(app).listen(3000);
console.log('Listening port:', 3000);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

require('./endpoints')(app);

const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./endpoints.js'];

swaggerAutogen(outputFile, endpointsFiles);
