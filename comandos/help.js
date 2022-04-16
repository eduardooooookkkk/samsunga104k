const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
module.exports = {
  name: "help",//Nombre del comando
  alias: ["ayuda"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

  const embed = new Discord.MessageEmbed()
  .setTitle("💡| Menu de ayuda:")
  .setFooter("| © Arsenic 🌟 | ")
          
 
  .addField('<:tuerca:959581206679273502> **__Prefix__**', `*,*`, true) .addField(' <:carpeta:959578780534439947> **__Lista de comandos__**', `*,commands*`, true) 
  
          .addField('<:xd:959564384085114990> **__Desarrollador__**', `*Arsenic#0001*`,  true)
          .addField ("<:mail:959580275610894376> **__Enlaces__**", "[*Instagram*](https://www.instagram.com/eduardoojjj/?hl=es-la)")
          .setColor(`#efeded`)
          .setImage(`https://cdn.discordapp.com/attachments/942647191019851866/959673970486022264/Picsart_22-04-01_21-30-13-705.jpg`)

  message.channel.send({ embeds: [embed]})

  }

}
 