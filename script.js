/* ============================================
   THE SODA SPLASH — script.js
   ============================================ */

// ── FULL MENU DATA ─────────────────────────────────────────────
const MENU = [
  /* ── SODAS ── Classic */
  { cat:'sodas', sub:'Classic Sodas', name:'Blue Berry',       emoji:'🫐', bg:'#EEF2FF', price:15, priceL:30, priceF:45,   desc:'Sweet blueberry soda in small / large / float.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Cola',             emoji:'🥤', bg:'#f5f0e8', price:15, priceL:25, priceF:40,   desc:'Classic cola taste with a Soda Splash twist.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Root Beer',        emoji:'🍺', bg:'#f0e8d8', price:15, priceL:20, priceF:40,   desc:'Smooth root beer flavoured soda.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Green Apple',      emoji:'🍏', bg:'#e8f5e8', price:15, priceL:30, priceF:40,   desc:'Tangy green apple soda.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Guava',            emoji:'🍈', bg:'#f5ffe8', price:15, priceL:25, priceF:45,   desc:'Tropical guava flavoured soda.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Jham Jham',        emoji:'💧', bg:'#e8f0ff', price:15, priceL:30, priceF:null, desc:'Special house-blend jham jham soda.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Khatta Mitha',     emoji:'🍋', bg:'#fffbe8', price:15, priceL:35, priceF:null, desc:'Sweet and sour classic Indian flavour.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Litchi',           emoji:'🍡', bg:'#ffe8f5', price:15, priceL:30, priceF:45,   desc:'Delicate litchi flavoured soda.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Mix Fruit',        emoji:'🍓', bg:'#ffe8e8', price:20, priceL:35, priceF:null, desc:'Blend of mixed fruits in a fizzy soda.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Mango',            emoji:'🥭', bg:'#fff8e8', price:15, priceL:25, priceF:80,   desc:'King of fruits — mango soda.', badge:'Popular' },
  { cat:'sodas', sub:'Classic Sodas', name:'Masala Soda',      emoji:'🌶️', bg:'#ffe8e8', price:15, priceL:25, priceF:null, desc:'Spiced masala soda — a Jodhpur classic.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Nimbu Pani',       emoji:'🍋', bg:'#fffff0', price:15, priceL:25, priceF:null, desc:'Classic fresh lime soda.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Orange',           emoji:'🍊', bg:'#fff0e8', price:15, priceL:20, priceF:40,   desc:'Zesty orange soda.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Pudina Masala',    emoji:'🌿', bg:'#e8ffe8', price:15, priceL:30, priceF:null, desc:'Refreshing mint masala soda.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Alphonso Mango',   emoji:'🥭', bg:'#fff5d0', price:25, priceL:45, priceF:55,   desc:'Premium Alphonso mango soda.', badge:'Premium' },
  { cat:'sodas', sub:'Classic Sodas', name:'Blue Corrico',     emoji:'🔵', bg:'#e8eeff', price:25, priceL:50, priceF:60,   desc:'Tropical blue curacao flavoured soda.' },
  { cat:'sodas', sub:'Classic Sodas', name:'Black Currant',    emoji:'🍇', bg:'#f0e8ff', price:25, priceL:50, priceF:55,   desc:'Deep rich black currant soda.' },

  /* ── SODAS ── Falooda & Special */
  { cat:'sodas', sub:'Falooda & Special', name:'Butter Scotch',         emoji:'🍯', bg:'#fff5d0', price:null, priceL:null, priceF:null, desc:'Butterscotch flavour soda.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Falooda',               emoji:'🥛', bg:'#ffe8f5', price:25,   priceL:50,   priceF:90,   desc:'Classic rose falooda with basil seeds.', badge:'Popular' },
  { cat:'sodas', sub:'Falooda & Special', name:'Butter Scotch Falooda', emoji:'🍯', bg:'#fff0d0', price:25,   priceL:50,   priceF:95,   desc:'Butterscotch falooda — rich and indulgent.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Bubblegum',             emoji:'🫧', bg:'#ffe8ff', price:25,   priceL:55,   priceF:null, desc:'Fun bubblegum flavoured soda.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Chandan Kesar',         emoji:'✨', bg:'#fff8e0', price:25,   priceL:50,   priceF:86,   desc:'Sandalwood and saffron — royal flavour.', badge:'Special' },
  { cat:'sodas', sub:'Falooda & Special', name:'Fruit Punch',           emoji:'🍹', bg:'#ffe8f0', price:25,   priceL:45,   priceF:null, desc:'Mixed fruit punch soda.', badge:'Popular' },
  { cat:'sodas', sub:'Falooda & Special', name:'Ginger Lemon',          emoji:'🫚', bg:'#fffff0', price:25,   priceL:null, priceF:55,   desc:'Zingy ginger with fresh lemon soda.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Gulab Gulkand',         emoji:'🌹', bg:'#ffe8e8', price:25,   priceL:50,   priceF:null, desc:'Rose petals and gulkand — pure desi bliss.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Kala Khatta',           emoji:'🫒', bg:'#f0e8ff', price:25,   priceL:50,   priceF:null, desc:'Tangy kala khatta — a street-food classic.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Jal Pudina',            emoji:'🌿', bg:'#e8fff0', price:25,   priceL:null, priceF:50,   desc:'Cooling jal jeera with pudina.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Kaccha Aam',            emoji:'💚', bg:'#e8ffe8', price:25,   priceL:45,   priceF:55,   desc:'Raw mango soda — tangy and refreshing.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Ruh Falooda',           emoji:'🌸', bg:'#ffe8f5', price:25,   priceL:null, priceF:null, desc:'Ruh afza falooda with rose essence.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Nasala Neem',           emoji:'🍃', bg:'#e8f5e8', price:25,   priceL:50,   priceF:null, desc:'Herbal neem and spice blend soda.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Mocktail',              emoji:'🍸', bg:'#e8f0ff', price:25,   priceL:45,   priceF:50,   desc:'Signature house mocktail blend.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Mini Moto',             emoji:'🏍️', bg:'#f0e8ff', price:25,   priceL:45,   priceF:null, desc:'Small but mighty — spicy mini moto.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Pan Gulkand',           emoji:'🌿', bg:'#e8ffe8', price:25,   priceL:45,   priceF:50,   desc:'Pan flavoured with gulkand sweetness.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Pineapple',             emoji:'🍍', bg:'#fffff0', price:25,   priceL:50,   priceF:45,   desc:'Tropical pineapple soda.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Ice Berries',           emoji:'🫐', bg:'#e8f0ff', price:25,   priceL:50,   priceF:null, desc:'Mixed berry ice soda.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Rose Falooda',          emoji:'🌹', bg:'#ffe8f0', price:25,   priceL:null, priceF:95,   desc:'Classic rose falooda with vermicelli.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Strawberry',            emoji:'🍓', bg:'#ffe8e8', price:25,   priceL:45,   priceF:null, desc:'Fresh strawberry soda.' },
  { cat:'sodas', sub:'Falooda & Special', name:'Very Berry',            emoji:'🫐', bg:'#f0e8ff', price:null, priceL:null, priceF:null, desc:'Special very berry blend soda.' },

  /* ── COFFEE & SHAKES ── */
  { cat:'coffee', sub:'Cold Coffee', name:'Cold Coffee',               emoji:'☕', bg:'#f5f0e8', price:45,   desc:'Classic chilled cold coffee.' },
  { cat:'coffee', sub:'Cold Coffee', name:'Oreo Cold Coffee',          emoji:'🍪', bg:'#f0f0f0', price:60,   desc:'Cold coffee blended with Oreo cookies.', badge:'Popular' },
  { cat:'coffee', sub:'Cold Coffee', name:'Cappuccino Coffee',         emoji:'☕', bg:'#f5ede0', price:60,   desc:'Creamy chilled cappuccino cold coffee.' },
  { cat:'coffee', sub:'Cold Coffee', name:'Vanilla Caramel Coffee',    emoji:'🍮', bg:'#fff5d0', price:90,   desc:'Sweet vanilla caramel cold coffee.' },
  { cat:'coffee', sub:'Cold Coffee', name:'Nutella Hazelnut Coffee',   emoji:'🌰', bg:'#f5e8d0', price:95,   desc:'Rich nutella and hazelnut cold coffee.', badge:'Special' },
  { cat:'coffee', sub:'Cold Coffee', name:'Double Chocolate Coffee',   emoji:'🍫', bg:'#f0e8d8', price:90,   desc:'Double dose of chocolate cold coffee.' },
  { cat:'coffee', sub:'Cold Coffee', name:'Caramel Coffee',            emoji:'🍯', bg:'#fff0c0', price:null, desc:'Sweet caramel drizzled cold coffee.' },
  { cat:'coffee', sub:'Cold Coffee', name:'Choco Brownie Coffee',      emoji:'🍫', bg:'#e8d8c0', price:null, desc:'Brownie pieces blended into cold coffee.' },

  { cat:'coffee', sub:'Shakes & Martis', name:'Gulkand Pan',            emoji:'🌹', bg:'#ffe8f0', price:25,   desc:'Pan gulkand flavoured shake.' },
  { cat:'coffee', sub:'Shakes & Martis', name:'Special Hunky Soda',     emoji:'⭐', bg:'#fff8e0', price:60,   desc:'Our signature special hunky soda.', badge:'Special' },
  { cat:'coffee', sub:'Shakes & Martis', name:'Chocolate Float',        emoji:'🍫', bg:'#f0e0d0', price:80,   desc:'Rich chocolate ice cream float.' },
  { cat:'coffee', sub:'Shakes & Martis', name:'American Nut Flow',      emoji:'🥜', bg:'#f5e8d0', price:95,   desc:'American peanut butter flavoured shake.' },
  { cat:'coffee', sub:'Shakes & Martis', name:'Mango Shake',            emoji:'🥭', bg:'#fff5d0', price:85,   desc:'Thick fresh mango milkshake.', badge:'Popular' },
  { cat:'coffee', sub:'Shakes & Martis', name:'Pineapple Shake',        emoji:'🍍', bg:'#fffff0', price:85,   desc:'Refreshing pineapple milkshake.' },
  { cat:'coffee', sub:'Shakes & Martis', name:'Oreo Shake',             emoji:'🍪', bg:'#f0f0f0', price:85,   desc:'Creamy Oreo milkshake.' },
  { cat:'coffee', sub:'Shakes & Martis', name:'Chocolate Shake',        emoji:'🍫', bg:'#f0e0d0', price:100,  desc:'Classic rich chocolate milkshake.' },
  { cat:'coffee', sub:'Shakes & Martis', name:'Strawberry Shake',       emoji:'🍓', bg:'#ffe8e8', price:85,   desc:'Fresh strawberry milkshake.' },
  { cat:'coffee', sub:'Shakes & Martis', name:'Kit Kat Shake',          emoji:'🍫', bg:'#f5d8c8', price:null, desc:'Kit Kat bar blended into a creamy shake.' },
  { cat:'coffee', sub:'Shakes & Martis', name:'Choco Brownie Shake',    emoji:'🍫', bg:'#e8d0c0', price:null, desc:'Brownie chunks in a chocolate shake.' },
  { cat:'coffee', sub:'Shakes & Martis', name:'American Caramel Shake', emoji:'🍯', bg:'#fff0c0', price:null, desc:'Rich caramel American style milkshake.' },

  /* ── FAST FOOD ── */
  { cat:'food', sub:'Bread Pizza', name:'Pizza',              emoji:'🍕', bg:'#fff0e8', price:40,   desc:'Classic bread pizza.' },
  { cat:'food', sub:'Bread Pizza', name:'Sweet Corn Pizza',   emoji:'🌽', bg:'#fffff0', price:50,   desc:'Topped with sweet corn.' },
  { cat:'food', sub:'Bread Pizza', name:'Paneer Corn Pizza',  emoji:'🧀', bg:'#fff8e0', price:80,   desc:'Paneer and sweet corn bread pizza.' },

  { cat:'food', sub:'Pizza', name:'Capsicum Pizza',          emoji:'🫑', bg:'#e8f5e8', price:120,  desc:'Capsicum loaded pizza.' },
  { cat:'food', sub:'Pizza', name:'Capsicum Tomato Pizza',   emoji:'🍅', bg:'#ffe8e8', price:120,  desc:'Capsicum and tomato pizza.' },
  { cat:'food', sub:'Pizza', name:'Triple Pizza',            emoji:'🍕', bg:'#fff0e8', price:120,  desc:'Triple topping loaded pizza.' },
  { cat:'food', sub:'Pizza', name:'Corn Pizza',              emoji:'🌽', bg:'#fffff0', price:120,  desc:'Sweet corn pizza.' },
  { cat:'food', sub:'Pizza', name:'Corn Paneer Pizza',       emoji:'🧀', bg:'#fff8e0', price:170,  desc:'Sweet corn and paneer pizza.' },
  { cat:'food', sub:'Pizza', name:'Grill Pizza',             emoji:'🔥', bg:'#ffe8d0', price:null, desc:'Grilled pizza with veggies.' },
  { cat:'food', sub:'Pizza', name:'Cheese Pizza',            emoji:'🧀', bg:'#fff5d0', price:150,  desc:'Extra cheese loaded pizza.' },
  { cat:'food', sub:'Pizza', name:'Garlic Bread Pizza',      emoji:'🧄', bg:'#f5f0e0', price:null, desc:'Garlic bread topped with pizza sauce.' },
  { cat:'food', sub:'Pizza', name:'Double Cheese Dip Pizza', emoji:'🧀', bg:'#fffacc', price:null, desc:'Double cheese with dip — extra indulgent.', badge:'Popular' },

  { cat:'food', sub:'Rice', name:'Fried Rice',         emoji:'🍚', bg:'#fffff0', price:65,   desc:'Classic veg fried rice.' },
  { cat:'food', sub:'Rice', name:'Schezwan Rice',       emoji:'🌶️', bg:'#ffe8e8', price:70,   desc:'Spicy schezwan flavoured fried rice.' },
  { cat:'food', sub:'Rice', name:'Singapore Rice',      emoji:'🍚', bg:'#fff8e0', price:90,   desc:'Singapore style flavoured rice.' },
  { cat:'food', sub:'Rice', name:'Manchurian Rice',     emoji:'🥢', bg:'#e8f0e8', price:80,   desc:'Manchurian balls with fried rice.' },
  { cat:'food', sub:'Rice', name:'Burger Fried Rice',   emoji:'🍔', bg:'#f5f0e8', price:null, desc:'Burger style fried rice combo.' },
  { cat:'food', sub:'Rice', name:'Mexican Cheese Rice', emoji:'🧀', bg:'#fff5d0', price:100,  desc:'Mexican spiced rice with cheese.' },

  { cat:'food', sub:'Burger', name:'Plain Burger',        emoji:'🍔', bg:'#f5f0e8', price:50,   desc:'Simple fresh plain burger.' },
  { cat:'food', sub:'Burger', name:'Cheese Burger',        emoji:'🧀', bg:'#fff5d0', price:60,   desc:'Classic cheesy burger.', badge:'Popular' },
  { cat:'food', sub:'Burger', name:'Masala Burger',        emoji:'🌶️', bg:'#ffe8e8', price:70,   desc:'Spiced masala style burger.' },
  { cat:'food', sub:'Burger', name:'Double Mac Burger',    emoji:'🍔', bg:'#f5e8d0', price:null, desc:'Double patty loaded burger.' },
  { cat:'food', sub:'Burger', name:'Sauce Burger',         emoji:'🍔', bg:'#f0f0f0', price:null, desc:'Extra sauce loaded burger.' },
  { cat:'food', sub:'Burger', name:'Paneer Patty Burger',  emoji:'🧀', bg:'#fff8e0', price:100,  desc:'Juicy paneer patty burger.' },

  { cat:'food', sub:'Sandwich', name:'Veg Sandwich',        emoji:'🥪', bg:'#f5f5e8', price:50,   desc:'Fresh vegetable sandwich.' },
  { cat:'food', sub:'Sandwich', name:'Grilled Sandwich',    emoji:'🥪', bg:'#f0ede0', price:70,   desc:'Toasted grilled sandwich.' },
  { cat:'food', sub:'Sandwich', name:'Butter Sandwich',     emoji:'🧈', bg:'#fff8d0', price:null, desc:'Classic buttered sandwich.' },
  { cat:'food', sub:'Sandwich', name:'Triple Club Sandwich',emoji:'🥪', bg:'#f5ede0', price:null, desc:'Triple decker club sandwich.' },
  { cat:'food', sub:'Sandwich', name:'Corn Sandwich',       emoji:'🌽', bg:'#fffff0', price:null, desc:'Sweet corn filled sandwich.' },
  { cat:'food', sub:'Sandwich', name:'Corn Club Sandwich',  emoji:'🌽', bg:'#fffae0', price:null, desc:'Corn triple club sandwich.' },
  { cat:'food', sub:'Sandwich', name:'Veg Cheese Sandwich', emoji:'🧀', bg:'#fff5d0', price:null, desc:'Veggies and cheese sandwich.' },

  { cat:'food', sub:'Maggie', name:'Maggie',                emoji:'🍜', bg:'#fffff0', price:40,   desc:'Classic Maggie noodles.' },
  { cat:'food', sub:'Maggie', name:'Triple Maggie',          emoji:'🍜', bg:'#fff8e0', price:60,   desc:'Triple serving Maggie.' },
  { cat:'food', sub:'Maggie', name:'Jain Maggie',            emoji:'🍜', bg:'#e8ffe8', price:null, desc:'Jain (no onion/garlic) Maggie.' },
  { cat:'food', sub:'Maggie', name:'Veg Maggie',             emoji:'🥦', bg:'#e8f5e8', price:null, desc:'Maggie loaded with vegetables.' },
  { cat:'food', sub:'Maggie', name:'Cheese Maggie',          emoji:'🧀', bg:'#fff5d0', price:null, desc:'Maggie topped with melted cheese.' },
  { cat:'food', sub:'Maggie', name:'Butter Sandooni Maggie', emoji:'🧈', bg:'#fff8d0', price:null, desc:'Buttery sandooni style Maggie.' },

  { cat:'food', sub:'French Fries', name:'Plain Fries',          emoji:'🍟', bg:'#fffff0', price:25,   desc:'Crispy salted French fries.' },
  { cat:'food', sub:'French Fries', name:'Masala Fries',         emoji:'🌶️', bg:'#ffe8e8', price:35,   desc:'Spiced masala French fries.' },
  { cat:'food', sub:'French Fries', name:'Cheese Fries',         emoji:'🧀', bg:'#fff5d0', price:null, desc:'Fries topped with melted cheese.' },
  { cat:'food', sub:'French Fries', name:'Loaded Cheese Fries',  emoji:'🍟', bg:'#fff0c0', price:null, desc:'Fully loaded cheese fries.', badge:'Hot' },

  { cat:'food', sub:'Sweet Corn', name:'Plain Corn',           emoji:'🌽', bg:'#fffff0', price:40,   desc:'Buttered sweet corn cup.' },
  { cat:'food', sub:'Sweet Corn', name:'Masala Corn',          emoji:'🌶️', bg:'#ffe8d0', price:50,   desc:'Spiced masala sweet corn.' },
  { cat:'food', sub:'Sweet Corn', name:'Cheese Corn',          emoji:'🧀', bg:'#fff5d0', price:null, desc:'Sweet corn with melted cheese.' },
  { cat:'food', sub:'Sweet Corn', name:'Vegetable Corn',       emoji:'🥦', bg:'#e8f5e8', price:null, desc:'Mixed vegetable sweet corn.' },
  { cat:'food', sub:'Sweet Corn', name:'Chilli Corn',          emoji:'🌶️', bg:'#ffe8e8', price:null, desc:'Fiery chilli spiced corn.' },
  { cat:'food', sub:'Sweet Corn', name:'Schezwan Masala Corn', emoji:'🌶️', bg:'#ffd8d8', price:null, desc:'Schezwan spiced masala corn.' },

  { cat:'food', sub:'Chinese', name:'Dragon Potato',      emoji:'🥔', bg:'#ffe8d0', price:null, desc:'Crispy spicy dragon potato.', badge:'Hot' },
  { cat:'food', sub:'Chinese', name:'Chilli Potato',      emoji:'🌶️', bg:'#ffe0e0', price:null, desc:'Classic Chinese chilli potato.' },
  { cat:'food', sub:'Chinese', name:'Manchurian Dry',     emoji:'🥢', bg:'#f0ede0', price:null, desc:'Crispy veg Manchurian dry.' },
  { cat:'food', sub:'Chinese', name:'Manchurian Gravy',   emoji:'🥣', bg:'#e8ede0', price:null, desc:'Veg Manchurian in rich gravy.' },
  { cat:'food', sub:'Chinese', name:'Cheese Ball',        emoji:'🧀', bg:'#fff5d0', price:null, desc:'Fried crispy cheese balls.' },
  { cat:'food', sub:'Chinese', name:'Chilli Paneer Dry',  emoji:'🧀', bg:'#ffe8e0', price:null, desc:'Spicy dry chilli paneer.' },
  { cat:'food', sub:'Chinese', name:'Chilli Paneer Gravy',emoji:'🥣', bg:'#e8ede0', price:null, desc:'Chilli paneer in thick gravy.' },

  { cat:'food', sub:'Noodles', name:'Chowmein',           emoji:'🍜', bg:'#fffff0', price:null, desc:'Classic veg chowmein noodles.' },
  { cat:'food', sub:'Noodles', name:'Schezwan Chowmein',  emoji:'🌶️', bg:'#ffe8e8', price:null, desc:'Spicy schezwan chowmein.' },
  { cat:'food', sub:'Noodles', name:'Singapore Chow',     emoji:'🍜', bg:'#fff8e0', price:null, desc:'Singapore style noodles.' },
  { cat:'food', sub:'Noodles', name:'Burger Cheese Chow', emoji:'🧀', bg:'#fff0d0', price:null, desc:'Burger cheese style noodles.' },

  { cat:'food', sub:'Pasta', name:'Red Sauce Pasta',    emoji:'🍝', bg:'#ffe8e8', price:100,  desc:'Tangy red sauce penne pasta.' },
  { cat:'food', sub:'Pasta', name:'White Sauce Pasta',  emoji:'🍝', bg:'#f5f5f5', price:100,  desc:'Creamy white sauce pasta.' },
  { cat:'food', sub:'Pasta', name:'Pink Sauce Pasta',   emoji:'🍝', bg:'#ffe8f0', price:null, desc:'Rose / pink sauce pasta.' },
  { cat:'food', sub:'Pasta', name:'Double Cheese Pasta',emoji:'🧀', bg:'#fff5d0', price:null, desc:'Extra double cheese pasta.', badge:'Popular' },

  { cat:'food', sub:'Momos', name:'Veg Steamed Momos',emoji:'🥟', bg:'#f5f5f5', price:null, desc:'Classic steamed veg momos.' },
  { cat:'food', sub:'Momos', name:'Veg Fried Momos',  emoji:'🥟', bg:'#fff8e0', price:null, desc:'Crispy fried veg momos.' },
  { cat:'food', sub:'Momos', name:'Tandoori Momos',   emoji:'🔥', bg:'#ffe8d0', price:null, desc:'Smoky tandoori spiced momos.', badge:'Hot' },
  { cat:'food', sub:'Momos', name:'Schezwan Momos',   emoji:'🌶️', bg:'#ffe0e0', price:null, desc:'Schezwan sauce coated momos.' },

  { cat:'food', sub:'Rolls & Wraps', name:'Spring Roll',       emoji:'🌯', bg:'#f5f0e8', price:null, desc:'Crispy spring roll.' },
  { cat:'food', sub:'Rolls & Wraps', name:'Veg Roll',           emoji:'🌯', bg:'#e8f5e8', price:null, desc:'Veggie filled roll.' },
  { cat:'food', sub:'Rolls & Wraps', name:'Corn Roll',          emoji:'🌽', bg:'#fffff0', price:null, desc:'Sweet corn roll.' },
  { cat:'food', sub:'Rolls & Wraps', name:'Paneer Roll',        emoji:'🧀', bg:'#fff5d0', price:null, desc:'Paneer stuffed roll.' },
  { cat:'food', sub:'Rolls & Wraps', name:'Grill Paneer Roll',  emoji:'🔥', bg:'#fff0e8', price:null, desc:'Grilled paneer roll.' },
  { cat:'food', sub:'Rolls & Wraps', name:'Masala Paneer Roll', emoji:'🌶️', bg:'#ffe8e8', price:null, desc:'Spiced masala paneer roll.' },
  { cat:'food', sub:'Rolls & Wraps', name:'Veg Paneer Roll',    emoji:'🧀', bg:'#fff8e0', price:null, desc:'Veggie and paneer combined roll.' },

  { cat:'food', sub:'Garlic Bread', name:'Garlic Bread',        emoji:'🧄', bg:'#f5f0d8', price:null, desc:'Classic buttery garlic bread.' },
  { cat:'food', sub:'Garlic Bread', name:'Cheese Garlic Bread', emoji:'🧀', bg:'#fff5d0', price:null, desc:'Garlic bread with melted cheese.', badge:'Popular' },
  { cat:'food', sub:'Garlic Bread', name:'Masala Garlic Bread', emoji:'🌶️', bg:'#ffe8d0', price:null, desc:'Spicy masala garlic bread.' },

  { cat:'food', sub:'Salads', name:'Pasta Salad',   emoji:'🥗', bg:'#e8f5e8', price:null, desc:'Fresh pasta salad bowl.' },
  { cat:'food', sub:'Salads', name:'Cheese Waldorf',emoji:'🧀', bg:'#fff5d0', price:null, desc:'Cheesy Waldorf style salad.' },
  { cat:'food', sub:'Salads', name:'Mexican Salad', emoji:'🥑', bg:'#e8ffe8', price:null, desc:'Spiced Mexican salad bowl.' },
  { cat:'food', sub:'Salads', name:'Paneer Salad',  emoji:'🥗', bg:'#f5f5e8', price:null, desc:'Fresh paneer salad.' },
];

