const TelegramBot = require("node-telegram-bot-api");

const token = "7458118504:AAGxcd30gzEKCD42A-rAbD_7FRlB6CSLhDA";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  console.log('chat')
  const chatId = msg.chat.id;
  const username = msg.from.username || msg.from.first_name;

  console.log(chatId, username);

  const webAppUrl = `https://nonocoinv2.vercel.app/`;
  const tronbridge = `https://t.me/NONOCoinSwap_Bot`
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Play in 1 click", web_app: { url: webAppUrl } }],
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

  // Send image first
  bot.sendPhoto(chatId, 'https://ibb.co/7dVQPYbJ', {
    caption: `👑 Welcome to NoNoCoin 👑
Your all-in-one crypto and gaming platform on Telegram, powered by 💎 TON Blockchain.

✨ Key Features:

🌉 Cross-Chain Bridge
Transfer assets across 15+ blockchains (TON, ETH, BTC, SOL, BSC) directly in Telegram.

💳 Virtual Debit Cards
Use NoNoCoins for everyday purchases with virtual Mastercard/Visa cards.

🎮 Tap-to-Earn Game
Play games, earn rewards, and reinvest in the ecosystem.

🔒 Staking & Tiers
Stake for 3/6/12 months. Higher tiers (Silver/Gold/Diamond) offer exclusive benefits.

🤖 AI Features
• AI Mining for optimized rewards
• AI Trading Pools for enhanced strategies

———

🌐 Quick Links:
[Website](http://nonocoin.io) | [Community](https://t.me/nonocoin_Community) | [Twitter](https://x.com/no_nocoin) | [Whitepaper](https://nonocoin.com/whitepaper) | [Tokenomics](https://nonocoin.io)`,
    parse_mode: 'Markdown',
    ...opts
  });
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
Invite your friends and you'll get bonuses. Help a friend move to the next leagues and you'll get even more bonuses.

🪙 Token listing
At the end of the season, a token will be released and distributed among the players.
Dates will be announced in our announcement channel. Stay tuned!

/help to get this guide`
    );
  }
});

console.log("Telegram bot is running...");
