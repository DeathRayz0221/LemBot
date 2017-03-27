
var Discord = require('discord.js');

const Events = Discord.Events;
const client = new Discord.Client();
/*
client.connect({
    token: 'T6Bm_VrskOTMZ0cCXDAPRPBXTetuA2oi'
});
*/
client.login('Mjk1NzUwNzIzMTE3OTA3OTY4.C7oW3Q.zNvmGRRMkK6WffH2VyAdAFTwenU');

client.Dispatcher.on(Events.GATEWAY_READY, e => {
    console.log('Connected as: ' + client.User.Username);
    });

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    if (e.message.content == 'PING') {
        e.message.channel.sendMessage('PONG');
}
});



//console.log("Hello!");