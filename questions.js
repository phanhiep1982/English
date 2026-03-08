// KHỞI ĐẦU FILE: Khai báo biến tổng cho toàn bộ kho câu hỏi
const fullBank = [
    // --- CHỦ ĐỀ 1: FEELINGS (Tài liệu 2 - Trang 1, 2, 4) ---
    { type: "match", q: "Happy", a: "😊", options: ["😊", "😢", "😡", "😴"], sound: "Happy" },
    { type: "match", q: "Sad", a: "😢", options: ["😊", "😢", "😡", "😴"], sound: "Sad" },
    { type: "match", q: "Sleepy", a: "😴", options: ["😴", "😨", "🤒", "😋"], sound: "Sleepy" },
    { type: "match", q: "Angry", a: "😡", options: ["😡", "😊", "😢", "😴"], sound: "Angry" },
    { type: "quiz", q: "Thanh Vân ơi, 'Scared' nghĩa là gì?", img: "😨", a: "Sợ hãi", options: ["Vui vẻ", "Sợ hãi", "Khát nước", "Đói bụng"], sound: "Scared" },
    { type: "quiz", q: "Khi con bị ốm, con thấy thế nào?", img: "🤒", a: "Sick", options: ["Happy", "Sick", "Hot", "Cold"], sound: "Sick" },
    { type: "tf", q: "Hungry (Đói bụng)", img: "🍔", a: true, sound: "Hungry" },
    { type: "tf", q: "Thirsty (Khát nước)", img: "🥤", a: true, sound: "Thirsty" },
    { type: "scramble", q: "Con có khỏe không?", a: "How are you?", parts: ["How", "are", "you?"], sound: "How are you?" },
    { type: "scramble", q: "Con có sợ không?", a: "Are you scared?", parts: ["Are", "you", "scared?"], sound: "Are you scared?" },

    // --- CHỦ ĐỀ 2: OUR HOUSE (Tài liệu 2 - Trang 7, 8, 9, 10) ---
    { type: "match", q: "Kitchen", a: "🍳", options: ["🍳", "🛌", "🛀", "🌳"], sound: "Kitchen" },
    { type: "match", q: "Bedroom", a: "🛌", options: ["🛋️", "🛌", "🍽️", "🚪"], sound: "Bedroom" },
    { type: "match", q: "Bathroom", a: "🛀", options: ["🛀", "🍳", "📦", "🌳"], sound: "Bathroom" },
    { type: "quiz", q: "Nơi có nhiều cây xanh quanh nhà là?", img: "🌳", a: "Yard", options: ["Closet", "Hall", "Yard", "Kitchen"], sound: "Yard" },
    { type: "quiz", q: "Phòng khách tiếng Anh là gì con nhỉ?", img: "🛋️", a: "Living room", options: ["Living room", "Dining room", "Hall", "Closet"], sound: "Living room" },
    { type: "tf", q: "Dining room (Phòng ăn)", img: "🍽️", a: true, sound: "Dining room" },
    { type: "scramble", q: "Dọn dẹp giường ngủ.", a: "Make the bed", parts: ["Make", "the", "bed"], sound: "Make the bed" },
    { type: "quiz", q: "Việc nhà: 'Rửa bát' là?", img: "🥣", a: "Wash the dishes", options: ["Wash the dishes", "Vacuum the carpet", "Rake leaves", "Wipe the table"], sound: "Wash the dishes" },
    { type: "scramble", q: "Joey đang ở trong phòng tắm.", a: "Joey is in the bathroom", parts: ["Joey", "is", "in", "the", "bathroom"], sound: "Joey is in the bathroom" },

    // --- CHỦ ĐỀ 3: WEATHER (Tài liệu 2 - Trang 12, 13) ---
    { type: "match", q: "Sunny", a: "☀️", options: ["☀️", "☁️", "⛈️", "❄️"], sound: "Sunny" },
    { type: "match", q: "Rainy", a: "🌧️", options: ["🌧️", "🌬️", "🌫️", "☀️"], sound: "Rainy" },
    { type: "quiz", q: "Trời có nhiều sương mù là?", img: "🌫️", a: "Foggy", options: ["Cloudy", "Foggy", "Windy", "Warm"], sound: "Foggy" },
    { type: "tf", q: "Windy (Có gió)", img: "🌬️", a: true, sound: "Windy" },
    { type: "tf", q: "Snowy (Có tuyết)", img: "❄️", a: true, sound: "Snowy" },
    { type: "scramble", q: "Thời tiết hôm nay thế nào?", a: "What's the weather like?", parts: ["What's", "the", "weather", "like?"], sound: "What's the weather like?" },

    // --- CHỦ ĐỀ 4: SCHOOL & CLASSES (Tài liệu 1 - Trang 1, 2) ---
    { type: "match", q: "Math class", a: "📐", options: ["🎨", "📐", "⚽", "🏊"], sound: "Math class" },
    { type: "match", q: "Swimming class", a: "🏊", options: ["⚾", "🏊", "💃", "🖌️"], sound: "Swimming class" },
    { type: "quiz", q: "Lớp học nghệ thuật là?", img: "🎨", a: "Art class", options: ["English class", "Art class", "Math class", "Music class"], sound: "Art class" },
    { type: "tf", q: "Judo practice (Tập võ)", img: "🥋", a: true, sound: "Judo practice" },
    { type: "scramble", q: "Tớ đang đi tập múa.", a: "Going to dance class", parts: ["Going", "to", "dance", "class"], sound: "Going to dance class" },

    // --- CHỦ ĐỀ 5: SCHOOL SUPPLIES & POSITION (Tài liệu 1 - Trang 3, 5, 6) ---
    { type: "match", q: "Scissors", a: "✂️", options: ["✂️", "🖍️", "📏", "📌"], sound: "Scissors" },
    { type: "quiz", q: "Hộp màu sáp tiếng Anh là?", img: "🖍️", a: "Crayons", options: ["Markers", "Stickers", "Crayons", "Pins"], sound: "Crayons" },
    { type: "tf", q: "In the box (Trong hộp)", img: "📦", a: true, sound: "In the box" },
    { type: "quiz", q: "Cái kéo đang ở ĐÂU cái hộp? (Under)", img: "📦", a: "Ở dưới", options: ["Ở trên", "Ở trong", "Ở dưới", "Ở cạnh"], sound: "Under the box" },
    { type: "scramble", q: "Những cái bút chì màu ở trong hộp.", a: "The crayons are in the box", parts: ["The", "crayons", "are", "in", "the", "box"], sound: "The crayons are in the box" },
    { type: "quiz", q: "Đánh vần từ 'Con Cáo' (Fox)?", img: "🦊", a: "f-o-x", options: ["b-o-x", "f-o-x", "b-i-g", "c-a-t"], sound: "fox" },

    // --- CHỦ ĐỀ 6: FOODS AROUND THE WORLD (Tài liệu 1 - Trang 8, 14, 16) ---
    { type: "match", q: "Sushi (Japan)", a: "🍣", options: ["🍣", "🥟", "🌮", "🍔"], sound: "Sushi" },
    { type: "match", q: "Tacos (Mexico)", a: "🌮", options: ["🌭", "🌮", "🥣", "🥗"], sound: "Tacos" },
    { type: "quiz", q: "Món Kimchi của nước nào con nhỉ?", img: "🥬", a: "Korea", options: ["China", "Japan", "Korea", "Vietnam"], sound: "Korea" },
    { type: "tf", q: "Hamburgers (The U.S.)", img: "🍔", a: true, sound: "Hamburgers" },
    { type: "scramble", q: "Con muốn ăn mì.", a: "I want noodles", parts: ["I", "want", "noodles"], sound: "I want noodles" },
    { type: "quiz", q: "Con có biết dùng đũa không?", a: "Can you use chopsticks?", options: ["use chopsticks?", "eat fruit?", "drink juice?", "want fish?"], sound: "Can you use chopsticks?" },
    { type: "match", q: "French fries", a: "🍟", options: ["🍟", "🍦", "🥪", "🍕"], sound: "French fries" },

    // --- CHỦ ĐỀ 7: PHONICS (Tài liệu 1 - Trang 4, 13) ---
    { type: "quiz", q: "Từ nào có vần '-ell'?", img: "🔔", a: "Bell", options: ["Bell", "Bed", "Pen", "Ten"], sound: "Bell" },
    { type: "quiz", q: "Từ nào có vần '-in'?", img: "📌", a: "Pin", options: ["Pin", "Pen", "Bed", "Red"], sound: "Pin" },
    { type: "tf", q: "Bed (Đánh vần là b-e-d)", img: "🛏️", a: true, sound: "bed" },
    { type: "quiz", q: "Số 10 (Ten) có vần gì?", img: "🔟", a: "-en", options: ["-ed", "-en", "-ell", "-ig"], sound: "Ten" }
];
// KẾT THÚC FILE: Dấu đóng mảng và dấu chấm phẩy cực kỳ quan trọng
