const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
module.exports = {
  name: "commands",//Nombre del comando
  alias: ["comandos"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

  const embed = new Discord.MessageEmbed()
  
  .setDescription("Actualmente cuento con `5` comandos! ")
  .setFooter("| Arsenic#0001 🌟 |")
          .addField('**__Camisas__**', `Links de las camisas`, true)
          
          .addField('**__Link__**', `Link del servidor privado`, true)
          .addField('**__Vip__**', `Link del pase VIP`, true)
          .addField('**__Grupo__**', `Link del grupo de roblox`, true)
          .addField('**__Random__**', `El bot te respondera con una foto random!`, true)
      
          .setColor(`#efeded`)
          
          
          .setImage ("https://cdn.discordapp.com/attachments/959560675573792808/959710595626704976/Picsart_22-04-02_00-06-47-374.jpg")

  message.channel.send({ embeds: [embed]})

  }

}