const fullBank = [
    // --- FEELINGS (CẢM XÚC) ---
    { type: 'match', q: "Happy", a: "😊", options: ["😊", "😢", "😡", "😴"], sound: "Happy" },
    { type: 'spell', a: "scared", img: "😨", hint: "Sợ hãi", sound: "scared" },
    { type: 'quiz', q: "Khi con đói bụng, con nói?", img: "🍔", a: "I'm hungry", options: ["I'm hungry", "I'm thirsty", "I'm sick"], sound: "I'm hungry" },
    { type: 'fill', q: "I ___ hot.", a: "am", options: ["am", "is", "are"], img: "🔥", hint: "Tớ thấy nóng.", sound: "I am hot" },
    { type: 'tf', q: "Sleepy (Buồn ngủ)", img: "😴", a: true, sound: "Sleepy" },

    // --- HOUSE & CHORES (NHÀ CỬA) ---
    { type: 'spell', a: "kitchen", img: "🍳", hint: "Phòng bếp", sound: "kitchen" },
    { type: 'quiz', q: "Nơi có nhiều cây xanh quanh nhà?", img: "🌳", a: "Yard", options: ["Yard", "Hall", "Closet"], sound: "Yard" },
    { type: 'scramble', q: "Make the bed", a: "Make the bed", parts: ["Make", "the", "bed"], sound: "Make the bed" },
    { type: 'fill', q: "Joey is in the ___.", a: "bathroom", options: ["kitchen", "bathroom", "bedroom"], img: "🛀", sound: "Joey is in the bathroom" },
    { type: 'quiz', q: "Việc nhà: 'Rửa bát' là?", img: "🥣", a: "Wash the dishes", options: ["Wash the dishes", "Rake leaves", "Wipe table"], sound: "Wash the dishes" },

    // --- WEATHER (THỜI TIẾT) ---
    { type: 'match', q: "Sunny", a: "☀️", options: ["☀️", "🌧️", "❄️", "🌬️"], sound: "Sunny" },
    { type: 'spell', a: "foggy", img: "🌫️", hint: "Nhiều sương mù", sound: "foggy" },
    { type: 'scramble', q: "What's the weather like?", a: "What's the weather like?", parts: ["What's", "the", "weather", "like?"], sound: "What's the weather like?" },
    { type: 'tf', q: "Windy (Có gió)", img: "🌬️", a: true, sound: "Windy" },

    // --- SCHOOL & CLASSES (LỚP HỌC) ---
    { type: 'spell', a: "math", img: "📐", hint: "Môn Toán", sound: "math" },
    { type: 'quiz', q: "Lớp học vẽ là gì?", img: "🎨", a: "Art class", options: ["Art class", "Music class", "Math class"], sound: "Art class" },
    { type: 'tf', q: "Judo practice", img: "🥋", a: true, sound: "Judo practice" },
    { type: 'fill', q: "Going to ___ class.", a: "dance", options: ["dance", "swim", "art"], img: "💃", sound: "Going to dance class" },

    // --- SUPPLIES & POSITION (VỊ TRÍ) ---
    { type: 'match', q: "Scissors", a: "✂️", options: ["✂️", "🖍️", "📏", "📌"], sound: "Scissors" },
    { type: 'spell', a: "eraser", img: "🧽", hint: "Cục tẩy", sound: "eraser" },
    { type: 'quiz', q: "Cái kéo đang ở ĐÂU? (Under)", img: "📦", a: "Under the box", options: ["In the box", "Under the box", "On the box"], sound: "Under the box" },

    // --- WORLD FOODS (MÓN ĂN) ---
    { type: 'match', q: "Sushi (Japan)", a: "🍣", options: ["🍣", "🥟", "🌮", "🍔"], sound: "Sushi" },
    { type: 'spell', a: "tacos", img: "🌮", hint: "Món Tacos (Mexico)", sound: "tacos" },
    { type: 'quiz', q: "Can you ____?", a: "use chopsticks?", options: ["use chopsticks?", "eat fruit?", "drink juice?"], sound: "Can you use chopsticks?" },
    { type: 'fill', q: "I want to eat ___.", a: "noodles", options: ["rice", "noodles", "soup"], img: "🍜", sound: "I want noodles" },

    // --- PHONICS & ANIMALS ---
    { type: 'spell', a: "bell", img: "🔔", hint: "Vần -ell", sound: "bell" },
    { type: 'spell', a: "fox", img: "🦊", hint: "f - o - x", sound: "fox" },
    { type: 'quiz', q: "Từ nào có vần '-in'?", img: "📌", a: "Pin", options: ["Pin", "Pen", "Bed"], sound: "Pin" },
    { type: 'tf', q: "Elephant (Con voi)", img: "🐘", a: true, sound: "Elephant" }
];
