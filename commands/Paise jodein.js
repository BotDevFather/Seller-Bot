/*CMD
  command: Paise jodein
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: paise jodein
  group: 
CMD*/

// First send the QR image
let qr = Bot.getProperty("qr_image_url") || "https://i.ibb.co/C5HYYz5m/x.jpg"
Api.sendPhoto({
  photo: qr,
  caption: `Is QR ko scan karke payment karein.`
});

Bot.sendMessage(`Payment karne ke baad apna payment ka screenshot yahin bhejein.
Verification ke baad paise aapke balance me jod di jayegi.

Note: Kripya screenshot me transaction ID aur amount spasht ho. Fake Payment kiya toh app block krdiye jaoge.`)
Bot.runCommand("sendPhoto")
