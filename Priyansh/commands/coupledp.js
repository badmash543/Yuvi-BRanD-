//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
module.exports.config = {
  name: "couple dp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Couple Dp photos",
  commandCategory: "THIS BOT IS MADE BY PREM SHARMA",
  usages: "cpl dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/g7woYNY.jpg","https://i.imgur.com/0jDiNmQ.jpg","https://i.imgur.com/3OX7sWP.jpg","https://i.imgur.com/IthNc1C.jpg","https://i.imgur.com/1RoN4la.jpg","https://i.imgur.com/vcfIO27.jpg","https://i.imgur.com/8yWRoMe.jpg","https://i.imgur.com/nku8dTF.jpg","https://i.imgur.com/V32qQb0.jpg","https://i.imgur.com/lkem5Gd.jpg","https://i.imgur.com/QIpV0AY.jpg","https://i.imgur.com/zdnDEtm.jpg","https://i.imgur.com/w7eKGSy.jpg","https://i.imgur.com/ONCJm5B.jpg","https://i.imgur.com/oQavLMr.jpg","https://i.imgur.com/MuBToNp.jpg","https://i.imgur.com/JrMY7j8.jpg","https://i.imgur.com/MauPoyi.jpg","https://i.imgur.com/t1B6vz1.jpg","https://i.imgur.com/VT200cX.jpg","https://i.imgur.com/9HTasfZ.jpg","https://i.imgur.com/waeDhYd.jpg","https://i.imgur.com/5dHsVO8.jpg","https://i.imgur.com/rrWIcrz.jpg","https://i.imgur.com/nEVUP1b.jpg","https://i.imgur.com/iHqdCMp.jpg","https://i.imgur.com/YHsbqM7.jpg","https://i.imgur.com/5ZQOCmT.jpg","https://i.imgur.com/AvoyQyk.jpg","https://i.imgur.com/MCuS0xn.jpg","https://i.imgur.com/c8yiwxR.jpg"
     ];
   /////// CREADIT NAME CHANGE KRNE WALE KI BEHAN PREM BABU KI RAKHEL HOGI ////////////////////////////////
     var callback = () => api.sendMessage({body:`🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍✬✿╭┳✪✪╤───────────➛➣ ★�*★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝⸙𝛥︵⸦⸧๏ᆖᆖ๏⸦⸧ 員⸨𝕆︵𝕆⸩⸙ 𓆩⃝𝐓Ħ͜͡ə̚ 𝐕͇͇̄̄̄̄𝐢𝐥𝐥͜͡𝐚𝐢𝐧̄̄̄͢•‣᭄ 【 ̈̈̈̈̈̈𝐊𝐢łł͜͡𝐞𝐫 ̠̠̠̠̠̠̠̽̽̽̽𝐛ø͜͡Ŷ𓆪 𒆜 𒋤⃝⃟̊̃Ŧ𝐮 𝐇̂𝐨͜͡𝐠𝐢 𝐀̄𝐩͜͡͡𝐧𝐞 ʘ͜͡ʘ⦕› 𝐏𝐚͜͡𝐩𝐚 ĸ͜͡𝐢 輪 ⃝ 𝐏𝐚͜͡𝐫𝐢 𝐇̂𝐮̩̩̩̩̩̩̊̊̊̊̊̊̊̊͜͡𝐦 𝐁𝐇̂͜͡͡𝐢 𒉽‡‣ ̄̄̄̄̄̄̄̄𝐀̄𝐩͜͡𝐧𝐢 ̀̀̀̀̀̀̀𝐌͜🍀🍒💐)✪��★  ✬✿╭┳✪✪╤───────────➛➣`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
