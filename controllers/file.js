var fs = require('fs');

//Reading file functionality
const read = (location) => {
    return new Promise((resolve, reject) => {
        fs.readFile(location, 'UTF-8', (error, data) => {
            if (error) { reject(error) }
            resolve(data);
        })
    });
}

module.exports = {
    read
}