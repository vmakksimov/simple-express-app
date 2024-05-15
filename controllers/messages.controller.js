
const path = require('path');

function getMessages(req, res){
    // res.send('<ul>Getting messages:</ul>')
    res.render('messages', {
        dogs: ["Nala", "King", "Aya", "Lucky"]
    })
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'rottie.jpg'));
}
function postMessages(req, res){
    console.log('Updating messages... ')
}

module.exports = {
    getMessages,
    postMessages
}