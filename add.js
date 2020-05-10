module.exports={
doStuff:function (client){
 console.log('hello');

client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping6') {
    // Send "pong" to the same channel
    message.channel.send('pong1');
  }
});


}
}
