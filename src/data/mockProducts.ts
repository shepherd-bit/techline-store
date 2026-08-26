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
        name: 'Quantum Ultra X1 Pro',
        category: 'Smartphones',
        price: 1299,
        originalPrice: 1399,
        rating: 4.9,
        reviewsCount: 320,
        inStock: true,
        description: 'Flagship titanium smartphone with a 200MP quad-camera system, immersive AMOLED display, and next-gen neural chip.',
        images: ['img/smartphones/x1-main.jpg', 'img/smartphones/x1-angle1.jpg', 'img/smartphones/x1-angle2.jpg', 'img/smartphones/x1-angle3.jpg', 'img/smartphones/x1-angle4.jpg'],
        colors: ['#2C2C2C', '#E3E3E3', '#4A5D4E'],
        isNewArrival: true,
        isFeatured: true
    },
    {
        id: 'phone-2',
        name: 'Apex Horizon Fold 5G',
        category: 'Smartphones',
        price: 1799,
        rating: 4.8,
        reviewsCount: 215,
        inStock: true,
        description: 'Revolutionary foldable glass display with seamless multitasking and desktop-class performance in your pocket.',
        images: ['img/smartphones/fold-main.jpg', 'img/smartphones/fold-angle1.jpg', 'img/smartphones/fold-angle2.jpg', 'img/smartphones/fold-angle3.jpg', 'img/smartphones/fold-angle4.jpg'],
        colors: ['#1A1A1A', '#C5A880'],
        isFeatured: true
    },
    {
        id: 'phone-3',
        name: 'Zenith Nexus 15 Pro Max',
        category: 'Smartphones',
        price: 1199,
        originalPrice: 1299,
        rating: 4.9,
        reviewsCount: 540,
        inStock: true,
        description: 'Engineered for ultimate cinematic video capture and ultra-responsive mobile gaming with advanced vapor-chamber cooling.',
        images: ['img/smartphones/nexus-main.jpg', 'img/smartphones/nexus-angle1.jpg', 'img/smartphones/nexus-angle2.jpg', 'img/smartphones/nexus-angle3.jpg', 'img/smartphones/nexus-angle4.jpg'],
        colors: ['#333333', '#DFE3EB', '#5C5247'],
        isNewArrival: true
    },
    {
        id: 'phone-4',
        name: 'Vanguard Stealth Edition',
        category: 'Smartphones',
        price: 1099,
        rating: 4.7,
        reviewsCount: 180,
        inStock: true,
        description: 'Matte-finish military-grade security smartphone with encrypted enclave storage and unmatched battery stamina.',
        images: ['img/smartphones/stealth-main.jpg', 'img/smartphones/stealth-angle1.jpg', 'img/smartphones/stealth-angle2.jpg', 'img/smartphones/stealth-angle3.jpg', 'img/smartphones/stealth-angle4.jpg'],
        colors: ['#0F0F0F', '#2E3B4E']
    },
    {
        id: 'phone-5',
        name: 'Lumina PureView Ultra',
        category: 'Smartphones',
        price: 999,
        originalPrice: 1099,
        rating: 4.6,
        reviewsCount: 142,
        inStock: true,
        description: 'Pioneering organic LED matrix display paired with professional-grade studio lighting filters built natively into the OS.',
        images: ['img/smartphones/lumina-main.jpg', 'img/smartphones/lumina-angle1.jpg', 'img/smartphones/lumina-angle2.jpg', 'img/smartphones/lumina-angle3.jpg', 'img/smartphones/lumina-angle4.jpg'],
        colors: ['#F5F5F7', '#3A3A3C']
    },
    {
        id: 'phone-6',
        name: 'Pulse Infinity 5G',
        category: 'Smartphones',
        price: 899,
        rating: 4.5,
        reviewsCount: 98,
        inStock: true,
        description: 'Lightning-fast 165Hz refresh rate screen designed for competitive esports gamers on the move.',
        images: ['img/smartphones/pulse-main.jpg', 'img/smartphones/pulse-angle1.jpg', 'img/smartphones/pulse-angle2.jpg', 'img/smartphones/pulse-angle3.jpg', 'img/smartphones/pulse-angle4.jpg'],
        colors: ['#FF2A5F', '#111111']
    },

    // --- COMPUTERS ---
    {
        id: 'comp-1',
        name: 'TitanBook Pro 16" Creator Edition',
        category: 'Computers',
        price: 2499,
        originalPrice: 2799,
        rating: 5.0,
        reviewsCount: 410,
        inStock: true,
        description: 'Uncompromising performance featuring an M-Series Extreme processor, 64GB RAM, and a mini-LED 120Hz color-accurate display.',
        images: ['img/computers/titan-main.jpg', 'img/computers/titan-angle1.jpg', 'img/computers/titan-angle2.jpg', 'img/computers/titan-angle3.jpg', 'img/computers/titan-angle4.jpg'],
        colors: ['#E0E0E0', '#3E3E3E'],
        isFeatured: true
    },
    {
        id: 'comp-2',
        name: 'Aether Apex Studio Desktop',
        category: 'Computers',
        price: 3299,
        rating: 4.9,
        reviewsCount: 195,
        inStock: true,
        description: 'Custom liquid-cooled powerhouse built with top-tier desktop graphics and multi-terabyte NVMe RAID array.',
        images: ['img/computers/desktop-main.jpg', 'img/computers/desktop-angle1.jpg', 'img/computers/desktop-angle2.jpg', 'img/computers/desktop-angle3.jpg', 'img/computers/desktop-angle4.jpg'],
        colors: ['#1C1C1E', '#000000'],
        isNewArrival: true
    },
    {
        id: 'comp-3',
        name: 'CyberForge Stealth Ultrabook',
        category: 'Computers',
        price: 1899,
        originalPrice: 2099,
        rating: 4.8,
        reviewsCount: 275,
        inStock: true,
        description: 'Ultra-slim carbon-fiber chassis with all-day battery life and seamless touch-surface integration.',
        images: ['img/computers/ultrabook-main.jpg', 'img/computers/ultrabook-angle1.jpg', 'img/computers/ultrabook-angle2.jpg', 'img/computers/ultrabook-angle3.jpg', 'img/computers/ultrabook-angle4.jpg'],
        colors: ['#222222', '#Silver'],
        isFeatured: true
    },
    {
        id: 'comp-4',
        name: 'Vortex G-Series Beast Laptop',
        category: 'Computers',
        price: 2799,
        rating: 4.7,
        reviewsCount: 130,
        inStock: true,
        description: 'Desktop-grade mobile graphics engine with mechanical per-key RGB typing deck and high-airflow chassis.',
        images: ['img/computers/vortex-main.jpg', 'img/computers/vortex-angle1.jpg', 'img/computers/vortex-angle2.jpg', 'img/computers/vortex-angle3.jpg', 'img/computers/vortex-angle4.jpg'],
        colors: ['#121212']
    },
    {
        id: 'comp-5',
        name: 'Nexus Dual-Screen Workstation',
        category: 'Computers',
        price: 2999,
        originalPrice: 3199,
        rating: 4.9,
        reviewsCount: 88,
        inStock: true,
        description: 'Dual touch displays built natively into the workspace for elite programmers, traders, and digital artists.',
        images: ['img/computers/nexuspc-main.jpg', 'img/computers/nexuspc-angle1.jpg', 'img/computers/nexuspc-angle2.jpg', 'img/computers/nexuspc-angle3.jpg', 'img/computers/nexuspc-angle4.jpg'],
        colors: ['#2C2C2E']
    },
    {
        id: 'comp-6',
        name: 'Zenith Mini Workstation Cube',
        category: 'Computers',
        price: 1499,
        rating: 4.6,
        reviewsCount: 112,
        inStock: true,
        description: 'Compact form-factor workstation packing enterprise-grade multi-core compute power onto your desktop.',
        images: ['img/computers/cube-main.jpg', 'img/computers/cube-angle1.jpg', 'img/computers/cube-angle2.jpg', 'img/computers/cube-angle3.jpg', 'img/computers/cube-angle4.jpg'],
        colors: ['#333333', '#A0A0A0']
    },

    // --- SMARTWATCHES ---
    {
        id: 'watch-1',
        name: 'Chronos Titanium Explorer Elite',
        category: 'Smartwatches',
        price: 799,
        originalPrice: 899,
        rating: 4.9,
        reviewsCount: 340,
        inStock: true,
        description: 'Aerospace-grade titanium build with dual-frequency GPS, sapphire crystal face, and 100m dive-ready waterproofing.',
        images: ['img/watches/chronos-main.jpg', 'img/watches/chronos-angle1.jpg', 'img/watches/chronos-angle2.jpg', 'img/watches/chronos-angle3.jpg', 'img/watches/chronos-angle4.jpg'],
        colors: ['#8E8E93', '#1C1C1E', '#D4AF37'],
        isFeatured: true,
        isNewArrival: true
    },
    {
        id: 'watch-2',
        name: 'Apex Nomad Tactical Smartwatch',
        category: 'Smartwatches',
        price: 649,
        rating: 4.8,
        reviewsCount: 210,
        inStock: true,
        description: 'Built for extreme outdoor survival with solar charging glass, offline topo maps, and biometric health suite.',
        images: ['img/watches/nomad-main.jpg', 'img/watches/nomad-angle1.jpg', 'img/watches/nomad-angle2.jpg', 'img/watches/nomad-angle3.jpg', 'img/watches/nomad-angle4.jpg'],
        colors: ['#2F4F4F', '#000000']
    },
    {
        id: 'watch-3',
        name: 'Lumina Vogue Ceramic Edition',
        category: 'Smartwatches',
        price: 599,
        originalPrice: 699,
        rating: 4.7,
        reviewsCount: 185,
        inStock: true,
        description: 'Sleek high-tech white ceramic body featuring an always-on AMOLED edge-to-edge curved screen.',
        images: ['img/watches/vogue-main.jpg', 'img/watches/vogue-angle1.jpg', 'img/watches/vogue-angle2.jpg', 'img/watches/vogue-angle3.jpg', 'img/watches/vogue-angle4.jpg'],
        colors: ['#FFFFFF', '#1A1A1A'],
        isFeatured: true
    },
    {
        id: 'watch-4',
        name: 'Vanguard Apex Sport Pro',
        category: 'Smartwatches',
        price: 499,
        rating: 4.6,
        reviewsCount: 155,
        inStock: true,
        description: 'Advanced running and triathlon tracker with real-time stamina metrics and personalized recovery analysis.',
        images: ['img/watches/sport-main.jpg', 'img/watches/sport-angle1.jpg', 'img/watches/sport-angle2.jpg', 'img/watches/sport-angle3.jpg', 'img/watches/sport-angle4.jpg'],
        colors: ['#FF3B30', '#000000', '#007AFF']
    },
    {
        id: 'watch-5',
        name: 'Pulse Executive Classic',
        category: 'Smartwatches',
        price: 699,
        rating: 4.8,
        reviewsCount: 92,
        inStock: true,
        description: 'Combines traditional Swiss luxury watch styling with seamless contactless payments and smart notification sync.',
        images: ['img/watches/classic-main.jpg', 'img/watches/classic-angle1.jpg', 'img/watches/classic-angle2.jpg', 'img/watches/classic-angle3.jpg', 'img/watches/classic-angle4.jpg'],
        colors: ['#DAA520', '#C0C0C0', '#222222']
    },
    {
        id: 'watch-6',
        name: 'Zenith Bio-Metric Health Hub',
        category: 'Smartwatches',
        price: 449,
        originalPrice: 499,
        rating: 4.5,
        reviewsCount: 110,
        inStock: true,
        description: 'Medical-grade continuous ECG, blood-oxygen, blood-pressure tracking, and advanced sleep-stage insights.',
        images: ['img/watches/bio-main.jpg', 'img/watches/bio-angle1.jpg', 'img/watches/bio-angle2.jpg', 'img/watches/bio-angle3.jpg', 'img/watches/bio-angle4.jpg'],
        colors: ['#483D8B', '#2F4F4F']
    },

    // --- CAMERAS ---
    {
        id: 'cam-1',
        name: 'Aether Cinema 8K Full-Frame',
        category: 'Cameras',
        price: 3899,
        originalPrice: 4199,
        rating: 5.0,
        reviewsCount: 160,
        inStock: true,
        description: 'Professional cinema camera body capturing pristine 8K RAW video with 15 stops of dynamic range and active cooling.',
        images: ['img/cameras/cinema-main.jpg', 'img/cameras/cinema-angle1.jpg', 'img/cameras/cinema-angle2.jpg', 'img/cameras/cinema-angle3.jpg', 'img/cameras/cinema-angle4.jpg'],
        colors: ['#111111'],
        isFeatured: true,
        isNewArrival: true
    },
    {
        id: 'cam-2',
        name: 'Quantum Mirrorless Alpha 9R',
        category: 'Cameras',
        price: 3499,
        rating: 4.9,
        reviewsCount: 230,
        inStock: true,
        description: 'Blistering 30fps black-out-free continuous shooting with AI subject recognition autofocus and 61MP resolution.',
        images: ['img/cameras/alpha-main.jpg', 'img/cameras/alpha-angle1.jpg', 'img/cameras/alpha-angle2.jpg', 'img/cameras/alpha-angle3.jpg', 'img/cameras/alpha-angle4.jpg'],
        colors: ['#1C1C1E'],
        isFeatured: true
    },
    {
        id: 'cam-3',
        name: 'Vanguard Vintage Rangefinder',
        category: 'Cameras',
        price: 2799,
        originalPrice: 2999,
        rating: 4.8,
        reviewsCount: 145,
        inStock: true,
        description: 'Exquisite manual control experience housed in a classic brass-accented metal body for pure street photography.',
        images: ['img/cameras/vintage-main.jpg', 'img/cameras/vintage-angle1.jpg', 'img/cameras/vintage-angle2.jpg', 'img/cameras/vintage-angle3.jpg', 'img/cameras/vintage-angle4.jpg'],
        colors: ['#2B2B2B', '#E5E5EA']
    },
    {
        id: 'cam-4',
        name: 'Horizon Pro Action 360',
        category: 'Cameras',
        price: 599,
        rating: 4.7,
        reviewsCount: 310,
        inStock: true,
        description: 'Rugged waterproof action camera recording immersive dual-lens 8K 360-degree footage with horizon lock stabilization.',
        images: ['img/cameras/action-main.jpg', 'img/cameras/action-angle1.jpg', 'img/cameras/action-angle2.jpg', 'img/cameras/action-angle3.jpg', 'img/cameras/action-angle4.jpg'],
        colors: ['#FF9500', '#000000']
    },
    {
        id: 'cam-5',
        name: 'Zenith Studio Medium Format',
        category: 'Cameras',
        price: 5499,
        originalPrice: 5999,
        rating: 5.0,
        reviewsCount: 75,
        inStock: true,
        description: 'Ultra-high-resolution 100MP medium format sensor designed for high-fashion and fine-art commercial photography.',
        images: ['img/cameras/medium-main.jpg', 'img/cameras/medium-angle1.jpg', 'img/cameras/medium-angle2.jpg', 'img/cameras/medium-angle3.jpg', 'img/cameras/medium-angle4.jpg'],
        colors: ['#222222']
    },
    {
        id: 'cam-6',
        name: 'Pulse Creator Hybrid Vlog Cam',
        category: 'Cameras',
        price: 1299,
        rating: 4.6,
        reviewsCount: 190,
        inStock: true,
        description: 'Designed specifically for content creators with directional capsule mics, flip-out touchscreen, and effortless streaming mode.',
        images: ['img/cameras/vlog-main.jpg', 'img/cameras/vlog-angle1.jpg', 'img/cameras/vlog-angle2.jpg', 'img/cameras/vlog-angle3.jpg', 'img/cameras/vlog-angle4.jpg'],
        colors: ['#3A3A3C', '#FFFFFF'],
        isNewArrival: true
    },

    // --- HEADPHONES ---
    {
        id: 'head-1',
        name: 'Acoustic Master Studio Pro Wireless',
        category: 'Headphones',
        price: 549,
        originalPrice: 599,
        rating: 4.9,
        reviewsCount: 480,
        inStock: true,
        description: 'Planar magnetic drivers delivering pristine reference-grade audio with adaptive hybrid active noise cancellation.',
        images: ['img/headphones/master-main.jpg', 'img/headphones/master-angle1.jpg', 'img/headphones/master-angle2.jpg', 'img/headphones/master-angle3.jpg', 'img/headphones/master-angle4.jpg'],
        colors: ['#1B1B1B', '#8B4513', '#C0C0C0'],
        isFeatured: true,
        isNewArrival: true
    },
    {
        id: 'head-2',
        name: 'Apex Sonic X Over-Ear ANC',
        category: 'Headphones',
        price: 399,
        rating: 4.8,
        reviewsCount: 360,
        inStock: true,
        description: 'Plush lambskin memory foam earcups combined with spatial audio tracking and 40-hour continuous playback.',
        images: ['img/headphones/sonic-main.jpg', 'img/headphones/sonic-angle1.jpg', 'img/headphones/sonic-angle2.jpg', 'img/headphones/sonic-angle3.jpg', 'img/headphones/sonic-angle4.jpg'],
        colors: ['#000000', '#F2F2F7', '#2C3E50'],
        isFeatured: true
    },
    {
        id: 'head-3',
        name: 'Pulse CyberBeast RGB Wireless',
        category: 'Headphones',
        price: 299,
        originalPrice: 349,
        rating: 4.7,
        reviewsCount: 290,
        inStock: true,
        description: 'Zero-latency dual-wireless gaming headset with custom-tuned 50mm drivers and broadcast-grade detachable boom mic.',
        images: ['img/headphones/cyber-main.jpg', 'img/headphones/cyber-angle1.jpg', 'img/headphones/cyber-angle2.jpg', 'img/headphones/cyber-angle3.jpg', 'img/headphones/cyber-angle4.jpg'],
        colors: ['#0F0F0F', '#FF0055']
    },
    {
        id: 'head-4',
        name: 'Zenith PureSound Open-Ear',
        category: 'Headphones',
        price: 349,
        rating: 4.6,
        reviewsCount: 140,
        inStock: true,
        description: 'Innovative bone-conduction and air-conduction open acoustic design for maximum situational awareness during workouts.',
        images: ['img/headphones/open-main.jpg', 'img/headphones/open-angle1.jpg', 'img/headphones/open-angle2.jpg', 'img/headphones/open-angle3.jpg', 'img/headphones/open-angle4.jpg'],
        colors: ['#2C2C2E', '#34C759']
    },
    {
        id: 'head-5',
        name: 'Lumina TrueBuds Pro ANC',
        category: 'Headphones',
        price: 279,
        originalPrice: 319,
        rating: 4.8,
        reviewsCount: 510,
        inStock: true,
        description: 'Ultra-compact earbuds featuring high-resolution wireless audio codecs, custom ear-fit test, and wireless charging case.',
        images: ['img/headphones/buds-main.jpg', 'img/headphones/buds-angle1.jpg', 'img/headphones/buds-angle2.jpg', 'img/headphones/buds-angle3.jpg', 'img/headphones/buds-angle4.jpg'],
        colors: ['#FFFFFF', '#000000', '#8E8E93']
    },
    {
        id: 'head-6',
        name: 'Vanguard Audiophile Reference',
        category: 'Headphones',
        price: 799,
        rating: 4.9,
        reviewsCount: 95,
        inStock: true,
        description: 'Open-back audiophile headphones hand-assembled for an exceptionally wide soundstage and natural acoustic replication.',
        images: ['img/headphones/ref-main.jpg', 'img/headphones/ref-angle1.jpg', 'img/headphones/ref-angle2.jpg', 'img/headphones/ref-angle3.jpg', 'img/headphones/ref-angle4.jpg'],
        colors: ['#4A3B32', '#111111']
    },

    // --- GAMING ---
    {
        id: 'game-1',
        name: 'Havic HV G-92 Elite Gamepad',
        category: 'Gaming',
        price: 192,
        originalPrice: 220,
        rating: 4.8,
        reviewsCount: 150,
        inStock: true,
        description: 'PlayStation 5 and PC compatible controller with high-quality vinyl skin, textured grips, and adjustable trigger stops.',
        images: ['img/gaming/g92-main.jpg', 'img/gaming/g92-angle1.jpg', 'img/gaming/g92-angle2.jpg', 'img/gaming/g92-angle3.jpg', 'img/gaming/g92-angle4.jpg'],
        colors: ['#3A6EA5', '#111111', '#FFFFFF'],
        isFeatured: true,
        isNewArrival: true
    },
    {
        id: 'game-2',
        name: 'CyberMech Pro Mechanical Keyboard',
        category: 'Gaming',
        price: 249,
        originalPrice: 299,
        rating: 4.9,
        reviewsCount: 420,
        inStock: true,
        description: 'Hot-swappable custom mechanical keyboard with per-key RGB lighting, gasket mount, and aircraft-grade aluminum frame.',
        images: ['img/gaming/keyboard-main.jpg', 'img/gaming/keyboard-angle1.jpg', 'img/gaming/keyboard-angle2.jpg', 'img/gaming/keyboard-angle3.jpg', 'img/gaming/keyboard-angle4.jpg'],
        colors: ['#1A1A1A', '#Silver'],
        isFeatured: true
    },
    {
        id: 'game-3',
        name: 'Apex Predator Curved Gaming Monitor',
        category: 'Gaming',
        price: 799,
        originalPrice: 899,
        rating: 4.8,
        reviewsCount: 230,
        inStock: true,
        description: '34-inch ultra-wide 240Hz 1ms curved IPS display with G-Sync technology for fluid, tearing-free competitive battles.',
        images: ['img/gaming/monitor-main.jpg', 'img/gaming/monitor-angle1.jpg', 'img/gaming/monitor-angle2.jpg', 'img/gaming/monitor-angle3.jpg', 'img/gaming/monitor-angle4.jpg'],
        colors: ['#0F0F0F', '#FF3B30']
    },
    {
        id: 'game-4',
        name: 'Vortex Direct-Drive Racing Wheel',
        category: 'Gaming',
        price: 1099,
        rating: 5.0,
        reviewsCount: 115,
        inStock: true,
        description: 'Professional-grade force feedback direct drive steering wheel and magnetic paddle shifters for ultimate sim-racing realism.',
        images: ['img/gaming/wheel-main.jpg', 'img/gaming/wheel-angle1.jpg', 'img/gaming/wheel-angle2.jpg', 'img/gaming/wheel-angle3.jpg', 'img/gaming/wheel-angle4.jpg'],
        colors: ['#000000', '#FFCC00']
    },
    {
        id: 'game-5',
        name: 'Zenith Ergonomic Gaming Throne',
        category: 'Gaming',
        price: 499,
        originalPrice: 569,
        rating: 4.7,
        reviewsCount: 310,
        inStock: true,
        description: 'Premium breathable fabric gaming chair engineered with 4D adjustable armrests and adaptive lumbar support.',
        images: ['img/gaming/chair-main.jpg', 'img/gaming/chair-angle1.jpg', 'img/gaming/chair-angle2.jpg', 'img/gaming/chair-angle3.jpg', 'img/gaming/chair-angle4.jpg'],
        colors: ['#333333', '#007AFF', '#FF2A5F']
    },
    {
        id: 'game-6',
        name: 'Pulse Ultra-Lightweight Wireless Mouse',
        category: 'Gaming',
        price: 159,
        rating: 4.9,
        reviewsCount: 280,
        inStock: true,
        description: 'Sub-50g competitive esports mouse featuring optical switches, 8K polling rate dongle, and flawless tracking sensor.',
        images: ['img/gaming/mouse-main.jpg', 'img/gaming/mouse-angle1.jpg', 'img/gaming/mouse-angle2.jpg', 'img/gaming/mouse-angle3.jpg', 'img/gaming/mouse-angle4.jpg'],
        colors: ['#1C1C1E', '#FFFFFF'],
        isNewArrival: true
    }
];