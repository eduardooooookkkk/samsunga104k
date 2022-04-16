const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
module.exports = {
  name: "camisas",//Nombre del comando
  alias: ["links"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

  const embed = new Discord.MessageEmbed()
  .setTitle("Santander DHC")
  .setDescription ("__Links de las camisetas__ <:zeroyay:959600456978550844>")
  .setColor ("#090502")
  .addField ("Link: <:zeroyay:959600456978550844>", "[1M](https://www.roblox.com/catalog/8419624339/1-mil)")
  .addField ("Link: <:zeroyay:959600456978550844>", "[2M](https://www.roblox.com/catalog/8435121862/2-mil)")
 
 


  message.channel.send({ embeds: [embed]})

  }

}