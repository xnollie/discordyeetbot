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
  }  
  if (message.content === 'yEEt') {
    message.channel.send('YEET <:YaGonLikeDis:378573605056937995>');
  } 
  if (message.content === 'YeeT') {
    message.channel.send('YEET <:MmmYea:378567213814382593>');
  }  
});

client.login(process.env.BOT_TOKEN);
