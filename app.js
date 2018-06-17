const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('I\'m Online');
})

client.on("message", message => {
  if(message.author.bot) return;

  if(message.content.toLowerCase().match(/y[e3][e3]+t/)){
    message.channel.send("YEET "+message.guild.emojis.random());
  }
});

client.login(process.env.BOT_TOKEN);
