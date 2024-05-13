const express = require('express')
const friendsRouter = express.Router();
const friendsController = require('../controllers/friends.controller')

// friendsRouter.get('/', (req, res) => {
//     res.send('Hello, Viktor!');
// })


//adding middleware
friendsRouter.use((req, res, next) => {
    console.log(`ip address of the request coming from: ${req.ip}`)
    next();
})

friendsRouter.post('/', friendsController.postFriends)
friendsRouter.get('/', friendsController.getFriends)
friendsRouter.get('/:friendId', friendsController.getFriend)

module.exports= friendsRouter;