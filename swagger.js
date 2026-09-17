const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts Project API Documentation',
  },
  host: 'localhost:3000', // Update this to your Render URL later when publishing
  schemes: ['http', 'https'],
};

const outputFile = './swagger.output.json';
const endpointsFiles = ['./routes/contacts.js']; // Or './routes/contacts.js' depending on how your main router is structured

swaggerAutogen(outputFile, endpointsFiles, doc);
