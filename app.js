const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('I\'m Online');
})

var yoteResponses = ["Say yote again motherfucker I dare you ...", "Umm 'scuse me it's yeeted*", "The past tents of yeet is yeeted. Are you tupid or something?", "I shall yeet your yote and raise you a yeeted*"];
  client.on("message", message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;

  // if message contains yeet drop a big yeet right back at em with a random emote
 if(message.content.toLowerCase().match(/y[\s]*[e3][\s]*[e3]+[\s]*t/)){
    if(Math.floor(Math.random() * 100000) === 373737){
      message.channel.send("bitch");
    }
    else{
      message.channel.send("YEET "+message.guild.emojis.random());
    }
  }

  // if message contains yote drop a randomly selected reply from responses array
  if(message.content.toLowerCase().match(/yote/)){
      message.channel.send(yoteResponses[Math.floor(Math.random() * (yoteResponses.length -1))])
  }

  // 1 in 10.000 chance to ping user 
  if(Math.floor(Math.random() * 2) === 37){
    message.channel.send("YEET! <@131883237583618050>"); // ping Matthias for ballbusting purposes
    //message.channel.send("YEET! <@283767301033951233>"); // ping Semanari for meme purposes
    //message.channel.send("YEET! <@88328049401040896>"); // ping Hailey for testing purposes
  }

  // 1 in a 100.000 chance for a user to get uwu'd
  if(Math.floor(Math.random() * 100000) === 37){
    message.channel.send(message.author.toString()+" uwu");
  }
});

client.login(process.env.BOT_TOKEN);
