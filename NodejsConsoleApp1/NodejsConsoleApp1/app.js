
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
var comms = ["teemo", "fuck", "roll", "lmgtfy","join","leave"];

client.on('message', message => {
    var args = message.content.split(" ")
    const channel = message.member.voiceChannel;
    if (commandIs("help", message)) {
        message.author.sendMessage("Please refer to https://github.com/DeathRayz0221/LemBot for help");
    }
    if (commandIs("commands", message)) {
        var result = "The commands are: \n";
        for (var i = 0; i < comms.length; i++) {
            result += "~" + comms[i] + "\n";
        }
        message.channel.sendMessage(result);
    }
    if (commandIs(comms[0], message)) {
        message.channel.sendMessage("Want shrooms, " + message.author.username + "?");
    }
    if (commandIs(comms[1],message)) {
        message.channel.sendMessage("Dear " + message.author.username + '\n Fuck you in the ass :)');
    }
    if (commandIs(comms[2], message)) {
        message.channel.sendMessage("!role");
    }
    if (commandIs(comms[3], message)) {
        if (args.length === 1) {
            message.reply("LMGTFY. Add more words after ~lmgtfy for me to \"google\" it for you");
        }
        else {
            var newString = "http://lmgtfy.com/?q=";
            for (var i = 1; i < args.length; i++) {
                newString += args[i];
                if (i < args.length-1) {
                    newString += "+";
                }
            }
            message.reply(newString);
        }
    }
    if (commandIs(comms[4], message)) {
        channel.join();
    }
    if (commandIs(comms[5], message)) {
        channel.leave();
    }


});

