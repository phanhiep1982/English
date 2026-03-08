const fullBank = [
    // --- UNIT 1: FEELINGS ---
    { type: 'match', q: 'Happy', a: '😊', options: ['😊', '😢', '😡', '😴'], sound: 'Happy' },
    { type: 'match', q: 'Sad', a: '😢', options: ['😊', '😢', '😡', '😴'], sound: 'Sad' },
    { type: 'quiz', q: 'Thanh Vân ơi, sợ hãi tiếng Anh là gì?', img: '😨', a: 'Scared', options: ['Happy', 'Angry', 'Scared', 'Sleepy'], sound: 'Scared' },
    { type: 'tf', q: 'Sleepy', img: '😴', a: true, sound: 'Sleepy' },
    { type: 'tf', q: 'Thirsty', img: '🍔', a: false, sound: 'Thirsty' },
    { type: 'scramble', q: 'Are you hungry?', a: "Are you hungry?", parts: ["Are", "you", "hungry?"], sound: "Are you hungry?" },

    // --- UNIT 2: OUR HOUSE ---
    { type: 'quiz', q: 'Phòng ngủ của Thanh Vân là?', img: '🛌', a: 'Bedroom', options: ['Kitchen', 'Bedroom', 'Yard', 'Hall'], sound: 'Bedroom' },
    { type: 'match', q: 'Kitchen', a: '🍳', options: ['🚿', '🍳', '🛋️', '🌳'], sound: 'Kitchen' },
    { type: 'match', q: 'Bathroom', a: '🚿', options: ['🚿', '🛌', '🛋️', '🌳'], sound: 'Bathroom' },
    { type: 'scramble', q: 'Make the bed', a: "Make the bed", parts: ["Make", "the", "bed"], sound: "Make the bed" },
    { type: 'quiz', q: 'Vacuum the carpet', img: '🧹', a: 'Vacuum the carpet', options: ['Wash dishes', 'Vacuum the carpet', 'Rake leaves', 'Wipe table'], sound: 'Vacuum the carpet' },

    // --- UNIT 3: WEATHER ---
    { type: 'match', q: 'Sunny', a: '☀️', options: ['☀️', '🌧️', '❄️', '🌬️'], sound: 'Sunny' },
    { type: 'quiz', q: 'Foggy weather?', img: '🌫️', a: 'Foggy', options: ['Sunny', 'Foggy', 'Windy', 'Rainy'], sound: 'Foggy' },
    { type: 'tf', q: 'Rainy', img: '🌧️', a: true, sound: 'Rainy' },
    { type: 'scramble', q: "What's the weather like?", a: "What's the weather like?", parts: ["What's", "the", "weather", "like?"], sound: "What's the weather like?" },

    // --- SCHOOL & CLASSES ---
    { type: 'match', q: 'Art class', a: '🎨', options: ['🎨', '📐', '⚽', '🏊'], sound: 'Art class' },
    { type: 'quiz', q: 'Calligraphy class?', img: '🖌️', a: 'Calligraphy class', options: ['Math', 'Judo', 'Calligraphy', 'Art'], sound: 'Calligraphy class' },
    { type: 'tf', q: 'Judo practice', img: '🥋', a: true, sound: 'Judo practice' },
    { type: 'scramble', q: 'Going to dance class', a: "Going to dance class", parts: ["Going", "to", "dance", "class"], sound: "Going to dance class" },

    // --- FOODS ---
    { type: 'match', q: 'Spaghetti', a: '🍝', options: ['🍣', '🍝', '🌮', '🌭'], sound: 'Spaghetti' },
    { type: 'match', q: 'Sushi', a: '🍣', options: ['🍣', '🥟', '🌮', '🌭'], sound: 'Sushi' },
    { type: 'quiz', q: 'Where is Tacos from?', img: '🌮', a: 'Mexico', options: ['China', 'Japan', 'Korea', 'Mexico'], sound: 'Mexico' },
    { type: 'scramble', q: 'I want noodles', a: "I want noodles", parts: ["I", "want", "noodles"], sound: "I want noodles" },
    { type: 'quiz', q: 'Can you use chopsticks?', a: 'Can you use chopsticks?', options: ['use chopsticks?', 'eat fruit?', 'drink juice?', 'want fish?'], sound: 'Can you use chopsticks?' },
    
    // --- PHONICS ---
    { type: 'quiz', q: 'Spell the word "Cat"?', img: '🐱', a: 'c-a-t', options: ['d-o-g', 'c-a-t', 'f-o-x', 'b-i-g'], sound: 'cat' },
    { type: 'tf', q: 'In the box', img: '📦', a: true, sound: 'In the box' },
    { type: 'tf', q: 'Bell', img: '🔔', a: true, sound: 'Bell' }
];
