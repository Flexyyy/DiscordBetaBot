const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", function() {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setActivity(
        `Official BETA Bot | b.help`, { type: "STREAMING", url: 'https://www.twitch.tv/plexyyosu' }
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
        .addField("BETA | BOT has been created by", "<@204988881454497792>")
        .setColor('ff0000')
        .setFooter("©️ plexyy 2019")
        .setThumbnail(client.user.avatarURL)
        msg.channel.send(embed)
    }  
    if(msg.content.startsWith(`${prefix}github`))  {
        msg.channel.send("https://github.com/Flexyyy")
    }
    if(msg.content.startsWith(`${prefix}help`)) {
        msg.channel.send(":computer: **The commands has Sent to You in DM** :computer:")
        var embed = new Discord.RichEmbed()
        .addField("Prefix", "b.")
        .addField("github", "Will send my official github link!")
        .addField("ping", "Will told your ping!")
        .addField("creator", "Will giving the creator's tag!")
        .addField("invitelink", "Will give you the perm' to invite me!")
        .addField("serverlink", "NOT WORKING / WIP!")
        .addField("youtube", "Will send my official YouTube channel!")
        .addField("avatar", "Will send your discord Profile Picture!")
        .addField("website", "Will send my old website!")
        .addField("shop", "Will send my designs shop!")
        .setColor(3447003)
        .setFooter("©️ plexyy 2019")
        .setThumbnail(client.user.avatarURL)
        msg.author.send(embed); 
    }
    if(msg.content.startsWith(`${prefix}invitelink`)) {
        msg.channel.send("**You Can Invite Me Here:** https://discordapp.com/oauth2/authorize?client_id=477056465169809408&scope=bot&permissions=0")
    }
    if(msg.content.startsWith(`${prefix}shop`)) {
        msg.channel.send("**plexyy's Design Shop:** http://selly.gg/@plexyy")
    }
    if(msg.content.startsWith(`${prefix}youtube`)) {
        msg.channel.send("**plexyy's YouTube Channel:** https://www.youtube.com/channel/UCgvBS5R8CcLNA_s-6LC_WbA?view_as=subscriber")
    }
    if(msg.content.startsWith(`${prefix}avatar`)) {
        let user = msg.mentions.users.first() || msg.author
        let output = user.username + `#` + user.discriminator
        var embed = new Discord.RichEmbed()
        .setAuthor(`${output}'s avatar`)
        .setImage(user.displayAvatarURL)
        .setColor('1bff00')
        .setFooter(`©️ plexyy 2019`)
        msg.channel.send(embed)
    }
    if(msg.content.startsWith(`${prefix}website`)) {
        msg.channel.send("**Here's my old Website:** https://rapidui.io/live/HiCUXKa4AlmuXJk01457836/")
    }
});

client.login(process.env.BOT_TOKEN);
