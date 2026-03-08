// KHO DỮ LIỆU TỔNG HỢP 100% TỪ 2 FILE PDF - ĐÃ FIX LỖI FREEZE
const fullBank = [
    // --- CHỦ ĐỀ: FEELINGS (CẢM XÚC) ---
    { type: "match", q: "Happy", a: "😊", options: ["😊", "😢", "😡", "😴"], sound: "Happy" },
    { type: "spell", a: "scared", img: "😨", hint: "Sợ hãi", sound: "scared" },
    { type: "quiz", q: "Khi con đói bụng, con nói?", img: "🍔", a: "I'm hungry", options: ["I'm hungry", "I'm thirsty", "I'm sick"], sound: "I'm hungry" },
    { type: "quiz", q: "Khi con thấy nóng, con nói?", img: "🔥", a: "I'm hot", options: ["I'm hot", "I'm cold", "I'm OK"], sound: "I'm hot" },
    { type: "fill", q: "I ___ thirsty.", a: "am", options: ["am", "is", "are"], img: "🥤", hint: "Tớ thấy khát.", sound: "I am thirsty" },
    { type: "tf", q: "Sleepy (Buồn ngủ)", img: "😴", a: true, sound: "Sleepy" },

    // --- CHỦ ĐỀ: OUR HOUSE (NHÀ CỬA) ---
    { type: "spell", a: "kitchen", img: "🍳", hint: "Phòng bếp", sound: "kitchen" },
    { type: "spell", a: "bedroom", img: "🛌", hint: "Phòng ngủ", sound: "bedroom" },
    { type: "quiz", q: "Nơi có nhiều cây xanh quanh nhà?", img: "🌳", a: "Yard", options: ["Yard", "Hall", "Closet"], sound: "Yard" },
    { type: "scramble", q: "Joey is in the bathroom", a: "Joey is in the bathroom", parts: ["Joey", "is", "in", "the", "bathroom"], sound: "Joey is in the bathroom" },
    { type: "fill", q: "Make the ___.", a: "bed", options: ["bed", "table", "dishes"], img: "🛌", hint: "Dọn dẹp giường ngủ.", sound: "Make the bed" },

    // --- CHỦ ĐỀ: WEATHER (THỜI TIẾT) ---
    { type: "spell", a: "sunny", img: "☀️", hint: "Trời nắng", sound: "sunny" },
    { type: "spell", a: "foggy", img: "🌫️", hint: "Sương mù", sound: "foggy" },
    { type: "quiz", q: "What's the weather like?", img: "🌧️", a: "It's rainy", options: ["It's rainy", "It's sunny", "It's snowy"], sound: "It's rainy" },
    { type: "tf", q: "Windy (Có gió)", img: "🌬️", a: true, sound: "Windy" },

    // --- CHỦ ĐỀ: SCHOOL & CLASSES (TRƯỜNG HỌC) ---
    { type: "spell", a: "math", img: "📐", hint: "Môn Toán", sound: "math" },
    { type: "spell", a: "dance", img: "💃", hint: "Môn Múa", sound: "dance" },
    { type: "quiz", q: "Lớp học vẽ là gì nhỉ?", img: "🎨", a: "Art class", options: ["Art class", "Music class", "Math class"], sound: "Art class" },
    { type: "tf", q: "Judo practice", img: "🥋", a: true, sound: "Judo practice" },

    // --- CHỦ ĐỀ: WORLD FOODS (MÓN ĂN) ---
    { type: "match", q: "Sushi (Japan)", a: "🍣", options: ["🍣", "🥟", "🌮", "🍔"], sound: "Sushi" },
    { type: "spell", a: "tacos", img: "🌮", hint: "Món Tacos", sound: "tacos" },
    { type: "fill", q: "Can you use ___?", a: "chopsticks", options: ["chopsticks", "spoons", "forks"], img: "🥢", hint: "Con biết dùng đũa không?", sound: "Can you use chopsticks" },
    { type: "quiz", q: "I want to eat ____.", img: "🍜", a: "noodles", options: ["rice", "noodles", "soup"], sound: "I want noodles" },

    // --- CHỦ ĐỀ: PHONICS (NGỮ ÂM) ---
    { type: "spell", a: "bell", img: "🔔", hint: "Vần -ell", sound: "bell" },
    { type: "spell", a: "fox", img: "🦊", hint: "Vần -ox", sound: "fox" },
    { type: "quiz", q: "Từ nào có vần '-in'?", img: "📌", a: "Pin", options: ["Pin", "Pen", "Bed"], sound: "Pin" }
];
