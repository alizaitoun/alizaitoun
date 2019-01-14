const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("534369154719940659")
setInterval(function() {
channel.send(`Aloshe`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
