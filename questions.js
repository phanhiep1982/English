// KHO DỮ LIỆU TỔNG HỢP TOÀN BỘ KIẾN THỨC TỪ 2 FILE PDF DÀNH CHO THANH VÂN
const fullBank = [
    // --- CHỦ ĐỀ 1: FEELINGS & HEALTH (CẢM XÚC) ---
    { type: "match", q: "Happy", a: "😊", options: ["😊", "😢", "😡", "😴"], sound: "Happy" },
    { type: "match", q: "Sad", a: "😢", options: ["😊", "😢", "😡", "😴"], sound: "Sad" },
    { type: "match", q: "Sleepy", a: "😴", options: ["😴", "😨", "🤒", "😋"], sound: "Sleepy" },
    { type: "match", q: "Angry", a: "😡", options: ["😡", "😊", "😢", "😴"], sound: "Angry" },
    { type: "quiz", q: "Thanh Vân ơi, 'Scared' nghĩa là gì?", img: "😨", a: "Sợ hãi", options: ["Vui vẻ", "Sợ hãi", "Khát nước", "Đói bụng"], sound: "Scared" },
    { type: "quiz", q: "Khi con thấy nóng, con nói thế nào?", img: "🔥", a: "I'm hot", options: ["I'm hot", "I'm cold", "I'm sick", "I'm OK"], sound: "I'm hot" },
    { type: "tf", q: "Hungry (Đói bụng)", img: "🍔", a: true, sound: "Hungry" },
    { type: "tf", q: "Thirsty (Khát nước)", img: "🍕", a: false, sound: "Thirsty" },
    { type: "scramble", q: "Con có khỏe không?", a: "How are you?", parts: ["How", "are", "you?"], sound: "How are you?" },

    // --- CHỦ ĐỀ 2: SCHOOL & CLASSES (LỚP HỌC) ---
    { type: "match", q: "Math class", a: "📐", options: ["🎨", "📐", "⚽", "🏊"], sound: "Math class" },
    { type: "match", q: "Art class", a: "🎨", options: ["🎨", "📐", "🥋", "💃"], sound: "Art class" },
    { type: "match", q: "Swimming class", a: "🏊", options: ["⚾", "🏊", "⚽", "💃"], sound: "Swimming class" },
    { type: "quiz", q: "Lớp học viết thư pháp là?", img: "🖌️", a: "Calligraphy class", options: ["Math class", "Dance class", "Calligraphy class", "Art class"], sound: "Calligraphy class" },
    { type: "tf", q: "Judo practice (Tập võ)", img: "🥋", a: true, sound: "Judo practice" },
    { type: "scramble", q: "Tớ đang đi tập múa.", a: "Going to dance class", parts: ["Going", "to", "dance", "class"], sound: "Going to dance class" },

    // --- CHỦ ĐỀ 3: SCHOOL SUPPLIES & POSITION (VỊ TRÍ) ---
    { type: "match", q: "Scissors", a: "✂️", options: ["✂️", "🖍️", "📏", "📌"], sound: "Scissors" },
    { type: "match", q: "Erasers", a: "🧽", options: ["🖍️", "🧽", "🖌️", "🎒"], sound: "Erasers" },
    { type: "quiz", q: "Hộp màu sáp tiếng Anh là?", img: "🖍️", a: "Crayons", options: ["Markers", "Stickers", "Crayons", "Pins"], sound: "Crayons" },
    { type: "tf", q: "In the box (Trong hộp)", img: "📦", a: true, sound: "In the box" },
    { type: "quiz", q: "Cái kéo đang ở ĐÂU cái hộp? (Under)", img: "📦", a: "Ở dưới", options: ["Ở trên", "Ở trong", "Ở dưới", "Ở cạnh"], sound: "Under the box" },
    { type: "scramble", q: "Những cái bút chì màu ở trong hộp.", a: "The crayons are in the box", parts: ["The", "crayons", "are", "in", "the", "box"], sound: "The crayons are in the box" },

    // --- CHỦ ĐỀ 4: OUR HOUSE & CHORES (NHÀ CỬA) ---
    { type: "match", q: "Kitchen", a: "🍳", options: ["🍳", "🛌", "🛀", "🌳"], sound: "Kitchen" },
    { type: "match", q: "Bedroom", a: "🛌", options: ["🛋️", "🛌", "🍽️", "🚪"], sound: "Bedroom" },
    { type: "quiz", q: "Phòng khách tiếng Anh là gì con nhỉ?", img: "🛋️", a: "Living room", options: ["Living room", "Dining room", "Hall", "Closet"], sound: "Living room" },
    { type: "quiz", q: "Nơi có nhiều cây xanh quanh nhà là?", img: "🌳", a: "Yard", options: ["Closet", "Hall", "Yard", "Kitchen"], sound: "Yard" },
    { type: "tf", q: "Bathroom (Phòng tắm)", img: "🛀", a: true, sound: "Bathroom" },
    { type: "scramble", q: "Dọn dẹp giường ngủ.", a: "Make the bed", parts: ["Make", "the", "bed"], sound: "Make the bed" },
    { type: "quiz", q: "Việc nhà: 'Rửa bát' là?", img: "🥣", a: "Wash the dishes", options: ["Wash the dishes", "Vacuum the carpet", "Rake leaves", "Wipe the table"], sound: "Wash the dishes" },
    { type: "scramble", q: "Joey đang ở trong phòng tắm.", a: "Joey is in the bathroom", parts: ["Joey", "is", "in", "the", "bathroom"], sound: "Joey is in the bathroom" },

    // --- CHỦ ĐỀ 5: FOODS & EATING OUT (ĂN UỐNG) ---
    { type: "match", q: "Sushi (Japan)", a: "🍣", options: ["🍣", "🥟", "🌮", "🍔"], sound: "Sushi" },
    { type: "match", q: "Tacos (Mexico)", a: "🌮", options: ["🌭", "🌮", "🥣", "🥗"], sound: "Tacos" },
    { type: "quiz", q: "Món Kimchi của nước nào con nhỉ?", img: "🥬", a: "Korea", options: ["China", "Japan", "Korea", "Vietnam"], sound: "Korea" },
    { type: "match", q: "Spaghetti", a: "🍝", options: ["🍣", "🍝", "🌮", "🌭"], sound: "Spaghetti" },
    { type: "match", q: "French fries", a: "🍟", options: ["🍟", "🍦", "🥪", "🍕"], sound: "French fries" },
    { type: "quiz", q: "Thanh Vân muốn ăn mì (Noodles)?", img: "🍜", a: "Noodles", options: ["Rice", "Soup", "Noodles", "Bread"], sound: "Noodles" },
    { type: "quiz", q: "Can you ____?", a: "use chopsticks?", options: ["use chopsticks?", "eat fruit?", "drink juice?", "want fish?"], sound: "Can you use chopsticks?" },
    { type: "scramble", q: "Con muốn ăn mì.", a: "I want noodles", parts: ["I", "want", "noodles"], sound: "I want noodles" },
    { type: "tf", q: "Hamburgers (The U.S.)", img: "🍔", a: true, sound: "Hamburgers" },

    // --- CHỦ ĐỀ 6: WEATHER (THỜI TIẾT) ---
    { type: "match", q: "Sunny", a: "☀️", options: ["☀️", "☁️", "⛈️", "❄️"], sound: "Sunny" },
    { type: "match", q: "Rainy", a: "🌧️", options: ["🌧️", "🌬️", "🌫️", "☀️"], sound: "Rainy" },
    { type: "quiz", q: "Trời có nhiều sương mù là?", img: "🌫️", a: "Foggy", options: ["Cloudy", "Foggy", "Windy", "Warm"], sound: "Foggy" },
    { type: "tf", q: "Windy (Có gió)", img: "🌬️", a: true, sound: "Windy" },
    { type: "tf", q: "Snowy (Có tuyết)", img: "❄️", a: true, sound: "Snowy" },
    { type: "scramble", q: "Thời tiết hôm nay thế nào?", a: "What's the weather like?", parts: ["What's", "the", "weather", "like?"], sound: "What's the weather like?" },

    // --- CHỦ ĐỀ 7: ANIMALS & PHONICS (NGỮ ÂM) ---
    { type: "quiz", q: "Con vật nào đây con nhỉ?", img: "🐘", a: "Elephant", options: ["Alligator", "Elephant", "Iguana", "Gorilla"], sound: "Elephant" },
    { type: "match", q: "Bird", a: "🐦", options: ["🐦", "🦊", "🦁", "🐹"], sound: "Bird" },
    { type: "quiz", q: "Từ nào có vần '-ell'?", img: "🔔", a: "Bell", options: ["Bell", "Bed", "Pen", "Ten"], sound: "Bell" },
    { type: "quiz", q: "Từ nào có vần '-in'?", img: "📌", a: "Pin", options: ["Pin", "Pen", "Bed", "Red"], sound: "Pin" },
    { type: "quiz", q: "Đánh vần từ 'Con Cáo' (Fox)?", img: "🦊", a: "f-o-x", options: ["b-o-x", "f-o-x", "b-i-g", "c-a-t"], sound: "fox" },
    { type: "tf", q: "Cat (Đánh vần là c-a-t)", img: "🐱", a: true, sound: "cat" },
    { type: "quiz", q: "Số 10 (Ten) có vần gì?", img: "🔟", a: "-en", options: ["-ed", "-en", "-ell", "-ig"], sound: "Ten" },

    // --- CHỦ ĐỀ 8: TIME & COMMUNICATION ---
    { type: "quiz", q: "Mấy giờ rồi con nhỉ?", img: "⏰", a: "What time is it?", options: ["What's your name?", "How old are you?", "What time is it?", "How are you?"], sound: "What time is it?" },
    { type: "tf", q: "It's 4:00 (Bây giờ là 4 giờ)", img: "🕓", a: true, sound: "It's 4:00" },
    { type: "scramble", q: "Đến lúc đi về nhà rồi.", a: "Time to go home", parts: ["Time", "to", "go", "home"], sound: "It's time to go home" }
];
