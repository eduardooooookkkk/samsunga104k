const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
module.exports = {
  name: "grupo",//Nombre del comando
  alias: ["roblox"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

  const embed = new Discord.MessageEmbed()
  .setTitle("Santander DHC")
  .setColor ("#090502")

  .addField ("__Link:__", "[Grupo roblox](https://www.roblox.com/groups/4487749/Joshua-YT#!/about)")
 

  message.channel.send({ embeds: [embed]})

  }

}
 