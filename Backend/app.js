let express = require('express');
let app = express();
let port = 9000;

app.get('/ping', (req,res) => {
    res.send({
        message: 'Hello, World!'
    })
});


app.get('/',(req,res) => {
    res.send({
        message: 'Welcome to the Backend API!'
    })
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
