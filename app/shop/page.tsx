"use client";

import { useState, useMemo } from "react";
import {
    Search,
    ShoppingCart,
    Heart,
    User,
    ChevronDown,
    Filter,
    Plus,
    Minus,
    X,
} from "lucide-react";
import Header from "../components/ui/Header"; // Assuming this path is correct
import Footer from "../components/ui/Footer"; // Assuming this path is correct

export default function CategoryPage() {
    // --- State Definitions ---
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("");
    const [activeCategory, setActiveCategory] = useState("Spices");
    const [sortBy, setSortBy] = useState("Price");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // --- Type Definitions ---
    const lkrToNumber = (price_lkr: string): number => {
        // Extracts the numeric part from a string like "Rs:450"
        const match = price_lkr.match(/(\d+\.?\d*)/);
        return match ? Number(match[0]) : 0;
    };


    // --- Type Definitions ---
    interface PriceTier {
        weight_grams: number;
        price_lkr: string; // Price string for display (e.g., "Rs:100")
    }

    interface Product {
        name: string;
        image: string;
        alt: string;
        details: string; // New field for product description
        pricing: PriceTier[]; // Array of weight/price options
    }

    // --- Mock Data for All Products (Updated with tiered pricing) ---
    const ALL_PRODUCTS_DATA: { [key: string]: Product[] } = {
        Spices: [
            {
                name: "Ceylon Cinnamon Sticks",
                alt: "Ceylon Cinnamon Quills",
                details: "Premium, hand-rolled Cinnamomum verum quills, offering a sweet, delicate flavor superior to Cassia. Ideal for desserts and beverages.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGm2lzjRJeV3oPaQJPX-M7F5KDHSneFluHcKHa5XSUbC6DPzFTPyCUn9LUhB049fIe-tv0em8GxT-nvuPmvjUtWqqmj7Z8kVCDOh5RgbML_5E0JygxzwDwU2vfvkHgNeCcv61UH3nJLgNdNBXBZcg0oPrcGxfv2Sd3-kLvxxbhgyf48aKe8U2Wt5wvxov8dW9aBUPn1z0vskCcw0RTIh6phTBZoX8uhIW_N4iemPOxEg4D837b7DUhlsd_Xbhhh0lWa4kgz2xegME",
                pricing: [
                    { weight_grams: 100, price_lkr: "Rs:450" },
                    { weight_grams: 250, price_lkr: "Rs:1000" },
                    { weight_grams: 500, price_lkr: "Rs:1800" },
                ]
            },
            {
                name: "Organic Turmeric Powder",
                alt: "Vibrant Organic Turmeric Powder",
                details: "Finely ground, high-potency organic turmeric root powder. Known for its rich color and powerful anti-inflammatory properties. Essential for curries.",
                image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg",
                pricing: [
                    { weight_grams: 250, price_lkr: "Rs:200" },
                    { weight_grams: 500, price_lkr: "Rs:380" },
                    { weight_grams: 1000, price_lkr: "Rs:700" },
                ]
            },
            {
                name: "Spicy Dried Chilies",
                alt: "A pile of spicy dried red chilies",
                details: "Sun-dried red chilies with intense heat and depth of flavor. Perfect for preparing traditional Sri Lankan fiery sambols and curries.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpk7g9qzvxVcFkcrS2eeX50i0Y2dAicbddqPckeSeRjxqK19pCaf4Cjnf0EMbxhxj6DoRK_RCVSoBXWYR_uhCEDoqSwtfNb8fYSYrT5VJVbftH7w1nQs7aB_ZWwS0uILgW1_QXKg0s1r7RBMGJR5ypK125_94D_y3fXF0pU-c5TrdWk6Nr1_DJ2Q5zubsxZ7hypWRws27vn74Cc6ddnZOt6jHq1Hcdd0yKo5Kts4ERAlXdbZr4Punif5WwJptt0pNgIHPxCokLwT8",
                pricing: [
                    { weight_grams: 500, price_lkr: "Rs:250" },
                    { weight_grams: 1000, price_lkr: "Rs:450" },
                ]
            },
            {
                name: "Ground Ceylon Cinnamon",
                alt: "A spoonful of ground cinnamon powder",
                details: "Pure, finely ground Ceylon cinnamon powder, ready to sprinkle on oatmeal, coffee, or use in baking. Distinctly sweeter than common Cassia.",
                image: "https://images.pexels.com/photos/4198431/pexels-photo-4198431.jpeg",
                pricing: [
                    { weight_grams: 100, price_lkr: "Rs:180" },
                    { weight_grams: 250, price_lkr: "Rs:400" },
                ]
            },
        ],
        Tea: [
            {
                name: "Premium Black Tea Leaves",
                alt: "Premium Black Tea Leaves",
                details: "Harvested from high-altitude estates, this BOPF-grade black tea offers a robust, bright, and full-bodied cup. Excellent hot or iced.",
                image: "https://images.pexels.com/photos/8329983/pexels-photo-8329983.jpeg",
                pricing: [
                    { weight_grams: 200, price_lkr: "Rs:150" },
                    { weight_grams: 500, price_lkr: "Rs:350" },
                ]
            },
            {
                name: "Ceylon Green Tea",
                alt: "Green Tea Leaves",
                details: "Delicate, unfermented leaves processed to retain antioxidants. A smooth, mellow cup with a refreshing, grassy aroma.",
                image: "https://images.pexels.com/photos/814264/pexels-photo-814264.jpeg",
                pricing: [
                    { weight_grams: 150, price_lkr: "Rs:180" },
                    { weight_grams: 300, price_lkr: "Rs:320" },
                ]
            },
            {
                name: "Earl Grey Bergamot Infusion",
                alt: "Earl Grey Tea",
                details: "Finest black tea blended with natural oil of bergamot. A fragrant and classic afternoon tea experience.",
                image: "https://images.pexels.com/photos/6087517/pexels-photo-6087517.jpeg",
                pricing: [
                    { weight_grams: 100, price_lkr: "Rs:220" },
                    { weight_grams: 250, price_lkr: "Rs:500" },
                ]
            },
        ],
        'Dry Fish': [
            {
                name: "Sun-Dried Sprats (Karawala)",
                alt: "Sun-Dried Sprats",
                details: "Small, salted fish, traditionally sun-dried for intense flavor and shelf stability. A key ingredient in many spicy Sri Lankan dishes.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnNqDNNN9wGFnQJFn-lj5XNIplIeH_kjjYlz7jOTdgfAUGOzfJqzOT2uNJLTDIjsLwFy5PBPjJm90gHA3H6LDagT1b75WsXx0X_tr8XrF8k9xYPf1kog6S66OqXBKSjDO1c5r5Gxxa9jH5rEemYoAfK6nWVlUk0Ifip4Ro1abCa9FC8Lt582JoC4svHexiBGdiam8iSQsHfc7zkPXdX3ijmvfvgZWRDNMlj681RH9GX5VkNrENtqVWPOfRHwllC3LjwTWUtwZZTcI",
                pricing: [
                    { weight_grams: 250, price_lkr: "Rs:300" },
                    { weight_grams: 500, price_lkr: "Rs:550" },
                ]
            },
            {
                name: "Dried Prawns",
                alt: "Dried Prawns",
                details: "Large, flavorful prawns salted and dried. Ideal for adding a strong seafood base to curries, stir-fries, and relishes.",
                image: "https://images.pexels.com/photos/30231916/pexels-photo-30231916.jpeg",
                pricing: [
                    { weight_grams: 100, price_lkr: "Rs:450" },
                    { weight_grams: 250, price_lkr: "Rs:1100" },
                ]
            },
        ],
        Flour: [
            {
                name: "Organic Coconut Flour",
                alt: "Organic Coconut Flour",
                details: "A healthy, high-fiber, gluten-free alternative to wheat flour. Made from dried, defatted coconut meat. Excellent for baking.",
                image: "https://images.pexels.com/photos/4802876/pexels-photo-4802876.jpeg",
                pricing: [
                    { weight_grams: 500, price_lkr: "Rs:350" },
                    { weight_grams: 1000, price_lkr: "Rs:650" },
                ]
            },
            {
                name: "Red Rice Flour",
                alt: "Red Rice Flour",
                details: "Ground from nutrient-rich red rice, perfect for making traditional Sri Lankan breakfast items like pittu, hoppers, and string hoppers.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvg6Gq97kyLk6XczJQnD1aH0yEF-XLAC5aaA&s",
                pricing: [
                    { weight_grams: 500, price_lkr: "Rs:280" },
                    { weight_grams: 1000, price_lkr: "Rs:500" },
                ]
            },
            {
                name: "Kurakkan (Finger Millet) Flour",
                alt: "Kurakkan Flour",
                details: "A staple grain flour known for its high calcium and fiber content. Used to make roti, thosai, and nutritious porridge.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQmrcoCvH7ZTSJ0VrO8-oeLbknbynfL1tCZg&s",
                pricing: [
                    { weight_grams: 500, price_lkr: "Rs:320" },
                    { weight_grams: 1000, price_lkr: "Rs:600" },
                ]
            },
        ],
    };

    // --- Handlers ---
    const handleMoreDetails = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCategorySwitch = (category: string) => {
        setActiveCategory(category);
        setActiveFilter("");
        setSortBy("Price");
    };

    const CATEGORY_NAMES = Object.keys(ALL_PRODUCTS_DATA);
    const displayedProducts = ALL_PRODUCTS_DATA[activeCategory] || [];

    // --- Product Modal ---
    const ProductModal: React.FC<{ product: Product, onClose: () => void }> = ({ product, onClose }) => {
        const [quantity, setQuantity] = useState(1);
        // State to track the selected pricing tier index
        const [selectedTierIndex, setSelectedTierIndex] = useState(0);

        const selectedTier = product.pricing[selectedTierIndex];

        // Calculate total price based on selected tier's LKR price
        const numericUnitLKRPrice = lkrToNumber(selectedTier.price_lkr);

        const totalPriceLKR = useMemo(() => {
            return (numericUnitLKRPrice * quantity).toFixed(2);
        }, [numericUnitLKRPrice, quantity]);

        const handleQuantityChange = (delta: number) => {
            setQuantity(prev => Math.max(1, prev + delta));
        };

        return (
            // INCREASED Z-INDEX to z-[1000] for reliability
           <div className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
                <div
                    // Max-width adjusted for small screens: max-w-xl (576px) on mobile, then max-w-3xl (768px) on md screens and up.
                    className="bg-white rounded-xl shadow-2xl w-full max-w-l md:max-w-xl overflow-hidden transform transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* Header: Use smaller padding on mobile (p-3 or p-4) */}
                    <div className="flex justify-between items-center p-4 border-b border-gray-100">
                        <h3 className="text-xl md:text-2xl font-bold text-emerald-700">{product.name}</h3>
                        <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Content Area: Use smaller padding on mobile (p-4) */}
                    <div className="p-4 md:p-6 md:flex md:gap-6 overflow-y-auto max-h-[80vh]">
                        
                        {/* Product Image */}
                        <div className="md:w-1/2 mb-3 md:mb-0">
                            <div
                                className="aspect-[3/4] bg-cover bg-center rounded-xl shadow-md"
                                style={{ backgroundImage: `url("${product.image}")` }}
                                aria-label={product.alt}
                            ></div>
                        </div>

                        {/* Product Details and Controls */}
                        <div className="md:w-1/2 flex flex-col justify-between">
                            <div>
                                {/* Details */}
                                <p className="text-sm md:text-base text-gray-600 mb-3">{product.details}</p>

                                {/* Weight Selection */}
                                <div className="mb-3">
                                    <span className="text-base font-medium text-gray-700 block mb-1">Select Weight:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {product.pricing.map((tier, index) => (
                                            <button
                                                key={tier.weight_grams}
                                                onClick={() => { setSelectedTierIndex(index); setQuantity(1); }}
                                                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all border 
                                                ${selectedTierIndex === index
                                                    ? 'bg-emerald-600 text-white border-emerald-600'
                                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                                }`}
                                            >
                                                {tier.weight_grams}g
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Unit Price (Dynamic based on selected tier) */}
                                <div className="mb-4">
                                    <span className="text-lg font-semibold text-gray-900">Price for {selectedTier.weight_grams}g: </span>
                                    <span className="text-xl font-bold text-emerald-700">{selectedTier.price_lkr}</span>
                                </div>

                                {/* Quantity Control (Number of packages) */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-base font-medium text-gray-700">Quantity (Packs):</span>
                                    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                                        <button
                                            onClick={() => handleQuantityChange(-1)}
                                            disabled={quantity <= 1}
                                            className="p-1 h-8 w-8 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="px-3 text-base font-medium w-10 text-center">{quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(1)}
                                            className="p-1 h-8 w-8 text-gray-700 hover:bg-gray-100"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Action Area: Smaller padding/margins on mobile */}
                    <div className="px-4 pb-4 pt-2 md:p-6 md:pt-4 border-t border-gray-100 gap-3 flex flex-col">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xl font-semibold text-gray-900">Total Price:</span>
                            <span className="text-2xl font-extrabold text-emerald-700">Rs {totalPriceLKR}</span>
                        </div>

                        <button
                            onClick={() => {
                                console.log(`Added ${quantity}x ${selectedTier.weight_grams}g pack of ${product.name}. Total: Rs ${totalPriceLKR}`);
                                onClose();
                            }}
                            className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-base font-bold text-white hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
                        >
                            Add {quantity} Packs to Cart <ShoppingCart size={18} />
                        </button>
                        <button
                            className="w-full flex items-center justify-center gap-2 rounded-lg border border-emerald-600 py-2.5 text-base font-bold text-emerald-600 hover:bg-emerald-50 transition"
                        >
                            Contact For More Details
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white text-gray-900 min-h-screen font-sans pt-16">
            <Header />

            <main className="flex-grow px-4 sm:px-6 lg:px-8 py-10">
                <div className="mx-auto max-w-7xl">
                    {/* Category Buttons */}
                    <div className="flex gap-4 p-4 mb-4 border-b border-gray-100 overflow-x-auto">
                        {CATEGORY_NAMES.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategorySwitch(category)}
                                className={`text-lg font-semibold px-4 py-2 rounded-lg transition-all whitespace-nowrap 
                    ${activeCategory === category
                                        ? "bg-emerald-600 text-white shadow-md"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                        <p></p>
                    </div>

                    {/* Products */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4">
                        {displayedProducts.map((product) => (
                            <div
                                key={product.name}
                                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100"
                            >
                                <div
                                    className="aspect-[3/4] bg-cover bg-center"
                                    style={{ backgroundImage: `url("${product.image}")` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                {/* *** FIX: The 'More Details' button is now always visible at the bottom of the card on mobile. *** Removed: translate-y-full and group-hover:translate-y-0 which hid the button on touch devices.
                                */}
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-black/40 backdrop-blur-sm transition-transform duration-300">
                                    <h3 className="text-white text-lg font-bold">{product.name}</h3>
                                    <button
                                        // The onClick handler that opens the modal
                                        onClick={() => handleMoreDetails(product)}
                                        className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 transition"
                                    >
                                        More Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />

            {/* Render Modal if Product Selected */}
            {isModalOpen && selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}