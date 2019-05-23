const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'killsatty') {
    	message.reply('*dies of curry dehydration');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.SATTYBOT_TOKEN);
