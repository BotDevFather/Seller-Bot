/*CMD
  command: sendPhoto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let admin = Bot.getProperty("admin")

// Check if message contains a photo
if (request.photo && request.photo.length > 0) {

  // Get the highest resolution photo (last in array)
  let file_id = request.photo[request.photo.length - 1].file_id;

  Api.sendPhoto({
    photo: file_id,
    caption: `Payment by user <b>${user.telegramid}</b>.`,
    parse_mode: "HTML",
    chat_id: admin   // send to admin only
  });

} else {
  // Ignore non-photo messages
  return;
}
Bot.sendMessage("Shukriya! Aapka payment proof mil gaya hai. Verification ke baad paise aapke balance me jod di jayegi.")
