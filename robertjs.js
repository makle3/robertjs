

const {Client, MessageEmbed} = require('discord.js');
const client = new Client();
//hotload = require('hotload');
//lib = hotload('./add.js', function(lib2){
//   console.log('lib has loaded/reloaded');
//   lib2.doStuff(client);
//});
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
	  
    // Send the user's avatar URL
    msg.reply(msg.author.displayAvatarURL() + ' test3');
  }
});

client.login('NDU1MzUyMTk3NzgyNDM3OTE5.XrcLGw.qKkLQGPGagZhWwL9TGTM5DChraY');

client.on('message', msg => {
 if(msg.content === 'ping2'){
  msg.reply('test4');
 }
});

client.on('message', msg => {
 if(msg.content.toLowerCase() === 'leverpostej'){
  msg.channel.send('https://imgur.com/a/OsjKCzu');
 }
});


