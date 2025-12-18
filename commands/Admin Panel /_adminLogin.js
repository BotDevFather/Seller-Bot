/*CMD
  command: /adminLogin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel 
  answer: 
  keyboard: 
  aliases: /login, /setting
  group: 
CMD*/

var adminList = [8052864919,7124422883];  
var userID = user.telegramid;
var botLink = "@" + bot.name;

// Check if user ID exists in adminList array
if (adminList.includes(userID)) {

  Bot.setProperty("admin", userID, "integer"); // still store CURRENT admin if needed

  var text =
    "<b>✅ You are recognized as an admin of " +
    botLink +
    " successfully.\n\n👉 Now you can access the admin panel by sending /adminPanel</b>";

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  });

} else {

  var notAdminText =
    "<i>⚠️ You are not an admin of " + botLink + ".</i>";

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  });

}

