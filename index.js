var { Client, GatewayIntentBits } = require('discord.js');
var { EmbedBuilder } = require('discord.js');
var fs = require('fs');
var TOKEN = "MTAzNTE4NjQwMDgzODAyNTI0Ng.GADckf.ccJnznZVM8UVTOoQ7Ti2V50iE3Ag_cF0ZB5uOk";
var jsonFile = JSON.parse(fs.readFileSync('./output/todo.json'));

var assignments = jsonFile.length;
var course_name = jsonFile[0].context_name;
var assignment_name = jsonFile[0].assignment.name;
var assignment_url = jsonFile[0].html_url;
var due_at = jsonFile[0].assignment.due_at;
var clean_due_at = due_at.slice(0, -10);
if (assignments > 1) {
var course_name1 = jsonFile[1].context_name;
var assignment_name1 = jsonFile[1].assignment.name;
var assignment_url1 = jsonFile[1].html_url;
var due_at1 = jsonFile[1].assignment.due_at;
var clean_due_at1 = due_at1.slice(0, -10);
}
if (assignments > 2) {
var course_name2 = jsonFile[2].context_name;
var assignment_name2 = jsonFile[2].assignment.name;
var assignment_url2 = jsonFile[2].html_url;
var due_at2 = jsonFile[2].assignment.due_at;
var clean_due_at2 = due_at2.slice(0, -10);
}
if (assignments > 3) {
var course_name3 = jsonFile[3].context_name;
var assignment_name3 = jsonFile[3].assignment.name;
var assignment_url3 = jsonFile[3].html_url;
var due_at3 = jsonFile[3].assignment.due_at;
var clean_due_at3 = due_at3.slice(0, -10);
}
if (assignments > 4) {
var course_name4 = jsonFile[4].context_name;
var assignment_name4 = jsonFile[4].assignment.name;
var assignment_url4 = jsonFile[4].html_url;
var due_at4 = jsonFile[4].assignment.due_at;
var clean_due_at4 = due_at4.slice(0, -10);
}
if (assignments > 5) {
var course_name5 = jsonFile[5].context_name;
var assignment_name5 = jsonFile[5].assignment.name;
var assignment_url5 = jsonFile[5].html_url;
var due_at5 = jsonFile[5].assignment.due_at;
var clean_due_at5 = due_at5.slice(0, -10);
}
if (assignments > 6) {
var course_name6 = jsonFile[6].context_name;
var assignment_name6 = jsonFile[6].assignment.name;
var assignment_url6 = jsonFile[6].html_url;
var due_at6 = jsonFile[6].assignment.due_at;
var clean_due_at6 = due_at6.slice(0, -10);
}
if (assignments > 7) {
var course_name7 = jsonFile[7].context_name;
var assignment_name7 = jsonFile[7].assignment.name;
var assignment_url7 = jsonFile[7].html_url;
var due_at7 = jsonFile[7].assignment.due_at;
var clean_due_at7 = due_at7.slice(0, -10);
}
if (assignments > 8) {
var course_name8 = jsonFile[8].context_name;
var assignment_name8 = jsonFile[8].assignment.name;
var assignment_url8 = jsonFile[8].html_url;
var due_at8 = jsonFile[8].assignment.due_at;
var clean_due_at8 = due_at8.slice(0, -10);
}
if (assignments > 9) {
var course_name9 = jsonFile[9].context_name;
var assignment_name9 = jsonFile[9].assignment.name;
var assignment_url9 = jsonFile[9].html_url;
var due_at9 = jsonFile[9].assignment.due_at;
var clean_due_at9 = due_at9.slice(0, -10);
}
if (assignments > 10) {
var course_name10 = jsonFile[10].context_name;
var assignment_name10 = jsonFile[10].assignment.name;
var assignment_url10 = jsonFile[10].html_url;
var due_at10 = jsonFile[10].assignment.due_at;
var clean_due_at10 = due_at10.slice(0, -10);
}




var client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})


var todoEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(course_name)
	.setURL(assignment_url)
	.setAuthor({ name: 'CanvasBot', iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png', url: 'https://canvas.laurea.fi' })
	.setThumbnail('https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png')
	.addFields(
		{ name: 'Tehtävä', value: assignment_name },
	)
	.setTimestamp()
	.setFooter({ text: 'Due date: ' + clean_due_at, iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png' });
    
    if (assignments > 1) {
var todoEmbed1 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(course_name1)
	.setURL(assignment_url1)
	.setAuthor({ name: 'CanvasBot', iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png', url: 'https://canvas.laurea.fi' })
	.setThumbnail('https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png')
	.addFields(
		{ name: 'Tehtävä', value: assignment_name1 },
	)
	.setTimestamp()
	.setFooter({ text: 'Due date: ' + clean_due_at1, iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png' });
    }
    
    if (assignments > 2) {
    var todoEmbed2 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(course_name2)
	.setURL(assignment_url2)
	.setAuthor({ name: 'CanvasBot', iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png', url: 'https://canvas.laurea.fi' })
	.setThumbnail('https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png')
	.addFields(
		{ name: 'Tehtävä', value: assignment_name2 },
	)
	.setTimestamp()
	.setFooter({ text: 'Due date: ' + clean_due_at2, iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png' });
    }
    
    if (assignments > 3) {
    var todoEmbed3 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(course_name3)
	.setURL(assignment_url3)
	.setAuthor({ name: 'CanvasBot', iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png', url: 'https://canvas.laurea.fi' })
	.setThumbnail('https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png')
	.addFields(
		{ name: 'Tehtävä', value: assignment_name3 },
	)
	.setTimestamp()
	.setFooter({ text: 'Due date: ' + clean_due_at3, iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png' });
    }
    
    if (assignments > 4) {
    var todoEmbed4 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(course_name4)
    .setURL(assignment_url4)
    .setAuthor({ name: 'CanvasBot', iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png', url: 'https://canvas.laurea.fi' })
    .setThumbnail('https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png')
    .addFields(
    { name: 'Tehtävä', value: assignment_name4 },
    )
    .setTimestamp()
    .setFooter({ text: 'Due date: ' + clean_due_at4, iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png' });
    }

    if (assignments > 5) {
    var todoEmbed5 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(course_name5)
    .setURL(assignment_url5)
    .setAuthor({ name: 'CanvasBot', iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png', url: 'https://canvas.laurea.fi' })
    .setThumbnail('https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png')
    .addFields(
    { name: 'Tehtävä', value: assignment_name5 },
    )
    .setTimestamp()
    .setFooter({ text: 'Due date: ' + clean_due_at5, iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png' });
    }

    if (assignments > 6) {
    var todoEmbed6 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(course_name6)
    .setURL(assignment_url6)
    .setAuthor({ name: 'CanvasBot', iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png', url: 'https://canvas.laurea.fi' })
    .setThumbnail('https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png')
    .addFields(
    { name: 'Tehtävä', value: assignment_name6 },
    )
    .setTimestamp()
    .setFooter({ text: 'Due date: ' + clean_due_at6, iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png' });
    }

    if (assignments > 7) {
    var todoEmbed7 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(course_name7)
    .setURL(assignment_url7)
    .setAuthor({ name: 'CanvasBot', iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png', url: 'https://canvas.laurea.fi' })
    .setThumbnail('https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png')
    .addFields(
    { name: 'Tehtävä', value: assignment_name7 },
    )
    .setTimestamp()
    .setFooter({ text: 'Due date: ' + clean_due_at7, iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png' });
    }

    if (assignments > 8) {
    var todoEmbed8 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(course_name8)
    .setURL(assignment_url8)
    .setAuthor({ name: 'CanvasBot', iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png', url: 'https://canvas.laurea.fi' })
    .setThumbnail('https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png')
    .addFields(
    { name: 'Tehtävä', value: assignment_name8 },
    )
    .setTimestamp()
    .setFooter({ text: 'Due date: ' + clean_due_at8, iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png' });
    }

    if (assignments > 9) {
    var todoEmbed9 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(course_name9)
    .setURL(assignment_url9)
    .setAuthor({ name: 'CanvasBot', iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png', url: 'https://canvas.laurea.fi' })
    .setThumbnail('https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png')
    .addFields(
    { name: 'Tehtävä', value: assignment_name9 },
    )
    .setTimestamp()
    .setFooter({ text: 'Due date: ' + clean_due_at9, iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png' });
    }

    if (assignments > 10) {
        var todoEmbed10 = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(course_name10)
        .setURL(assignment_url10)
        .setAuthor({ name: 'CanvasBot', iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png', url: 'https://canvas.laurea.fi' })
        .setThumbnail('https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png')
        .addFields(
            { name: 'Tehtävä', value: assignment_name10 },
        )
        .setTimestamp()
        .setFooter({ text: 'Due date: ' + clean_due_at10, iconURL: 'https://www.laurea.fi/globalassets/logot/laurea/neliotunnus_laurea_rgb.png' });
        }

                                                
client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content == "todo") {
        if (assignments == 1) {
        message.channel.send({ embeds: [todoEmbed] });
    } else if (assignments == 2) {
        message.channel.send({ embeds: [todoEmbed] });
        message.channel.send({ embeds: [todoEmbed1] });
    } else if (assignments == 3) {
        message.channel.send({ embeds: [todoEmbed] });
        message.channel.send({ embeds: [todoEmbed1] });
        message.channel.send({ embeds: [todoEmbed2] });
    } else if (assignments == 4) {
        message.channel.send({ embeds: [todoEmbed] });
        message.channel.send({ embeds: [todoEmbed1] });
        message.channel.send({ embeds: [todoEmbed2] });
        message.channel.send({ embeds: [todoEmbed3] });
    } else if (assignments == 5) {
        message.channel.send({ embeds: [todoEmbed] });
        message.channel.send({ embeds: [todoEmbed1] });
        message.channel.send({ embeds: [todoEmbed2] });
        message.channel.send({ embeds: [todoEmbed3] }); 
        message.channel.send({ embeds: [todoEmbed4] });
    } else if (assignments == 6) {
        message.channel.send({ embeds: [todoEmbed] });
        message.channel.send({ embeds: [todoEmbed1] });
        message.channel.send({ embeds: [todoEmbed2] });
        message.channel.send({ embeds: [todoEmbed3] }); 
        message.channel.send({ embeds: [todoEmbed4] }); 
        message.channel.send({ embeds: [todoEmbed5] }); 
    } else if (assignments == 7) {
        message.channel.send({ embeds: [todoEmbed] });
        message.channel.send({ embeds: [todoEmbed1] });
        message.channel.send({ embeds: [todoEmbed2] });
        message.channel.send({ embeds: [todoEmbed3] }); 
        message.channel.send({ embeds: [todoEmbed4] }); 
        message.channel.send({ embeds: [todoEmbed5] }); 
        message.channel.send({ embeds: [todoEmbed6] }); 
    } else if (assignments == 8) {
        message.channel.send({ embeds: [todoEmbed] });
        message.channel.send({ embeds: [todoEmbed1] });
        message.channel.send({ embeds: [todoEmbed2] });
        message.channel.send({ embeds: [todoEmbed3] }); 
        message.channel.send({ embeds: [todoEmbed4] }); 
        message.channel.send({ embeds: [todoEmbed5] }); 
        message.channel.send({ embeds: [todoEmbed6] }); 
        message.channel.send({ embeds: [todoEmbed7] }); 
    } else if (assignments == 9) {
        message.channel.send({ embeds: [todoEmbed] });
        message.channel.send({ embeds: [todoEmbed1] });
        message.channel.send({ embeds: [todoEmbed2] });
        message.channel.send({ embeds: [todoEmbed3] }); 
        message.channel.send({ embeds: [todoEmbed4] }); 
        message.channel.send({ embeds: [todoEmbed5] }); 
        message.channel.send({ embeds: [todoEmbed6] }); 
        message.channel.send({ embeds: [todoEmbed7] }); 
        message.channel.send({ embeds: [todoEmbed8] }); 
    } else if (assignments == 10) {
        message.channel.send({ embeds: [todoEmbed] });
        message.channel.send({ embeds: [todoEmbed1] });
        message.channel.send({ embeds: [todoEmbed2] });
        message.channel.send({ embeds: [todoEmbed3] }); 
        message.channel.send({ embeds: [todoEmbed4] }); 
        message.channel.send({ embeds: [todoEmbed5] }); 
        message.channel.send({ embeds: [todoEmbed6] }); 
        message.channel.send({ embeds: [todoEmbed7] }); 
        message.channel.send({ embeds: [todoEmbed8] }); 
        message.channel.send({ embeds: [todoEmbed9] }); 
    }
    }
    });

client.login(TOKEN);