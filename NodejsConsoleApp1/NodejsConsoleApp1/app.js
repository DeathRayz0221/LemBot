
var Discord = require('discord.js');

const Events = Discord.Events;
const client = new Discord.Client();

function commandIs(str, msg) {
    return msg.content.startsWith("!"+str)
}
client.login('Mjk1NzUwNzIzMTE3OTA3OTY4.C7oW3Q.zNvmGRRMkK6WffH2VyAdAFTwenU');

client.on('ready', e => {
    console.log('Connected :)');
});

client.on('message', message => {
    if (commandIs("teemo", message)) {
        message.reply("Want shrooms, " + message.author.username + "?");
    }
    if (commandIs('fuck',message) {
        message.channel.sendMessage("Dear " + message.author.username + '\n Fuck you in the ass :)');
    }
    if (commandIs('roll', message) {
        message.channel.sendMessage("!role");
    }
});

