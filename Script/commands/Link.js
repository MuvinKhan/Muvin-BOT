const fs = require("fs");
module.exports.config = {
	name: "has0",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "MUVIN KHAN", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("viral") ||
     react.includes("link") || 
react.includes("bisti viral") || 
react.includes("ভাইরাল লিংক") ||
react.includes("ভাইরাল লিংক দে")) {
		var msg = {
		    body: "তোমাদের জন্য কষ্ট করে দিলাম খুজে 🫣 https://xhamster.com/search/nadiyaxxx02 "
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
