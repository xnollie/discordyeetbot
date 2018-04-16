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
  if (message.content === 'YEet') {
    message.channel.send('YEET <:Berrypicker:377903953368711168>');
  }    
  if (message.content === 'YEEt') {
    message.channel.send('YEET <:MeguFace:378570119414284298>');
  }    
  if (message.content === 'yeET') {
    message.channel.send('YEET <:ahegao1:378565104310026240>');
  }    
  if (message.content === 'yeeT') {
    message.channel.send('YEET <:SoGood:378564218154123264>');
  }    
  if (message.content === 'YeET') {
    message.channel.send('YEET <:YAMETE:378915090524798976>');
  }    
  if (message.content === 'YEeT') {
    message.channel.send('YEET <:Franku:378569643335483392>');
  }  
  if (message.content === 'YeEt') {
    message.channel.send('YEET <:FeelsTastyMan:378567810563178506>');
  }  
  if (message.content === 'yEeT') {
    message.channel.send('YEET <:FeelsPepoMan:378568113328881685>');
  }  
  if (message.content === 'yEet') {
    message.channel.send('YEET <:NicoSmug:378572469356986369>');
  }  
  if (message.content === 'yeEt') {
    message.channel.send('YEET <:pinkWha:378571973766414337>');
  }  
});

client.login(process.env.BOT_TOKEN);
