const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "ban",//Nombre del comando
  alias: ["banear"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
async execute (client, message, args) {

    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("❌ `|` No tienes suficientes permisos!");
    let user = message.mentions.members.first();

   const embed = new Discord.MessageEmbed() 
   
    .setTitle(`ALERTA | Nuevo Baneo`)
    .setThumbnail(user.displayAvatarURL)
    .addField("Usuario:", `<@${user}>`)
    .addField("ID:", `${id}`)
    .addField("Mod/Admin:", `${message.author.tag}`)
    .setFooter(" Sistema de Moderación")
    .setColor(0xff001e)

    let Banreason = args.join(' ').slice(1);
    
    if(!user) return message.channel.send("Debes mencionar a alguien!")

    if(message.user.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("❌ `|` No puedes banear a una persona de igual o mayor poder que tu!")

    if(user === message.author) return message.channel.send("❌ `|` No te puedes banear a ti mismo!")

    if(!Banreason) return message.channel.send("Debes escribir una razon!")
    user.ban({ reason:Banreason})
    user.send(`Te banearon del servidor **${message.guild.name}** con la razon: ***${Banreason}***`)
    message.channel.send({ embeds: [embed] })

  }

}