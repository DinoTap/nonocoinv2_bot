const TelegramBot = require("node-telegram-bot-api");

const token = "7676836610:AAERimjbrZqkDm9vlIizLl4zDLpig7evBXo";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  console.log('chat')
  const chatId = msg.chat.id;
  const username = msg.from.username || msg.from.first_name;

  console.log(chatId, username);

  const webAppUrl = ``;
const tronbridge = `https://t.me/NONOCoinSwap_Bot`
  const opts = {
    reply_markup: {
      inline_keyboard: [
       
      
        [{ text: "Play in 1 click", web_app: { url: webAppUrl } },{ text: "TON Bridge",  url: tronbridge  }],
    
        [
          {
            text: "Subscribe to the channel",
            url: "https://t.me/nonocoin_Announcement",
          },
        ],
        [{ text: "How to Earn from Game", callback_data: "game_guide" }],
      ],
    },
  };

  bot.sendMessage(
    chatId,
    `Hello ${username}! Welcome to NONO AI COIN
You are now the director of a crypto exchange.
Which one? You choose. Tap the screen, collect coins, pump up your passive income, 
develop your own income strategy.
We’ll definitely appreciate your efforts once the token is listed (the dates are coming soon).
Don't forget about your friends — bring them to the game and get even more coins together!`,
    opts
  );
});

bot.on("callback_query", (callbackQuery) => {
  const msg = callbackQuery.message;
  const chatId = msg.chat.id;

  if (callbackQuery.data === "game_guide") {
    bot.sendMessage(
      chatId,
      `💰 Tap to earn
Tap the screen and collect coins.

⛏ Mine
Upgrade cards that will give you passive income opportunities.

⏰ Profit per hour
The exchange will work for you on its own, even when you are not in the game for 3 hours.
Then you need to log in to the game again.

📈 LVL
The more coins you have on your balance, the higher the level of your exchange is and the faster you can earn more coins.

👥 Friends
Invite your friends and you’ll get bonuses. Help a friend move to the next leagues and you'll get even more bonuses.

🪙 Token listing
At the end of the season, a token will be released and distributed among the players.
Dates will be announced in our announcement channel. Stay tuned!

/help to get this guide`
    );
  }
});

console.log("Telegram bot is running...");
