const fs = require("fs");
module.exports.config = {
	name: "npxs13",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ZEESHAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs13",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("👿")==0 || event.body.indexOf("👹")==0 || event.body.indexOf("😈")==0 || event.body.indexOf("🫤")==0) {
		var msg = {
				body: "য্ঁত্ঁই্ঁ বা্ঁধ্ঁ আ্ঁসু্ঁক্ঁ মু্ঁখে্ঁ হা্ঁসি্ঁ নি্ঁয়ে্ঁ চ্ঁলো্ঁ প্রি্ঁয়্ঁ~No matter how many obstacles come with a smile on your face dear🥰💫𒄬𓆩๛⃝ᵈᵃʳᵏ𝗠𝘂𝘃𝗶𝗻 ‣᭄𓆪𑁍•››",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs13.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }