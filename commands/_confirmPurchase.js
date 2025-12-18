/*CMD
  command: /confirmPurchase
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ✔ haan
  group: 
CMD*/

let admin = Bot.getProperty("admin");

// Load user selections
let game = Bot.getProperty(user.telegramid + "_selected_game");
let duration = Bot.getProperty(user.telegramid + "_selected_duration");

if (!game || !duration) {
  return Api.sendMessage({
    text: "⚠️ Purchase error: Game or duration not selected.",
    parse_mode: "HTML"
  });
}

let gameKey = game.toLowerCase().trim(); 
duration = duration.toString().trim();

// --------------------------------------------
// 🔥 RESELLER CUSTOM GRID PRICING
// --------------------------------------------
let grid = Bot.getProperty(`${user.telegramid}_grid`);
let keyName = `${gameKey}_${duration}`;
let finalPrice;

if (grid && grid[keyName]) {
  finalPrice = parseFloat(grid[keyName]);
} else {
  finalPrice = parseFloat(
    Bot.getProperty(`${gameKey}_${duration}day_price`)
  ) || 0;
}

// --------------------------------------------
// 🔥 STOCK CHECK BEFORE BALANCE
// --------------------------------------------
let stockKey = `${gameKey}_${duration}day_stock`;
let stock = Bot.getProperty(stockKey);

if (!stock || stock.length === 0) {
  return Api.sendMessage({
    text: "❌ Stock khatam ho gaya hai. Admin se sampark karein.",
    parse_mode: "HTML"
  });
}

// --------------------------------------------
// 💰 BALANCE CHECK
// --------------------------------------------
let balKey = user.telegramid + "_balance";
let balance = Bot.getProperty(balKey) || 0;

if (balance < finalPrice) {
  return Api.sendMessage({
    text: `❌ Aapke balance me paise kam hain.\n\n💰 Required: ₹${finalPrice}\n💰 Your Balance: ₹${balance}`,
    parse_mode: "HTML"
  });
}

// --------------------------------------------
// 💸 Deduct balance
// --------------------------------------------
let newBalance = balance - finalPrice;
Bot.setProperty(balKey, newBalance, "float");

// --------------------------------------------
// 🗝 Remove ONE KEY from stock
// --------------------------------------------
let deliveredKey = stock.shift();
Bot.setProperty(stockKey, stock, "json");

// --------------------------------------------
// 📅 Time & Date
// --------------------------------------------
let now = new Date();
let dateStr = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

// --------------------------------------------
// 🧾 INVOICE FOR USER
// --------------------------------------------
let invoice = 
`<b>-: Invoice :-</b>

💎 <b>Customer's Name:</b> ${user.first_name || "N/A"}
📞 <b>Customer's Username:</b> @${user.username || "N/A"}
♣️ <b>Customer's UserID:</b> <code>${user.telegramid}</code>

🌐 <b>Key of the Game:</b> <code>${game}</code>

💵 <b>Balance Left:</b> ₹${newBalance}

🔥 <b>Purchased On:</b> ${dateStr}

🎁 <b>Thanks for dealing with @SE_buy_bot ✅</b>`;

Api.sendMessage({
  text: invoice,
  parse_mode: "HTML",
  disable_web_page_preview: true
});

// --------------------------------------------
// 🎁 Original Delivery Message
// --------------------------------------------
let msg =
`<b>•1x(${duration} Days) Snake ${game} Key🗝️•</b>

<b>•🎁Key:-</b> <code>${deliveredKey}</code>

<b>•🕒Validity:- ${duration} Days🐦‍🔥•</b>

<b>•🔮Quantity:- 1 •</b>

<b>•💵Purchased From:-</b> @SE_buy_bot

<b>•*️⃣Setup Video:-</b> <a href="https://youtu.be/0kFzKbQbe6M">Click Here</a>`;

Api.sendMessage({
  text: msg,
  parse_mode: "HTML",
  disable_web_page_preview: true
});

// --------------------------------------------
// 📢 FULL ADMIN NOTIFICATION
// --------------------------------------------
Api.sendMessage({
  chat_id: admin,
  text:
`📢 <b>Stock Update</b>

🎮 <b>Game:</b> ${game}
⏳ <b>Duration:</b> ${duration} days
🗝 <b>Key Delivered:</b> <code>${deliveredKey}</code>
📦 <b>Remaining Stock:</b> ${stock.length}

👤 <b>Kisne Kharida:</b> ${user.first_name || "N/A"}
🔗 <b>Username:</b> @${user.username || "N/A"}
🆔 <b>User ID:</b> <code>${user.telegramid}</code>

🕒 <b>Time:</b> ${dateStr}`,
  parse_mode: "HTML"
});

// Back to start
Bot.runCommand("/start");

