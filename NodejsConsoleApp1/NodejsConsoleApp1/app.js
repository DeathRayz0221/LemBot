
var Discord = require('discord.js');

const Events = Discord.Events;
const client = new Discord.Client();
loga = "Mjk1NzUwNzIzMTE3OTA3OTY4";
logb = ".C7oW3Q";
logc = ".zNvmGRRMkK6WffH2VyAdAFTwenU";


//Insert functions here 
function commandIs(str, msg) {
    return msg.content.startsWith("~" + str)
}
client.login(loga+logb+logc);

function pluck(array) {
    return array.map(function (item) { return item["name"]; });
}

function hasRole(mem, role) {
    if (pluck(mem.role).includes(role)) {
        return true;
    }
    else {
        return false;
    }
}
//Console
client.on('ready', e => {
    console.log('Connected :)');
});

//Bot commands
client.on('message', message => {
    if (commandIs("teemo", message)) {
        message.channel.sendMessage("Want shrooms, " + message.author.username + "?");
    }
    if (commandIs('fuck',message)) {
        message.channel.sendMessage("Dear " + message.author.username + '\n Fuck you in the ass :)');
    }
    if (commandIs('roll', message)) {
        message.channel.sendMessage("!role");
    }
});

