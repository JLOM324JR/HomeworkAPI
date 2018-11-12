var express = require('express');
var app = express();
var cors = require('cors')
var db = require('./database.js') //connect database
app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));

//Add  rounting 
// index page
app.get('/', function (req, res) {
    res.send('Express is running');
});

var output = {
    status: 'success',
    message: 'REST API is working'
}
app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});

app.get('/api/products/', db.getAllProducts)
app.get('/api/products/:id', db.getProductByID)
app.post('/api/products/', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/:id', db.deleteProduct);


app.get('/api/purchase_items', db.getAllPur_items);
app.get('/api/purchase_items/:id', db.getPur_itemsId);
app.post('/api/purchase_items', db.insertPur_items); 
app.put('/api/purchase_items/:id', db.updatePur_items); 
app.delete('/api/purchase_items/:id', db.deletePur_items);

app.get('/api/purchase', db.getPurchase);
app.get('/api/purchase/:id', db.getPurchaseId);
app.post('/api/purchase', db.insertPurchase);
app.put('/api/purchase/:id', db.updatePurchase);
app.delete('/api/purchase/:id', db.deletePurchase);

app.get('/api/User', db.getUser);
app.get('/api/User/:id', db.getUserByID);
app.post('/api/User', db.insertUser);
app.put('/api/User/:id', db.updateUser);
app.delete('/api/User/:id', db.deleteUser);


var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});