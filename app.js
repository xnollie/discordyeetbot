const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('I\'m Online');
})

client.login(process.env.BOT_TOKEN);
