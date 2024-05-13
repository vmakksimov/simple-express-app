const modelFriends = require('../models/friends.model')

function postFriends(req, res){
    console.log("request", req)
    if (!req.body.name){
        return res.status(400).json({error: "The name is wrong"})
    }
    
    const newFriend = {
        name: req.body.name,
        id: modelFriends.length
    }
    modelFriends.push(newFriend)
    res.json(newFriend)
}

function getFriends(req, res){
    res.json(modelFriends)
}

function getFriend (req, res){
    const friendId = Number(req.params.friendId);
    const friend = modelFriends[friendId]
    if (friend){
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        })
    }
}


module.exports = {
    postFriends,
    getFriends,
    getFriend
}