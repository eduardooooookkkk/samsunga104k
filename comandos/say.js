const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "say",//Nombre del comando
  alias: ["decir"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

const escribe = args.slice(0).join(' ')
if(!escribe) return message.channel.send("✖ `|` No especificaste un texto a decir!")
message.delete()
message.channel.send(escribe)


  }

}
 