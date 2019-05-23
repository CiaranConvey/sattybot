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
client.login(process.env.NTgxMTk2MjMxNTgyNDE2ODk2.XObvRw.An_mRJ7PM3vo1dWDlqPjdH7B2ic);
