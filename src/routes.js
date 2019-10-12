const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    // Product.create ({
    //     title: 'React Native',
    //     description: 'Build native apps with React',
    //     url: 'http://github.com/facebook/react-native'
    // });

    return res.send('Teste')
});

module.exports = routes;