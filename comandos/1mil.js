const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
module.exports = {
  name: "1M",//Nombre del comando
  alias: ["1mil"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

  const embed = new Discord.MessageEmbed()
  .setTitle("Santander DHC")
  .setColor ("#090502")
  .setDescription ("__Hola, dale al link para completar tu compra <:zero:959589454820032542>__")
  .addField ("__Precio: 35 robux__", "[Pago](https://www.roblox.com/catalog/8419624339/1-mil)")
  

  message.channel.send({ embeds: [embed]})

  }

}
 