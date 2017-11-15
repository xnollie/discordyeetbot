const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('I\'m Online');
})

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content === 'YEET') {
    message.channel.send('YEET <:DabBoi:379331096002822146>');
  }
  if (message.content === 'yeet') {
      message.channel.send('YEET <:ayeeDab:379330658444640266>');
  }
  if (message.content === 'Yeet') {
    message.channel.send('YEET <:lanDab:379330650559217666>');
  }
  if (message.content === 'yEET') {
    message.channel.send('YEET <:HotBoi:378570952231092235>');

  if (message.content.match(/sock/i)) {
   bot.sendMessage(message, "SOCK DETECTED!");
  }
});

client.login(process.env.BOT_TOKEN);
