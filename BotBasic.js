//      $$\ $$\   $$\                                  $$\                      $$\                         
//      $$  |$$ | $$  |                                 $$ |                     $$ |                        
//     $$  / $$ |$$  / $$$$$$\  $$\  $$\  $$\ $$$$$$$\  $$ |      $$$$$$\   $$$$$$$ | $$$$$$\   $$$$$$\      
//    $$  /  $$$$$  / $$  __$$\ $$ | $$ | $$ |$$  __$$\ $$ |     $$  __$$\ $$  __$$ |$$  __$$\ $$  __$$\     
//   $$  /   $$  $$<  $$ /  $$ |$$ | $$ | $$ |$$ |  $$ |$$ |     $$$$$$$$ |$$ /  $$ |$$ /  $$ |$$$$$$$$ |    
//  $$  /    $$ |\$$\ $$ |  $$ |$$ | $$ | $$ |$$ |  $$ |$$ |     $$   ____|$$ |  $$ |$$ |  $$ |$$   ____|    
// $$  /     $$ | \$$\\$$$$$$  |\$$$$$\$$$$  |$$ |  $$ |$$$$$$$$\\$$$$$$$\ \$$$$$$$ |\$$$$$$$ |\$$$$$$$\ $$\ 
// \__/      \__|  \__|\______/  \_____\____/ \__|  \__|\________|\_______| \_______| \____$$ | \_______|\__|
//                                                                                   $$\   $$ |              
//                                                                                   \$$$$$$  |              
//                                                                                    \______/               


const Discord = require("discord.js"),
con = console.log,
bot = new Discord.Client(),
token = 'VOTRE TOKEN', 
DiscordPermissions = [
  "ADMINISTRATOR", "CREATE_INSTANT_INVITE", "KICK_MEMBERS",
  "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD",
  "ADD_REACTIONS", "VIEW_CHANNEL", "READ_MESSAGES",
  "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES",
  "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY",
  "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "EXTERNAL_EMOJIS",
  "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS",
  "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME",
  "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_ROLES_OR_PERMISSIONS",
  "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"
];

bot.login(token)

bot.on('ready',() => {
  bot.guilds.forEach(serv => { //vous permet de recevoir les invites de ou votre bot est placé. | INVITE LOGS
    serv.channels.random().createInvite().then(invite => con(`-${serv.name} | ${invite}`))
    .catch(con(`>${serv.name} | Entrain d'envoyer une invite... `));
     }); //fin de INVITE LOGS

  client.user.setStatus("online");
  client.user.setGame('status de votre bot') //définissez le jeu de votre bot.
  let memberCount = bot.users.size;
  let serverCount = bot.guilds.size;
  con(
    `${"-".repeat(40)}\n`                         + 
    "|  Bienvenue sur: NAMEBOT-Logs.  |\n" + //changez "NAMEBOT" par le nom de votre bot.
    `${"-".repeat(40)}\n`                         +  
    "Information du bot : \n"                     +
    `Nom du bot    : ${bot.user.tag}!\n`          + 
    `ID du bot     : ${bot.user.id}\n`            +
    `Token: du bot : ${bot.token}\n`              +
    `${"-".repeat(40)}\n`                         +
    "Stats bot : \n"                              +
    `Utilisateurs : ${memberCount}\n`             +
    `Serveurs     : ${serverCount}\n`             +
    `${"-".repeat(40)}\n`
  );
});


// :::::::::  :::::::::: :::::::::   ::::::::  ::::    :::  ::::::::  ::::::::::          ::::::::: 
// :+:    :+: :+:        :+:    :+: :+:    :+: :+:+:   :+: :+:    :+: :+:                 :+:    :+: 
// +:+    +:+ +:+        +:+    +:+ +:+    +:+ :+:+:+  +:+ +:+        +:+                 +:+    +:+  
// +#++:++#:  +#++:++#   +#++:++#+  +#+    +:+ +#+ +:+ +#+ +#++:++#++ +#++:++#            +#+    +:+   
// +#+    +#+ +#+        +#+        +#+    +#+ +#+  +#+#+#        +#+ +#+                 +#+    +#+    
// #+#    #+# #+#        #+#        #+#    #+# #+#   #+#+# #+#    #+# #+#                 #+#    #+#     
// ###    ### ########## ###         ########  ###    ####  ########  ##########          #########       