// ── CONSTANTS ──────────────────────────────────────────────────
const CATS       = ['sodas', 'coffee', 'food'];
const CAT_LABELS = { sodas:'🥤 Sodas & Floats', coffee:'☕ Coffee & Shakes', food:'🍔 Fast Food' };

// ── STATE ──────────────────────────────────────────────────────
let activeCat = 'sodas';
let activeSub = 'all';
let cart      = [];

// ── HELPERS ────────────────────────────────────────────────────
function getSubs(cat) {
  const seen = [];
  MENU.filter(i => i.cat === cat).forEach(i => {
    if (!seen.includes(i.sub)) seen.push(i.sub);
  });
  return seen;
}

// ── RENDER CATEGORY TABS ───────────────────────────────────────
function renderCatTabs() {
  document.getElementById('catTabs').innerHTML = CATS.map(c =>
    `<button class="cat-btn${c === activeCat ? ' active' : ''}" onclick="setCat('${c}')">${CAT_LABELS[c]}</button>`
  ).join('');
}

// ── RENDER SUB-CATEGORY TABS ───────────────────────────────────
function renderSubTabs() {
  const subs = getSubs(activeCat);
  document.getElementById('subTabs').innerHTML =
    `<button class="sub-btn${activeSub === 'all' ? ' active' : ''}" onclick="setSub('all')">All</button>` +
    subs.map(s =>
      `<button class="sub-btn${activeSub === s ? ' active' : ''}" onclick="setSub('${s}')">${s}</button>`
    ).join('');
}

