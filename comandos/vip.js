const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
module.exports = {
  name: "vip",//Nombre del comando
  alias: ["VIP"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

  const embed = new Discord.MessageEmbed()
  .setTitle("Santander DHC")
  .setColor ("#090502")
  .setDescription ("__Costo: 150 robux__")
  .addField ("__Link:__", "[VIP](https://www.roblox.com/catalog/9164816255/VIP)")


  message.channel.send({ embeds: [embed]})

  }

}
 