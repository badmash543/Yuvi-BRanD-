const fs = require("fs");
module.exports.config = {
  name: "Ram",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Ram") ||
     react.includes("ram") || react.includes("hanuman") || react.includes("Hanuman") ||
react.includes("sita") ||
react.includes("Sita") ||     
react.includes("seeta")) {
    var msg = {
        body: `${name} 𝐉À𝐆 𝐌 𝐒À𝐂𝐇À 𝐄𝐊 𝐇𝐈 𝐍À𝐌𝐄 𝐇𝐈 𝐑À𝐌 
𝐉𝐀𝐈 𝐒𝐇𝐑𝐄𝐄 𝐑𝐀𝐌💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Ram.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }