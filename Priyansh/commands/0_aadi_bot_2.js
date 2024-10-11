const fs = require("fs");
module.exports.config = {
  name: "babu",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("babu") ||
     react.includes("Babu") || react.includes("janu") || react.includes("Janu") ||
react.includes("jaan") ||
react.includes("Jaan")) {
    var msg = {
        body: `𝐊𝐘𝐀 𝐁𝐀𝐁𝐔 𝐒𝐇𝐎𝐍𝐀 𝐋𝐀𝐆𝐀 𝐑𝐀𝐊𝐇 𝐀 𝐇𝐀𝐈 𝐉𝐀𝐊À𝐑 𝐀𝐏𝐍𝐀 𝐊𝐀𝐀𝐌 𝐊𝐀𝐑𝐎 𝐁À𝐁𝐔 𝐒𝐇𝐎𝐍À 𝐌 𝐊𝐔𝐂𝐇 𝐍𝐀𝐇𝐈 𝐑𝐀𝐊𝐇𝐀😒👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤗", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }