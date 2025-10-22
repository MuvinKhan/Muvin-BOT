const fs = require("fs");
module.exports.config = {
	name: "hasi1",
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
	if(react.includes("*") ||
     react.includes("©") || 
react.includes("#") || 
react.includes("$") ||
react.includes("%")) {
		var msg = {
		    body: " কিও ভক্ত ভুল ভাল কমান্ড ব্যবহার করো কেন রিপ্লাই পাবেনা😁 ডার্ক মুভিন বটের কমান্ড খুজে বের করো ১০০% রিপ্লাই পাবে 😚"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
