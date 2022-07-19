const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger')

const app = express();


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  
app.get('/movies', (req,res) => {
    res.send([
        {
            'id': 1,
            'name': 'Enter the Dragon'
        }
    ])
});

 app.post('/movies', (req, res) => {
    res.status(201).send();
});

app.put("/movies", (req, res) => {
  res.status(200).send("Successfully updated movies");
});

app.listen(8082, () => {
    console.log("Server started. Listening on 8082");
});