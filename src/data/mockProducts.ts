export interface Product {
    id: string;
    name: string;
    category: 'Smartphones' | 'Computers' | 'Smartwatches' | 'Cameras' | 'Headphones' | 'Gaming';
    price: number;
    originalPrice?: number;
    rating: number;
    reviewsCount: number;
    inStock: boolean;
    description: string;
    images: string[];
    colors?: string[];
    isNewArrival?: boolean;
    isFeatured?: boolean;
}

export const mockProducts: Product[] = [
    // --- SMARTPHONES ---
    {
        id: 'phone-1',
        name: 'Apple iPhone 17 Pro Max',
        category: 'Smartphones',
        price: 1199,
        originalPrice: 1299,
        rating: 4.9,
        reviewsCount: 420,
        inStock: true,
        description: 'The ultimate iPhone featuring a lightweight titanium design, massive leap in battery life, advanced A-series pro chip, and professional 48MP triple-lens camera system.',
        images: ['src/assets/smartphones/iphone17-main.jpg', 'src/assets/smartphones/iphone17-angle1.jpg', 'src/assets/smartphones/iphone17-angle2.jpg', 'src/assets/smartphones/iphone17-angle3.jpg', 'src/assets/smartphones/iphone17-angle4.jpg'],
        colors: ['#2C2C2C', '#E3E3E3', '#4A5D4E', '#1C1C1E'],
        isNewArrival: true,
        isFeatured: true
    },
    {
        id: 'phone-2',
        name: 'Samsung Galaxy S26 Ultra 5G',
        category: 'Smartphones',
        price: 1299,
        originalPrice: 1399,
        rating: 4.8,
        reviewsCount: 310,
        inStock: true,
        description: 'Integrated S-Pen powerhouse with an ultra-bright dynamic AMOLED display, AI-driven photography suite, and robust titanium frame.',
        images: ['src/assets/smartphones/s26-main.jpg', 'src/assets/smartphones/s26-angle1.jpg', 'src/assets/smartphones/s26-angle2.jpg', 'src/assets/smartphones/s26-angle3.jpg', 'src/assets/smartphones/s26-angle4.jpg'],
        colors: ['#1A1A1A', '#C5A880', '#2E3B4E'],
        isFeatured: true
    },
    {
        id: 'phone-3',
        name: 'Google Pixel 10 Pro',
        category: 'Smartphones',
        price: 999,
        originalPrice: 1099,
        rating: 4.7,
        reviewsCount: 245,
        inStock: true,
        description: 'Powered by Google Tensor processing for seamless generative AI experiences, real-time translation, and award-winning computational photography.',
        images: ['src/assets/smartphones/pixel10-main.jpg', 'src/assets/smartphones/pixel10-angle1.jpg', 'src/assets/smartphones/pixel10-angle2.jpg', 'src/assets/smartphones/pixel10-angle3.jpg', 'src/assets/smartphones/pixel10-angle4.jpg'],
        colors: ['#333333', '#DFE3EB', '#D4AF37'],
        isNewArrival: true
    },
    {
        id: 'phone-4',
        name: 'OnePlus 14 Pro',
        category: 'Smartphones',
        price: 899,
        rating: 4.6,
        reviewsCount: 180,
        inStock: true,
        description: 'Blazing-fast performance with hyper-charge capability, Fluid AMOLED display, and Hasselblad camera color calibration.',
        images: ['src/assets/smartphones/oneplus14-main.jpg', 'src/assets/smartphones/oneplus14-angle1.jpg', 'src/assets/smartphones/oneplus14-angle2.jpg', 'src/assets/smartphones/oneplus14-angle3.jpg', 'src/assets/smartphones/oneplus14-angle4.jpg'],
        colors: ['#0F0F0F', '#3A6EA5']
    },
    {
        id: 'phone-5',
        name: 'Xiaomi 14 Ultra',
        category: 'Smartphones',
        price: 949,
        originalPrice: 1049,
        rating: 4.6,
        reviewsCount: 135,
        inStock: true,
        description: 'Professional optical lens architecture co-engineered with Leica, delivering stunning depth and true-to-life color reproduction.',
        images: ['src/assets/smartphones/xiaomi-main.jpg', 'src/assets/smartphones/xiaomi-angle1.jpg', 'src/assets/smartphones/xiaomi-angle2.jpg', 'src/assets/smartphones/xiaomi-angle3.jpg', 'src/assets/smartphones/xiaomi-angle4.jpg'],
        colors: ['#F5F5F7', '#111111']
    },
    {
        id: 'phone-6',
        name: 'Sony Xperia 1 VII',
        category: 'Smartphones',
        price: 1199,
        rating: 4.5,
        reviewsCount: 95,
        inStock: true,
        description: 'Built for creators with a 4K 120Hz HDR OLED cinematic display, professional Alpha camera controls, and optical zoom lens.',
        images: ['src/assets/smartphones/xperia-main.jpg', 'src/assets/smartphones/xperia-angle1.png', 'src/assets/smartphones/xperia-angle2.PNG', 'src/assets/smartphones/xperia-angle3.jpg', 'src/assets/smartphones/xperia-angle4.jpg'],
        colors: ['#222222', '#3A3A3C']
    },

    // --- COMPUTERS ---
    {
        id: 'comp-1',
        name: 'Apple MacBook Pro 16" (M3 Max)',
        category: 'Computers',
        price: 2499,
        originalPrice: 2799,
        rating: 5.0,
        reviewsCount: 380,
        inStock: true,
        description: 'Uncompromising pro laptop performance powered by the M3 Max chip, 36GB unified memory, and a stunning Liquid Retina XDR display.',
        images: ['src/assets/computers/mbp16-main.jpg', 'src/assets/computers/mbp16-angle1.jpg', 'src/assets/computers/mbp16-angle2.jpg', 'src/assets/computers/mbp16-angle3.jpg', 'src/assets/computers/mbp16-angle4.jpg'],
        colors: ['#E0E0E0', '#2C2C2E'],
        isFeatured: true
    },
    {
        id: 'comp-2',
        name: 'Dell XPS 16 OLED',
        category: 'Computers',
        price: 2199,
        rating: 4.8,
        reviewsCount: 210,
        inStock: true,
        description: 'Futuristic seamless glass touchpad layout paired with high-performance Intel Core Ultra processors and NVIDIA graphics.',
        images: ['src/assets/computers/xps16-main.jpg', 'src/assets/computers/xps16-angle1.jpg', 'src/assets/computers/xps16-angle2.jpg', 'src/assets/computers/xps16-angle3.jpg', 'src/assets/computers/xps16-angle4.jpg'],
        colors: ['#Silver', '#1C1C1E'],
        isNewArrival: true
    },
    {
        id: 'comp-3',
        name: 'ASUS ROG Zephyrus G16',
        category: 'Computers',
        price: 2299,
        originalPrice: 2499,
        rating: 4.9,
        reviewsCount: 290,
        inStock: true,
        description: 'Ultra-slim gaming laptop featuring an OLED Nebula Display, custom cooling thermal paste, and robust esports graphics architecture.',
        images: ['src/assets/computers/g16-main.jpg', 'src/assets/computers/g16-angle1.jpg', 'src/assets/computers/g16-angle2.PNG', 'src/assets/computers/g16-angle3.PNG', 'src/assets/computers/g16-angle4.PNG'],
        colors: ['#121212', '#E5E5EA'],
        isFeatured: true
    },
    {
        id: 'comp-4',
        name: 'Microsoft Surface Laptop 7th Edition',
        category: 'Computers',
        price: 1499,
        rating: 4.7,
        reviewsCount: 160,
        inStock: true,
        description: 'Lightning-fast Copilot+ PC experience with long-lasting battery life, touch screen, and sleek aluminum finish.',
        images: ['src/assets/computers/surface7-main.jpg', 'src/assets/computers/surface7-angle1.jpg', 'src/assets/computers/surface7-angle2.jpg', 'src/assets/computers/surface7-angle3.jpg', 'src/assets/computers/surface7-angle4.jpg'],
        colors: ['#A0A0A0', '#222222', '#C5A880']
    },
    {
        id: 'comp-5',
        name: 'Lenovo ThinkPad X1 Carbon Gen 12',
        category: 'Computers',
        price: 1799,
        originalPrice: 1999,
        rating: 4.8,
        reviewsCount: 175,
        inStock: true,
        description: 'Legendary business reliability packed into an ultralight carbon fiber chassis with world-class keyboard tactile feedback.',
        images: ['src/assets/computers/thinkpad-main.jpg', 'src/assets/computers/thinkpad-angle1.jpg', 'src/assets/computers/thinkpad-angle2.jpg', 'src/assets/computers/thinkpad-angle3.jpg', 'src/assets/computers/thinkpad-angle4.jpg'],
        colors: ['#0F0F0F']
    },
    {
        id: 'comp-6',
        name: 'Razer Blade 15 Advanced',
        category: 'Computers',
        price: 2599,
        rating: 4.6,
        reviewsCount: 110,
        inStock: true,
        description: 'CNC aluminum unibody chassis packing high refresh rate panel options and per-key RGB customizable lighting.',
        images: ['src/assets/computers/razer15-main.jpg', 'src/assets/computers/razer15-angle1.jpg', 'src/assets/computers/razer15-angle2.jpg', 'src/assets/computers/razer15-angle3.jpg', 'src/assets/computers/razer15-angle4.jpg'],
        colors: ['#1A1A1A']
    },

    // --- SMARTWATCHES ---
    {
        id: 'watch-1',
        name: 'Apple Watch Ultra 2',
        category: 'Smartwatches',
        price: 799,
        originalPrice: 849,
        rating: 4.9,
        reviewsCount: 450,
        inStock: true,
        description: 'Rugged aerospace-grade titanium case, precision dual-frequency GPS, brightest Apple display ever, and up to 36 hours of battery.',
        images: ['src/assets/smartwatches/ultra2-main.jpg', 'src/assets/smartwatches/ultra2-angle1.jpg', 'src/assets/smartwatches/ultra2-angle2.jpg', 'src/assets/smartwatches/ultra2-angle3.jpg', 'src/assets/smartwatches/ultra2-angle4.jpg'],
        colors: ['#8E8E93', '#FF453A', '#007AFF'],
        isFeatured: true,
        isNewArrival: true
    },
    {
        id: 'watch-2',
        name: 'Samsung Galaxy Watch 6 Classic',
        category: 'Smartwatches',
        price: 399,
        rating: 4.7,
        reviewsCount: 220,
        inStock: true,
        description: 'Timeless physical rotating bezel design with advanced sleep coaching, body composition analysis, and ECG tracking.',
        images: ['src/assets/smartwatches/gw6-main.jpg', 'src/assets/smartwatches/gw6-angle1.jpg', 'src/assets/smartwatches/gw6-angle2.jpg', 'src/assets/smartwatches/gw6-angle3.jpg', 'src/assets/smartwatches/gw6-angle4.jpg'],
        colors: ['#1C1C1E', '#Silver']
    },
    {
        id: 'watch-3',
        name: 'Garmin Fenix 8 Solar',
        category: 'Smartwatches',
        price: 999,
        originalPrice: 1099,
        rating: 4.9,
        reviewsCount: 180,
        inStock: true,
        description: 'Ultimate multisport GPS smartwatch with solar charging lens, built-in LED flashlight, and rugged titanium bezel construction.',
        images: ['src/assets/smartwatches/gw6-main.jpg', 'src/assets/smartwatches/fenix8-angle1.jpg', 'src/assets/smartwatches/fenix8-angle2.jpg', 'src/assets/smartwatches/fenix8-angle3.jpg', 'src/assets/smartwatches/fenix8-angle4.jpg'],
        colors: ['#2F4F4F', '#000000'],
        isFeatured: true
    },
    {
        id: 'watch-4',
        name: 'Google Pixel Watch 3',
        category: 'Smartwatches',
        price: 349,
        rating: 4.6,
        reviewsCount: 140,
        inStock: true,
        description: 'Sleek domed crystal display integrated deeply with Fitbit health sensors, readiness scores, and morning briefings.',
        images: ['src/assets/smartwatches/pwatch3-main.jpg', 'src/assets/smartwatches/pwatch3-angle1.jpg', 'src/assets/smartwatches/pwatch3-angle2.jpg', 'src/assets/smartwatches/pwatch3-angle3.jpg', 'src/assets/smartwatches/pwatch3-angle4.jpg'],
        colors: ['#マットBlack', '#PolishedSilver', '#ChampagneGold']
    },
    {
        id: 'watch-5',
        name: 'Amazfit T-Rex 3',
        category: 'Smartwatches',
        price: 279,
        originalPrice: 299,
        rating: 4.5,
        reviewsCount: 115,
        inStock: true,
        description: 'Military-grade toughness built for expedition hikers with offline map downloads and multi-week battery life.',
        images: ['src/assets/smartwatches/trex3-main.jpg', 'src/assets/smartwatches/trex3-angle1.jpg', 'src/assets/smartwatches/trex3-angle2.jpg', 'src/assets/smartwatches/trex3-angle3.jpg', 'src/assets/smartwatches/trex3-angle4.jpg'],
        colors: ['#2B2B2B', '#556B2F']
    },
    {
        id: 'watch-6',
        name: 'Withings ScanWatch 2',
        category: 'Smartwatches',
        price: 349,
        rating: 4.7,
        reviewsCount: 95,
        inStock: true,
        description: 'Hybrid smartwatch combining traditional analog watch hands with medical-grade continuous temperature and heart monitoring.',
        images: ['src/assets/smartwatches/scanwatch-main.jpg', 'src/assets/smartwatches/scanwatch-angle1.jpg', 'src/assets/smartwatches/scanwatch-angle2.jpg', 'src/assets/smartwatches/scanwatch-angle3.jpg', 'src/assets/smartwatches/scanwatch-angle4.jpg'],
        colors: ['#FFFFFF', '#1A1A1A']
    },

    // --- CAMERAS ---
    {
        id: 'cam-1',
        name: 'Sony Alpha 1 II',
        category: 'Cameras',
        price: 6499,
        originalPrice: 6999,
        rating: 5.0,
        reviewsCount: 140,
        inStock: true,
        description: 'Flagship full-frame mirrorless camera delivering 50.1 megapixels, 30fps blackout-free shooting, and advanced AI subject tracking.',
        images: ['src/assets/cameras/a1ii-main.jpg', 'src/assets/cameras/a1ii-angle1.jpg', 'src/assets/cameras/a1ii-angle2.jpg', 'src/assets/cameras/a1ii-angle3.jpg', 'src/assets/cameras/a1ii-angle4.jpg'],
        colors: ['#111111'],
        isFeatured: true,
        isNewArrival: true
    },
    {
        id: 'cam-2',
        name: 'Canon EOS R5 Mark II',
        category: 'Cameras',
        price: 3899,
        rating: 4.9,
        reviewsCount: 210,
        inStock: true,
        description: 'Revolutionary hybrid full-frame mirrorless camera with cross-type autofocus, 8K 60p RAW video recording, and robust build.',
        images: ['src/assets/cameras/r5mk2-main.jpg', 'src/assets/cameras/r5mk2-angle1.jpg', 'src/assets/cameras/r5mk2-angle2.jpg', 'src/assets/cameras/r5mk2-angle3.jpg', 'src/assets/cameras/r5mk2-angle4.jpg'],
        colors: ['#1C1C1E'],
        isFeatured: true
    },
    {
        id: 'cam-3',
        name: 'Fujifilm X-T5',
        category: 'Cameras',
        price: 1699,
        originalPrice: 1799,
        rating: 4.8,
        reviewsCount: 290,
        inStock: true,
        description: 'Classic analog dial experience packed with a 40MP APS-C sensor, in-body image stabilization, and legendary film simulations.',
        images: ['src/assets/cameras/xt5-main.jpg', 'src/assets/cameras/xt5-angle1.jpg', 'src/assets/cameras/xt5-angle2.jpg', 'src/assets/cameras/xt5-angle3.jpg', 'src/assets/cameras/xt5-angle4.jpg'],
        colors: ['#2B2B2B', '#Silver']
    },
    {
        id: 'cam-4',
        name: 'GoPro Hero 13 Black',
        category: 'Cameras',
        price: 399,
        rating: 4.7,
        reviewsCount: 380,
        inStock: true,
        description: 'Ultimate rugged action camera with lens-mod recognition, HDR 4K video, and hyper-smooth 6.0 stabilization.',
        images: ['src/assets/cameras/gopro13-main.jpg', 'src/assets/cameras/gopro13-angle1.jpg', 'src/assets/cameras/gopro13-angle2.jpg', 'src/assets/cameras/gopro13-angle3.jpg', 'src/assets/cameras/gopro13-angle4.jpg'],
        colors: ['#000000', '#FF9500']
    },
    {
        id: 'cam-5',
        name: 'DJI Osmo Pocket 3',
        category: 'Cameras',
        price: 519,
        originalPrice: 569,
        rating: 4.9,
        reviewsCount: 310,
        inStock: true,
        description: 'Large 1-inch CMOS sensor pocket gimbal with rotatable touchscreen and lightning-fast active tracking for vloggers.',
        images: ['src/assets/cameras/pocket3-main.jpg', 'src/assets/cameras/pocket3-angle1.jpg', 'src/assets/cameras/pocket3-angle2.jpg', 'src/assets/cameras/pocket3-angle3.jpg', 'src/assets/cameras/pocket3-angle4.jpg'],
        colors: ['#1A1A1A'],
        isNewArrival: true
    },
    {
        id: 'cam-6',
        name: 'Nikon Z8',
        category: 'Cameras',
        price: 3499,
        originalPrice: 3999,
        rating: 4.8,
        reviewsCount: 165,
        inStock: true,
        description: 'Professional powerhouse in a compact body, providing uncompromising 8K video capabilities and stellar autofocus.',
        images: ['src/assets/cameras/z8-main.jpg', 'src/assets/cameras/z8-angle1.jpg', 'src/assets/cameras/z8-angle2.jpg', 'src/assets/cameras/z8-angle3.jpg', 'src/assets/cameras/z8-angle4.jpg'],
        colors: ['#222222']
    },

    // --- HEADPHONES ---
    {
        id: 'head-1',
        name: 'Apple AirPods Max',
        category: 'Headphones',
        price: 549,
        originalPrice: 599,
        rating: 4.8,
        reviewsCount: 520,
        inStock: true,
        description: 'High-fidelity audio with industry-leading Active Noise Cancellation, spatial audio tracking, and custom acoustic knit mesh canopy.',
        images: ['src/assets/headphones/airpodsmax-main.jpg', 'src/assets/headphones/airpodsmax-angle1.jpg', 'src/assets/headphones/airpodsmax-angle2.jpg', 'src/assets/headphones/airpodsmax-angle3.jpg', 'src/assets/headphones/airpodsmax-angle4.jpg'],
        colors: ['#SpaceGray', '#Silver', '#SkyBlue', '#Pink', '#Green'],
        isFeatured: true,
        isNewArrival: true
    },
    {
        id: 'head-2',
        name: 'Sony WH-1000XM5',
        category: 'Headphones',
        price: 399,
        originalPrice: 449,
        rating: 4.9,
        reviewsCount: 640,
        inStock: true,
        description: 'Magnificent noise-canceling headphones featuring two processors, 8 microphones, and ultra-comfortable lightweight fit.',
        images: ['src/assets/headphones/xm5-main.jpg', 'src/assets/headphones/xm5-angle1.jpg', 'src/assets/headphones/xm5-angle2.jpg', 'src/assets/headphones/xm5-angle3.jpg', 'src/assets/headphones/xm5-angle4.jpg'],
        colors: ['#000000', '#Silver', '#MidnightBlue'],
        isFeatured: true
    },
    {
        id: 'head-3',
        name: 'Bose QuietComfort Ultra',
        category: 'Headphones',
        price: 429,
        rating: 4.7,
        reviewsCount: 310,
        inStock: true,
        description: 'Immersive spatial audio combined with world-class noise cancellation and custom-tuned ear cushions.',
        images: ['src/assets/headphones/boseqc-main.jpg', 'src/assets/headphones/boseqc-angle1.jpg', 'src/assets/headphones/boseqc-angle2.jpg', 'src/assets/headphones/boseqc-angle3.jpg', 'src/assets/headphones/boseqc-angle4.jpg'],
        colors: ['#Black', '#WhiteSmoke', '#Sandstone']
    },
    {
        id: 'head-4',
        name: 'Sennheiser Momentum 4 Wireless',
        category: 'Headphones',
        price: 349,
        originalPrice: 399,
        rating: 4.6,
        reviewsCount: 220,
        inStock: true,
        description: 'Exceptional audiophile sound signature with 60-hour battery life and adaptive noise cancellation.',
        images: ['src/assets/headphones/m4-main.jpg', 'src/assets/headphones/m4-angle1.jpg', 'src/assets/headphones/m4-angle2.jpg', 'src/assets/headphones/m4-angle3.jpg', 'src/assets/headphones/m4-angle4.jpg'],
        colors: ['#Black', '#White']
    },
    {
        id: 'head-5',
        name: 'Sony WF-1000XM5 Earbuds',
        category: 'Headphones',
        price: 299,
        originalPrice: 329,
        rating: 4.8,
        reviewsCount: 410,
        inStock: true,
        description: 'Compact wireless earbuds delivering high-resolution audio performance and exceptional call isolation clarity.',
        images: ['src/assets/headphones/wfxm5-main.jpg', 'src/assets/headphones/wfxm5-angle1.jpg', 'src/assets/headphones/wfxm5-angle2.jpg', 'src/assets/headphones/wfxm5-angle3.jpg', 'src/assets/headphones/wfxm5-angle4.jpg'],
        colors: ['#Black', '#Silver']
    },
    {
        id: 'head-6',
        name: 'Beats Studio Pro',
        category: 'Headphones',
        price: 349,
        rating: 4.5,
        reviewsCount: 180,
        inStock: true,
        description: 'Custom acoustic platform with lossless audio via USB-C, personalized spatial audio, and active noise cancellation.',
        images: ['src/assets/headphones/beatspro-main.jpg', 'src/assets/headphones/beatspro-angle1.jpg', 'src/assets/headphones/beatspro-angle2.jpg', 'src/assets/headphones/beatspro-angle3.jpg', 'src/assets/headphones/beatspro-angle4.jpg'],
        colors: ['#Black', '#DeepBrown', '#Navy', '#Sandstone']
    },

    // --- GAMING ---
    {
        id: 'game-1',
        name: 'Sony PlayStation DualSense Edge',
        category: 'Gaming',
        price: 199,
        rating: 4.9,
        reviewsCount: 340,
        inStock: true,
        description: 'High-performance customizable PS5 controller with swappable stick modules, back buttons, and adjustable triggers.',
        images: ['src/assets/gaming/dualsenseedge-main.jpg', 'src/assets/gaming/dualsenseedge-angle1.jpg', 'src/assets/gaming/dualsenseedge-angle2.jpg', 'src/assets/gaming/dualsenseedge-angle3.jpg', 'src/assets/gaming/dualsenseedge-angle4.jpg'],
        colors: ['#White', '#Black'],
        isFeatured: true,
        isNewArrival: true
    },
    {
        id: 'game-2',
        name: 'Logitech G PRO X Superlight 2',
        category: 'Gaming',
        price: 159,
        originalPrice: 169,
        rating: 4.9,
        reviewsCount: 510,
        inStock: true,
        description: 'Pro esports wireless mouse weighing only 60 grams featuring hybrid optical-mechanical switches and HERO 2 sensor.',
        images: ['src/assets/gaming/superlight2-main.jpg', 'src/assets/gaming/superlight2-angle1.jpg', 'src/assets/gaming/superlight2-angle2.jpg', 'src/assets/gaming/superlight2-angle3.jpg', 'src/assets/gaming/superlight2-angle4.jpg'],
        colors: ['#Black', '#White', '#Magenta'],
        isFeatured: true
    },
    {
        id: 'game-3',
        name: 'Razer Huntsman V3 Pro',
        category: 'Gaming',
        price: 249,
        originalPrice: 279,
        rating: 4.8,
        reviewsCount: 220,
        inStock: true,
        description: 'Optical gaming keyboard featuring adjustable actuation switches, rapid trigger mode, and textured magnetic leatherette wrist rest.',
        images: ['src/assets/gaming/huntsmanv3-main.jpg', 'src/assets/gaming/huntsmanv3-angle1.jpg', 'src/assets/gaming/huntsmanv3-angle2.jpg', 'src/assets/gaming/huntsmanv3-angle3.jpg', 'src/assets/gaming/huntsmanv3-angle4.jpg'],
        colors: ['#Black']
    },
    {
        id: 'game-4',
        name: 'Alienware 34" Curved OLED Gaming Monitor',
        category: 'Gaming',
        price: 899,
        originalPrice: 1099,
        rating: 4.9,
        reviewsCount: 190,
        inStock: true,
        description: 'QD-OLED curved panel offering infinite contrast, 175Hz refresh rate, and lightning-fast 0.1ms response time.',
        images: ['src/assets/gaming/aw34-main.jpg', 'src/assets/gaming/aw34-angle1.jpg', 'src/assets/gaming/aw34-angle2.jpg', 'src/assets/gaming/aw34-angle3.jpg', 'src/assets/gaming/aw34-angle4.jpg'],
        colors: ['#LunarLight', '#DarkSideOfMoon']
    },
    {
        id: 'game-5',
        name: 'SteelSeries Arctis Nova Pro Wireless',
        category: 'Gaming',
        price: 349,
        rating: 4.7,
        reviewsCount: 280,
        inStock: true,
        description: 'Multi-system simultaneous wireless gaming headset with hot-swappable dual battery system and active noise cancellation.',
        images: ['src/assets/gaming/novapro-main.jpg', 'src/assets/gaming/novapro-angle1.jpg', 'src/assets/gaming/novapro-angle2.jpg', 'src/assets/gaming/novapro-angle3.jpg', 'src/assets/gaming/novapro-angle4.jpg'],
        colors: ['#Black', '#White']
    },
    {
        id: 'game-6',
        name: 'Secretlab Titan Evo Gaming Chair',
        category: 'Gaming',
        price: 549,
        originalPrice: 589,
        rating: 4.8,
        reviewsCount: 450,
        inStock: true,
        description: 'Award-winning ergonomic gaming chair with 4-way L-ADAPT lumbar support system and cold-cure foam cushioning.',
        images: ['src/assets/gaming/secretlab-main.jpg', 'src/assets/gaming/secretlab-angle1.jpg', 'src/assets/gaming/secretlab-angle2.jpg', 'src/assets/gaming/secretlab-angle3.jpg', 'src/assets/gaming/secretlab-angle4.jpg'],
        colors: ['#StealthBlack', '#Ash', '#RoyalBlue'],
        isNewArrival: true
    }
];