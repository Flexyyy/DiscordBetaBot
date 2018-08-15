const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", function() {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setActivity(
        `Official BETA Bot | b.help`, { type: "STREAMING", url: 'https://www.twitch.tv/txi_flexyy' }
    );
});

client.on("message", async msg => {

    let prefix = 'b.'
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1);

    if(cmd === `${prefix}ping`){
        msg.channel.send(`**Pinging...**`).then(m => {
            m.edit(`Your Ping is Now: **${client.ping}ms** `)
        });
    }
    if(msg.content.startsWith(`${prefix}creator`)) {
        var embed = new Discord.RichEmbed()
        .addField("This Bot Is Fully Maded By", "<@204988881454497792>")
        .setColor('ff0000')
        .setFooter("©️ Flexyy 2018")
        msg.channel.send(embed)
    }  
    if(msg.content.startsWith(`${prefix}github`))  {
        msg.channel.send("https://github.com/Flexyyy")
    }
    if(msg.content.startsWith(`${prefix}help`)) {
        msg.channel.send(":computer: **The commands has Sent to You in DM** :computer:")
        var embed = new Discord.RichEmbed()
        .addField("Prefix", "b.")
        .addField("github", "Sent Flexyy's GitHub Profile!")
        .addField("ping", "I Will told you Your Ping!")
        .addField("creator", "I Will told you Who Created Me!")
        .addField("invitelink", "I Will Send Invite Link to Inv me For Discord Servers!")
        .addField("serverlink", "I Will Send My Discord Public Server!")
        .addField("youtube", "Sent Flexyy's YouTube Channel!")
        .addField("avatar", "Sent your AvatarURL!")
        .addField("website", "Sent my Official Website!")
        .setColor(3447003)
        .setFooter("The Amazing man Who Help me: AniShalev#7444")
        .setThumbnail(client.user.avatarURL)
        msg.author.send(embed); 
    }
    if(msg.content.startsWith(`${prefix}invitelink`)) {
        msg.channel.send("**You Can Invite Me Here:** https://discordapp.com/oauth2/authorize?client_id=477056465169809408&scope=bot&permissions=0")
    }
    if(msg.content.startsWith(`${prefix}serverlink`)) {
        msg.channel.send("**My Testing Server:** https://discord.gg/c295HtJ")
    }
    if(msg.content.startsWith(`${prefix}youtube`)) {
        msg.channel.send("**Flexyy's YouTube Channel:** https://www.youtube.com/channel/UCgvBS5R8CcLNA_s-6LC_WbA?view_as=subscriber")
    }
    if(msg.content.startsWith(`${prefix}avatar`)) {
        let user = msg.mentions.users.first() || msg.author
        let output = user.username + `#` + user.discriminator
        var embed = new Discord.RichEmbed()
        .setAuthor(`${output}'s avatar`)
        .setImage(user.displayAvatarURL)
        .setColor('1bff00')
        .setFooter(`© 2018 Flexyy`)
        msg.channel.send(embed)
    }
    if(msg.content.startsWith(`${prefix}website`)) {
        msg.channel.send("**Here's my Official Website:** https://rapidui.io/live/HiCUXKa4AlmuXJk01457836/")
    }
});

client.login(process.env.BOT_TOKEN);
