const fs = require("fs");
module.exports.config = {
	name: "hasi22",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "FOYSAL HOSEN", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Khaiso") ||
     react.includes("khaiso") || 
react.includes("khaisan") || 
react.includes("খাইছেন") ||
react.includes("খাইছো")) {
		var msg = {
		    body: " -আমি এক জন মেসেঞ্জার রোবট তাই আমার খাবার বলে কিছুই নাই 😩"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤧", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
