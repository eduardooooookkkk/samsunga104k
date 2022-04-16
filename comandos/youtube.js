const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
module.exports = {
  name: "link",//Nombre del comando
  alias: ["sv"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

  const embed = new Discord.MessageEmbed()
  .setTitle("Santander DHC <:zeromala:959602451542052884>")
  .setColor ("#d70808")

  .addField ("__Click aquí abajo para ir al servidor privado!__", "[Server VIP](https://www.roblox.com/games/2788229376?privateServerLinkCode=62860294749166268426026879260413)")
  

  message.channel.send({ embeds: [embed]})

  }

}
 