// ── SET CATEGORY ───────────────────────────────────────────────
function setCat(c) {
  activeCat = c;
  activeSub = 'all';
  document.getElementById('searchInput').value = '';
  renderCatTabs();
  renderSubTabs();
  renderMenu();
}

// ── SET SUB-CATEGORY ───────────────────────────────────────────
function setSub(s) {
  activeSub = s;
  renderSubTabs();
  renderMenu();
}

// ── RENDER MENU GRID ───────────────────────────────────────────
function renderMenu() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  let items = MENU.filter(i => i.cat === activeCat);
  if (activeSub !== 'all') items = items.filter(i => i.sub === activeSub);
  if (q) items = MENU.filter(i =>
    i.name.toLowerCase().includes(q) || (i.desc && i.desc.toLowerCase().includes(q))
  );

  const grid = document.getElementById('menuGrid');
  if (!items.length) {
    grid.innerHTML = '<div class="no-results">😢 No items found. Try a different search.</div>';
    return;
  }

  grid.innerHTML = items.map((item, idx) => {
    const priceStr    = item.price  ? '₹' + item.price : (item.priceL ? '₹' + item.priceL : 'Ask');
    const priceDetail = item.priceF ? ' · Float ₹' + item.priceF : (item.priceL && item.price ? ' · Lg ₹' + item.priceL : '');
    const badgeClass  = item.badge === 'Hot' ? ' hot' : item.badge === 'new' ? ' new' : '';
    return `
    <div class="menu-card" style="animation-delay:${idx * 0.04}s">
      <div class="menu-card-img" style="background:${item.bg}">
        ${item.emoji}
        ${item.badge ? '<span class="badge' + badgeClass + '">' + item.badge + '</span>' : ''}
      </div>
      <div class="menu-card-body">
        <div class="card-name">${item.name}</div>
        <div class="card-desc">${item.desc}${item.sub ? '<br><em style="color:#bbb;font-size:.7rem">' + item.sub + '</em>' : ''}</div>
        <div class="card-footer">
          <span class="card-price">${priceStr}<span class="card-price-detail">${priceDetail}</span></span>
          <button class="add-btn" onclick="addToCart(${MENU.indexOf(item)}, event)">+</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── CART ───────────────────────────────────────────────────────
function addToCart(idx, e) {
  e.stopPropagation();
  const item     = MENU[idx];
  const existing = cart.find(c => c.idx === idx);
  if (existing) { existing.qty++; }
  else { cart.push({ idx, name: item.name, price: item.price || 0, qty: 1 }); }
  updateCart();

  const btn = e.currentTarget;
  btn.style.transform  = 'scale(1.6) rotate(90deg)';
  btn.style.background = 'var(--teal)';
  setTimeout(() => { btn.style.transform = ''; btn.style.background = ''; }, 320);
}

function updateCart() {
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const count = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartText').textContent  = count === 1 ? 'item in cart' : 'items in cart';
  document.getElementById('cartTotal').textContent = total > 0 ? '₹' + total : '';
  document.getElementById('cartBar').classList.toggle('show', count > 0);
}

// ── MARQUEE ────────────────────────────────────────────────────
function initMarquee() {
  const items = ['Blue Berry Soda','Fruit Punch Float','Mango Falooda','Cold Coffee','Oreo Shake','Chilli Potato','Paneer Pizza','Chowmein','Garlic Bread','Momos','Sweet Corn','Spring Rolls','Butterscotch Soda','Kala Khatta','Chandan Kesar'];
  const doubled = [...items, ...items];
  document.getElementById('mqTrack').innerHTML = doubled.map(t => '<span class="mq-item">' + t + '</span>').join('');
}

// ── BUBBLES ────────────────────────────────────────────────────
function initBubbles() {
  const canvas = document.getElementById('bubbleCanvas');
  const colors = ['#FF6B35','#FFD23F','#1D9E75','#D4537E','#ffffff','#3498db'];
  for (let i = 0; i < 32; i++) {
    const b  = document.createElement('div');
    b.className = 'bubble';
    const sz = Math.random() * 65 + 8;
    b.style.cssText = 'width:' + sz + 'px;height:' + sz + 'px;left:' + (Math.random() * 100) + '%;bottom:' + (Math.random() * -30) + '%;background:' + colors[Math.floor(Math.random() * colors.length)] + ';animation-duration:' + (Math.random() * 14 + 7) + 's;animation-delay:' + (Math.random() * 12) + 's;';
    canvas.appendChild(b);
  }
}

// ── CUSTOM CURSOR ──────────────────────────────────────────────
function initCursor() {
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .menu-card, .feat-card, .rev-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });
}

// ── NAVBAR SCROLL ──────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ── MOBILE NAV ─────────────────────────────────────────────────
function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }
function closeMenu()  { document.getElementById('navLinks').classList.remove('open'); }

// ── SCROLL REVEAL ──────────────────────────────────────────────
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('visible');
      if (en.target.querySelectorAll) {
        en.target.querySelectorAll('.r-fill').forEach(bar => {
          setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 300);
        });
      }
    });
  }, { threshold: 0.18 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── COUNT-UP ANIMATION ─────────────────────────────────────────
function initCountUp() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el      = en.target;
      const target  = parseFloat(el.dataset.count);
      const isFloat = !!el.dataset.float;
      const hasPlus = !!el.dataset.plus;
      const dur     = 1600;
      const start   = performance.now();
      const tick = now => {
        const t    = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        const v    = ease * target;
        el.textContent = isFloat ? v.toFixed(1) : Math.floor(v) + (hasPlus && t >= 1 ? '+' : '');
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

// ── MAP BUTTON ─────────────────────────────────────────────────
function openMap() {
  window.open('https://maps.app.goo.gl/GydrfovgAytqiBBi8', '_blank');
}

// ── BOOT ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMarquee();
  initBubbles();
  initCursor();
  initScrollReveal();
  initCountUp();
  renderCatTabs();
  renderSubTabs();
  renderMenu();
});
