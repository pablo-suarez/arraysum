const { read } = require('./controllers/file');
const { sum } = require('./controllers/sum');

//Start de App
read('./files/data.txt').then((data) => {
    sum(data);
}, (err) => {
    console.log(err);
});