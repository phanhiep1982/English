const fullBank = [
    // --- NUMBERS (13-20) [cite: 1] ---
    { type: 'spell', a: "thirteen", img: "1️⃣3️⃣", hint: "Số mười ba", sound: "thirteen" },
    { type: 'spell', a: "fourteen", img: "1️⃣4️⃣", hint: "Số mười bốn", sound: "fourteen" },
    { type: 'spell', a: "fifteen", img: "1️⃣5️⃣", hint: "Số mười lăm", sound: "fifteen" },
    { type: 'spell', a: "sixteen", img: "1️⃣6️⃣", hint: "Số mười sáu", sound: "sixteen" },
    { type: 'spell', a: "seventeen", img: "1️⃣7️⃣", hint: "Số mười bảy", sound: "seventeen" },
    { type: 'spell', a: "eighteen", img: "1️⃣8️⃣", hint: "Số mười tám", sound: "eighteen" },
    { type: 'spell', a: "nineteen", img: "1️⃣9️⃣", hint: "Số mười chín", sound: "nineteen" },
    { type: 'spell', a: "twenty", img: "2️⃣0️⃣", hint: "Số hai mươi", sound: "twenty" },
    { type: 'fill', q: "How many yellow fish? - I can see ___.", a: "13", options: ["13", "14", "15"], img: "🐠", sound: "I can see thirteen" },

    // --- ACTIVITIES (Present Continuous) [cite: 5, 11, 15] ---
    { type: 'quiz', q: "What's he doing?", img: "🍿", a: "eating a snack", options: ["drinking juice", "eating a snack", "watching a DVD"], sound: "He is eating a snack" },
    { type: 'quiz', q: "What's she doing?", img: "📖", a: "reading a book", options: ["reading a book", "painting a picture", "drawing a map"], sound: "She is reading a book" },
    { type: 'quiz', q: "What's Mojo doing?", img: "🥁", a: "playing the drums", options: ["playing the drums", "feeding the hamster", "watching a DVD"], sound: "He is playing the drums" },
    { type: 'scramble', q: "He is drawing a map.", a: "He is drawing a map", parts: ["He", "is", "drawing", "a", "map"], img: "🗺️", sound: "He is drawing a map" },
    { type: 'match', q: "Watching a DVD", a: "📺", options: ["📺", "📖", "🐹", "🎨"], sound: "watching a DVD" },
    { type: 'match', q: "Feeding the hamster", a: "🐹", options: ["🥣", "🐹", "🥁", "🥤"], sound: "feeding the hamster" },

    // --- CLASSES & PRACTICES [cite: 27, 36, 38] ---
    { type: 'spell', a: "swimming", img: "🏊", hint: "Môn bơi lội", sound: "swimming class" },
    { type: 'spell', a: "soccer", img: "⚽", hint: "Môn bóng đá", sound: "soccer practice" },
    { type: 'spell', a: "judo", img: "🥋", hint: "Môn võ Judo", sound: "judo practice" },
    { type: 'spell', a: "dance", img: "💃", hint: "Lớp học múa", sound: "dance class" },
    { type: 'spell', a: "art", img: "🎨", hint: "Lớp học mỹ thuật", sound: "art class" },
    { type: 'quiz', q: "Where are you going?", img: "🥋", a: "I'm going to judo practice.", options: ["I'm going to judo practice.", "I'm going to swimming class.", "I'm going to math class."], sound: "I am going to judo practice" },
    { type: 'fill', q: "See you at ___ practice.", a: "soccer", options: ["soccer", "math", "English"], img: "⚽", sound: "See you at soccer practice" },

    // --- ART SUPPLIES & PREPOSITIONS [cite: 39, 42, 44] ---
    { type: 'match', q: "Scissors", a: "✂️", options: ["✂️", "🖍️", "📏", "📌"], sound: "scissors" },
    { type: 'match', q: "Markers", a: "🖍️", options: ["🖍️", "🎒", "🧽", "🖌️"], sound: "markers" },
    { type: 'match', q: "Stickers", a: "🍎", options: ["🍎", "🖍️", "📌", "📐"], sound: "stickers" },
    { type: 'spell', a: "paints", img: "🎨", hint: "Sơn/Màu nước", sound: "paints" },
    { type: 'spell', a: "eraser", img: "🧽", hint: "Cục tẩy", sound: "eraser" },
    { type: 'quiz', q: "Where are the markers?", img: "🗄️", a: "under the table", options: ["in the box", "on the bed", "under the table"], sound: "They are under the table" },
    { type: 'quiz', q: "The scissors are ___ the box.", img: "📦", a: "in", options: ["in", "on", "under"], sound: "The scissors are in the box" },
    { type: 'tf', q: "The pins are ON the table.", img: "📌", a: true, sound: "The pins are on the table" },

    // --- CLASSROOM TASKS [cite: 14, 29] ---
    { type: 'scramble', q: "Pick up the toys.", a: "Pick up the toys", parts: ["Pick", "up", "the", "toys"], img: "🧸", sound: "Pick up the toys" },
    { type: 'scramble', q: "Put away the toys.", a: "Put away the toys", parts: ["Put", "away", "the", "toys"], img: "📦", sound: "Put away the toys" },
    { type: 'scramble', q: "Turn off the lights.", a: "Turn off the lights", parts: ["Turn", "off", "the", "lights"], img: "💡", sound: "Turn off the lights" },
    { type: 'fill', q: "___ the desks.", a: "Wipe", options: ["Sweep", "Wipe", "Erase"], img: "🪑", sound: "Wipe the desks" },
    { type: 'fill', q: "___ the board.", a: "Erase", options: ["Wipe", "Erase", "Pick"], img: "🔳", sound: "Erase the board" },

    // --- PHONICS & MISC [cite: 6, 24, 43] ---
    { type: 'spell', a: "fox", img: "🦊", hint: "Con cáo", sound: "fox" },
    { type: 'spell', a: "snake", img: "🐍", hint: "Con rắn", sound: "snake" },
    { type: 'spell', a: "sun", img: "☀️", hint: "Mặt trời", sound: "sun" },
    { type: 'spell', a: "drum", img: "🥁", hint: "Cái trống", sound: "drum" },
    { type: 'fill', q: "How do you spell ___? - g-o-o-d-b-y-e.", a: "goodbye", options: ["hello", "goodbye", "thanks"], sound: "How do you spell goodbye?" },
    { type: 'scramble', q: "I run in the sun.", a: "I run in the sun", parts: ["I", "run", "in", "the", "sun"], img: "🏃", sound: "I run in the sun" }
];
