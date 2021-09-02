const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const { exit } = require('process');

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () => console.log(`server started on PORT ${PORT}`));

const DB_URI = 'mongodb://localhost:27017/shoppingDb';
mongoose.connect(DB_URI).then(() => {
    console.log('Connected DB successfully')
}).catch(err => {
    console.log(err);
    exit(-1);
});