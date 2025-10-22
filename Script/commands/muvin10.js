const fs = require("fs");
module.exports.config = {
	name: "hasi35",
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
	if(react.includes("https:") ||
     react.includes(".com") || 
react.includes("Link de") || 
react.includes("link") ||
react.includes("লিংক দে")) {
		var msg = {
		    body: " কিও ভক্ত আমার বস ডার্ক মুভিন এর পারমিশন ছাড়া গ্রুপে বিভিন্ন সাইডের লিংক দাও কেন 🍁🙄 লিংক তোর হেডা দিয়ে ভরে দিবো 🤙👹"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👊", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

     }
