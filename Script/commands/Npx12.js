const fs = require("fs");
module.exports.config = {
	name: "🙄",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙄",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😒")==0 || event.body.indexOf("🤨")==0 || event.body.indexOf("🙄")==0 || event.body.indexOf("😦")==0) {
		var msg = {
				body: "অৃ্ঁই্ঁ বেৃ্ঁডাৃ্ঁ ওৃ্ঁইৃ্ দি্ৃঁকেৃ্ঁ কিৃ্ দেৃ্ঁখৃ্ঁসৃ্ঁ😒🤷‍♂️আ্ঁমা্ঁর্ঁ ব্ঁস্ঁ 𒄬𓆩๛⃝ᵈᵃʳᵏ𝗠𝘂𝘃𝗶𝗻 ‣᭄𓆪𑁍•››এ্ঁই্ঁ দি্ঁকে্ঁ",
				attachment: fs.createReadStream(__dirname + `/noprefix/JM.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }