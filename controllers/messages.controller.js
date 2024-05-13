function getMessages(req, res){
    res.send('<ul>Getting messages:</ul>')
}
function postMessages(req, res){
    console.log('Updating messages... ')
}

module.exports = {
    getMessages,
    postMessages
}