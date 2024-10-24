const TelegramBot = require('node-telegram-bot-api');

// Bot tokeningizni kiriting
const token = '7505300343:AAEKg3AP_RWlGmMQA_ZbdVZ8iUnCfX8au8Y';

// Botni ishga tushirish
const bot = new TelegramBot(token, { polling: true });

// Start komandasi uchun handler
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // 3 ta menyu tugmasini yaratish
  const menuOptions = {
    reply_markup: {
      keyboard: [
        [{ text: 'Menyu 1' }, { text: 'Game' }, { text: 'Menyu 3' }] // 3 ta menyu tugmasi
      ],
      resize_keyboard: true // Tugmani mos hajmga keltirish
    }
  };

  // Foydalanuvchiga menyu tugmalarini yuborish
  bot.sendMessage(chatId, 'Menyuni tanlang:', menuOptions);
});

// Menyu tugmalarini qayta ishlash
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === 'Menyu 1') {
    // O'yinni boshlash tugmasi - Menyu 1
    const gameOptions1 = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'O\'yinni boshlash', url: 'https://exemple.com' }]
        ]
      }
    };

    // Foydalanuvchiga o'yin tugmasini yuborish - Menyu 1
    bot.sendMessage(chatId, 'Menyu 1 uchun o\'yinni boshlash tugmasini bosing:', gameOptions1);
  }

  if (msg.text === 'Game') {
    // O'yinni boshlash tugmasi - Menyu 2
    const gameOptions2 = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'O\'yinni boshlash', url: 'https://000quvonchbek.github.io/multi.bot/' }]
        ]
      }
    };

    // Foydalanuvchiga o'yin tugmasini yuborish - Menyu 2
    bot.sendMessage(chatId, 'Menyu 2 uchun o\'yinni boshlash tugmasini bosing:', gameOptions2);
  }

  if (msg.text === 'Menyu 3') {
    // O'yinni boshlash tugmasi - Menyu 3
    const gameOptions3 = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'O\'yinni boshlash', url: 'https://example.com/menyu3' }]
        ]
      }
    };

    // Foydalanuvchiga o'yin tugmasini yuborish - Menyu 3
    bot.sendMessage(chatId, 'Menyu 3 uchun o\'yinni boshlash tugmasini bosing:', gameOptions3);
  }
});
