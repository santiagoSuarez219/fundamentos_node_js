const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash);

    bcrypt.compare(password, hash, function(err, res) {
        console.log(res);
    });
});