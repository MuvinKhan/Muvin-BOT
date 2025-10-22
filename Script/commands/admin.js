const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `     ⊰᯽⊱┈──╌❊╌──┈⊰᯽⊱
۞ 𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢 ۞
◎ ══════ ❈ ══════ ◎
╭─╮ 
  🔥 
╰─╯𝗡𝗔𝗠𝗘 👉 𝗠𝗨𝗩𝗜𝗡 𝗞𝗛𝗔𝗡
╭─╮ 
  🔥 
╰─╯𝗔𝗗𝗗𝗥𝗘𝗦𝗦👉𝗦𝗜𝗥𝗔𝗝𝗚𝗢𝗡𝗝
╭─╮ 
  🔥 
╰─╯𝗪𝗛𝗔𝗧𝗦,𝗔𝗣𝗣👉𝟬𝟭𝟳𝟯𝟲𝟬𝟵𝟲𝟵𝟭𝟴
╭─╮ 
  🔥 
╰─╯𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡👉𝗦𝗜𝗡𝗚𝗘𝗟

   BOT OWNER FB ID
[ANY HELP CONTACT FB]

 ➷➷➷➷➷➷➷➷➷➷➷➷➷➷ https://www.facebook.com/muvinkhans?mibextid=ZbWKwL

⊰᯽⊱┈──╌❊╌──┈⊰᯽⊱
┏•━•━•━ ◎ ━•━•━•┓
 ❂ 𝗕𝗢𝗧  𝗢𝗪𝗡𝗘𝗥 ❂
┗•━•━•━ ◎ ━•━•━•┛
╭────────────╮
✜𝗠𝗨𝗩𝗜𝗡 𝗞𝗛𝗔𝗡✜
╰────────────╯`,
        attachment: fs.createReadStream(__dirname + "/cache/")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/"));
  
    return request(encodeURI(`https://graph.facebook.com/100000478146113/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
