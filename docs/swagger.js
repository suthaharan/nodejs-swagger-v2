const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Movies API",
        version: '1.0.1',
        description: "NodeJS, Express with Swagger",
        contact: {
            name: "Kurinchilion"
        },
        servers: ["http://localhost:8082"]
      },
    },
    apis: ['./docs/**/*.yaml'],
  };


// initialize swagger-jsdoc
module.exports = swaggerJSDoc(swaggerOptions);