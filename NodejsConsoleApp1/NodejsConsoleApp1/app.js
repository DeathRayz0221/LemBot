
var Discord = require('discord.js');

const Events = Discord.Events;
const client = new Discord.Client();
//const guild = client.guilds.
var squad = '236673341325312011';

const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const yt = require('youtube-node');

loga = "Mjk1NzUwNzIzMTE3OTA3OTY4";
logb = ".C8MQvA";
logc = ".wKT5hzDrzU723zFdb24y4XAn3yo";

//emojis
const eggplant = '\uD83C\uDF46';
const cookie = '\uD83C\uDF6A';
var arjess;
//var arjess = '\<:arjess2:277932927055036417>';


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


//Youtube commands
/*
function getTitle{

}
function searchByKeyword(queue) {
    
}
*/

//Console
client.on('ready', e => {
    console.log('Connected :)');
    client.user.setGame("Type ~help for info");
    var channel = client.channels.find('name', 'squad_squad_and_chill');
    if (channel != null) {
       // channel.sendMessage("Hello @everyone there is a hidden command and you get a cookie if you are able to find it. " +
       //    "The cookie will be provided by LemDaKilla. Happy hunting :)!!");
    }
    console.log("");


    


});



//Bot commands
var comms = ["teemo", "fuck", "roll", "lmgtfy","join","leave","play"];

client.on('message', message => {
    var args = message.content.split(" ")

    //channel emojis
    var arjess = client.emojis.find('name', 'arjess2');
    
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
    //Teemo
    if (commandIs(comms[0], message)) {
        message.channel.sendMessage("Want shrooms, " + message.author.username + "?");
    }
    //Fuck
    if (commandIs(comms[1],message)) {
        message.channel.sendMessage("Dear " + message.author.username + '\n Fuck you in the ass :)');
    }
    //Roll
    if (commandIs(comms[2], message)) {
        message.channel.sendMessage("!role");
    }
    //LMGTFY
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

    //Music
    
    if (commandIs(comms[4], message)) {
        const channel = message.member.voiceChannel;
        if (channel != null) {
            
            channel.join().then(connection => console.log("Connected to voice!"));
        }
        else {
            message.reply("Please join a voice channel!");
        }
    }
    if (commandIs(comms[5], message)) {
        const channel = message.member.voiceChannel;
        channel.leave();
    }

    //Play Teemo's stuff if ~teemo is typed
    if (commandIs(comms[0], message)) {
        message.channel.sendFile('media/teemoShroom.gif');
        const channel = message.member.voiceChannel;
        if (channel != null) {
            
            channel.join()
                .then(connection => {
                    const dispatcher = connection.playFile('media/astroTeemo.mp3');
                }).catch(console.error);
        }
        else {
            //message.reply("Please join a voice channel!");
        }
    }

    //Play youtube audio
    if (commandIs(comms[6], message)) {
        message.delete();
        if (args.length != 2 || !args[1].includes("youtube.com")) {
            message.reply("Please enter the right format to play a youtube audio. For example: \n" +
                "~play https://www.youtube.com/watch?v=dQw4w9WgXcQ args=" + args.length);
            console.log(args[1].includes("www.youtube.com"));

        }
        else if (args.length > 1) {
            

            var youTube = new yt();
            youTube.setKey('AIzaSyCkOS3SQrgg9Lko4eUuIgLAPH2MxRAn3Pw');
            
            var ytId = args[1].split("=")[1];
            //console.log(ytId);

            //Get youtube title
            
            youTube.getById(ytId, function(error, result) {
                if (error) {
                    console.log("error!");
                }
                else {
                    vidInfo = result.items[0].snippet
                    console.log(vidInfo);
                    vidTitle = vidInfo.title;
                    message.channel.sendMessage("Now playing: " + vidTitle);
                    
                }
            });
            
            const channel = message.member.voiceChannel;
            
            if (channel != null) {
                const channel = message.member.voiceChannel;
                channel.join()
                    .then(connection => {
                        const stream = ytdl(args[1], { filter: 'audioonly' });
                        const dispatcher = connection.playStream(stream);
                    }).catch(console.error);
            }
        }
    }


    //arjess XD
    if (message.author.id == '148674269193306113') {
        message.react(eggplant);
        if (arjess != null) {
            message.react(arjess);
        }
        
    }
    if (message.author.id == '106441089921069056' || message.author.id == '105910855262064640') {
        
        message.react(cookie);

    }
    
});
process.on('unhandledRejection', console.error)

