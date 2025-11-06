// Components/ProductDetailPage.tsx (Hypothetical New File)

"use client";

import React, { useState, useMemo } from "react";
import { ShoppingCart, X, Plus, Minus, ChevronDown, ChevronLeft } from "lucide-react";
import Header from "../ui/Header"; // Assuming path
import Footer from "../ui/Footer"; // Assuming path

// --- Type Definitions (Must be consistent with CategoryPage) ---
interface PriceTier {
    weight_grams: number;
    price_lkr: string;
}

interface Product {
    name: string;
    image: string;
    alt: string;
    details: string;
    pricing: PriceTier[];
}

// Helper function
const lkrToNumber = (price_lkr: string): number => {
    const match = price_lkr.match(/(\d+\.?\d*)/);
    return match ? Number(match[0]) : 0;
};

interface ProductPageProps {
    product: Product; // This would typically be fetched on the page
    onBack: () => void; // A function to simulate navigation back to the category page
}

const ProductDetailPage: React.FC<ProductPageProps> = ({ product, onBack }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedTierIndex, setSelectedTierIndex] = useState(0);

    const selectedTier = product.pricing[selectedTierIndex];
    const numericUnitLKRPrice = lkrToNumber(selectedTier.price_lkr);

    const totalPriceLKR = useMemo(() => {
        return (numericUnitLKRPrice * quantity).toFixed(2);
    }, [numericUnitLKRPrice, quantity]);

    const handleQuantityChange = (delta: number) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    return (
        <div className="bg-white text-gray-900 min-h-screen font-sans pt-16">
            <Header />

            <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
                
                {/* Back Button and Product Title */}
                <div className="mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center text-emerald-600 hover:text-emerald-800 transition mb-4 font-semibold"
                    >
                        <ChevronLeft size={20} className="mr-1" /> Back to {product.name.includes("Tea") ? "Tea" : "Products"}
                    </button>
                    <h1 className="text-4xl font-extrabold text-gray-900 border-b pb-2">{product.name}</h1>
                </div>

                <div className="md:flex md:gap-10">
                    {/* Product Image Section (Left) */}
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <div
                            className="aspect-square bg-cover bg-center rounded-xl shadow-2xl w-full"
                            style={{ backgroundImage: `url("${product.image}")` }}
                            aria-label={product.alt}
                        ></div>
                    </div>

                    {/* Product Details and Controls (Right) */}
                    <div className="md:w-1/2">
                        {/* Details */}
                        <h2 className="text-2xl font-semibold text-emerald-700 mb-3">Product Description</h2>
                        <p className="text-base text-gray-600 mb-6 border-b pb-4">{product.details}</p>

                        {/* Weight Selection */}
                        <div className="mb-6">
                            <span className="text-lg font-bold text-gray-700 block mb-2">Select Weight:</span>
                            <div className="flex flex-wrap gap-3">
                                {product.pricing.map((tier, index) => (
                                    <button
                                        key={tier.weight_grams}
                                        onClick={() => { setSelectedTierIndex(index); setQuantity(1); }}
                                        className={`px-4 py-2 rounded-xl text-base font-semibold transition-all border 
                                        ${selectedTierIndex === index
                                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        {tier.weight_grams}g ({tier.price_lkr})
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price Display */}
                        <div className="mb-6 bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                            <span className="text-xl font-semibold text-gray-800">Price for {selectedTier.weight_grams}g:</span>
                            <span className="text-2xl font-bold text-emerald-700">{selectedTier.price_lkr}</span>
                        </div>

                        {/* Quantity Control (Number of packages) */}
                        <div className="flex items-center gap-5 mb-8">
                            <span className="text-lg font-bold text-gray-700">Quantity (Packs):</span>
                            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                                <button
                                    onClick={() => handleQuantityChange(-1)}
                                    disabled={quantity <= 1}
                                    className="p-2 h-10 w-10 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                                >
                                    <Minus size={18} />
                                </button>
                                <span className="px-4 text-lg font-medium w-12 text-center">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange(1)}
                                    className="p-2 h-10 w-10 text-gray-700 hover:bg-gray-100"
                                >
                                    <Plus size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Action Area */}
                        <div className="border-t pt-6 gap-3 flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-2xl font-bold text-gray-900">Total Price:</span>
                                <span className="text-3xl font-extrabold text-emerald-700">Rs {totalPriceLKR}</span>
                            </div>

                            <button
                                onClick={() => {
                                    console.log(`Added ${quantity}x ${selectedTier.weight_grams}g pack of ${product.name}. Total: Rs ${totalPriceLKR}`);
                                    // In a real app, this would dispatch an action to add to cart
                                }}
                                className="w-full flex items-center justify-center gap-3 rounded-xl bg-emerald-600 py-3 text-lg font-bold text-white hover:bg-emerald-700 transition shadow-lg shadow-emerald-300"
                            >
                                Add {quantity} Packs to Cart <ShoppingCart size={20} />
                            </button>
                            <button
                                className="w-full flex items-center justify-center gap-3 rounded-xl border border-emerald-600 py-3 text-lg font-bold text-emerald-600 hover:bg-emerald-50 transition"
                            >
                                Contact For Wholesale Details
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;