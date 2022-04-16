const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
module.exports = {
  name: "verify",
  alias: ["verificacion"],
  execute (client, message, args) {

  const embed = new Discord.MessageEmbed()
  
  .setColor ("#090502")
  .setDescription (" Reacciona a  `✅ ` para desbloquear el servidor!")
  


  message.channel.send({ embeds: [embed]})

  }

}
 
