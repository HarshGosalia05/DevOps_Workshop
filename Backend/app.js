let express = require('express');
let cors = require('cors');
let app = express();
let port = 9000;

app.use(cors());

app.get('/ping', (req,res) => {
    res.send({
        message: 'Hello, World!'
    })
});


app.get('/',(req,res) => {
    res.send({
        message: 'Welcome to the Backend API! connect with /ping to check if the server is running'
    })
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
