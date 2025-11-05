"use client";
import { useState } from "react";
// Assuming lucide-react and next/image are available
import { ShoppingCart, Heart, User, Search, Menu, X, Star } from "lucide-react";
import Link from "next/link";
// Removed: import Image from "next/image"; -> Replaced with standard <img> tags below
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import backgroundImage from "../public/images/Gemini_Generated_Image_10d1rt10d1rt10d1.png"; // Placeholder path for background image
export default function HomePage() {
  const [search, setSearch] = useState("");

  // Helper function to handle cart interaction (placeholder)
  const handleAddToCart = (productName: string) => {
    console.log(`Added ${productName} to cart`);
    // In a real application, this would dispatch an action or update state/Firestore
  };

  // Define types for clarity (TypeScript Best Practice)
  interface Category {
    name: string;
    image: string;
    alt: string;
  }

  interface Product {
    name: string;
    price: string;
    image: string;
    alt: string;
  }

  const categories: Category[] = [
    {
      name: "Spices",
      image: "https://images.pexels.com/photos/1008747/pexels-photo-1008747.jpeg",
      alt: "A bundle of fresh cinnamon sticks.",
    },
    {
      name: "Ceylon Tea",
      image: "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg",
      alt: "Close-up of high-quality Ceylon tea leaves.",
    },
    {
      name: "Ocean’s Harvest",
      image: "https://images.pexels.com/photos/30112814/pexels-photo-30112814.jpeg",
      alt: "A variety of dried fish neatly arranged.",
    },
    {
      name: "Grains & Flours",
      image: "https://images.pexels.com/photos/7236402/pexels-photo-7236402.jpeg",
      alt: "Different types of flour and grains in bowls.",
    },
  ];

  const products: Product[] = [
    {
      name: "Ceylon Cinnamon Quills",
      price: "$12.99",
      image: "https://placehold.co/400x400/bbf7d0/0d1b10?text=Cinnamon+Quills",
      alt: "Premium Ceylon Cinnamon Quills.",
    },
    {
      name: "Premium Black Tea",
      price: "$9.49",
      image: "https://placehold.co/400x400/99f6e4/0d1b10?text=Black+Tea",
      alt: "Finest quality Premium Black Tea.",
    },
    {
      name: "Organic Coconut Flour",
      price: "$7.99",
      image: "https://placehold.co/400x400/94a3b8/0d1b10?text=Coconut+Flour",
      alt: "Organic and gluten-free Coconut Flour.",
    },
    {
      name: "Sun-Dried Sprats",
      price: "$14.25",
      image: "https://placehold.co/400x400/a5f3fc/0d1b10?text=Dried+Sprats",
      alt: "Sri Lankan Sun-Dried Sprats.",
    },
  ];
 const reviews: Review[] = [
    {
      id: 1,
      name: "Nimali Perera",
      location: "Colombo",
      rating: 5,
      testimonial: "The Organic Turmeric Powder is the best I've ever used! The color and potency are incredible. It makes my curries vibrant and flavorful. Truly authentic Sri Lankan quality.",
      avatar: "https://placehold.co/100x100/34d399/102213?text=NP",
    },
    {
      id: 2,
      name: "Chandra Silva",
      location: "Kandy",
      rating: 5,
      testimonial: "I can't start my day without the Premium Black Tea Leaves. The aroma and robust flavour take me right back to the hill country plantations.",
      avatar: "https://placehold.co/100x100/06b6d4/102213?text=CS",
    },
    {
      id: 3,
      name: "Ranjan Fernando",
      location: "Negombo",
      rating: 4,
      testimonial: "Excellent quality Sun-Dried Sprats. They were well-packed and tasted very fresh for dried fish. Perfect for my pol sambol.",
      avatar: "https://placehold.co/100x100/fcd34d/102213?text=RF",
    },
    {
      id: 4,
      name: "Priya De Soysa",
      location: "Galle",
      rating: 5,
      testimonial: "The Organic Coconut Flour is fantastic for baking. It’s finely milled and works perfectly in all my gluten-free recipes. A reliable staple!",
      avatar: "https://placehold.co/100x100/f87171/102213?text=PD",
    },
    {
      id: 5,
      name: "Asanka Gamage",
      location: "Jaffna",
      rating: 5,
      testimonial: "The Ceylon Cinnamon Quills are top-grade. The sweet aroma fills my kitchen. My coffee and desserts have never tasted better. Highly recommend for genuine cinnamon lovers.",
      avatar: "https://placehold.co/100x100/93c5fd/102213?text=AG",
    },
    {
      id: 6,
      name: "Tharindu Bandara",
      location: "Nuwara Eliya",
      rating: 4,
      testimonial: "The Red Rice Flour is excellent for making pittu. It's high quality and always consistent. My family loves the authentic texture.",
      avatar: "https://placehold.co/100x100/c084fc/102213?text=TB",
    },
    {
      id: 7,
      name: "Lakshmi Dias",
      location: "Matara",
      rating: 5,
      testimonial: "The Spicy Dried Chilies are exactly what I needed! They pack a serious punch and add the perfect Sri Lankan heat to any curry. Be warned: they are genuinely spicy!",
      avatar: "https://placehold.co/100x100/f472b6/102213?text=LD",
    },
    {
      id: 8,
      name: "Sampath Siriwardena",
      location: "Anuradhapura",
      rating: 5,
      testimonial: "Superb Kurakkan Flour. I use it daily for a healthy porridge. The quick delivery and great packaging make this my go-to site now.",
      avatar: "https://placehold.co/100x100/fbbf24/102213?text=SS",
    },
  ];



  // We are removing all dark mode classes (`dark:`) and gradients, setting a solid white background.
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Header - Changed to solid white background and clear shadow */}
      <Header />

      <section className="relative h-[90vh] flex items-center justify-center pt-16">
        {/* Using a standard div with inline style for the background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
          }}
          aria-hidden="true"
        ></div>

        <div className="text-center z-10 text-white p-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Authentic Flavors of Sri Lanka
          </h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto drop-shadow-md">
            Taste the purity of Ceylon’s finest  from spice gardens to the
            Indian Ocean.
          </p>

          <Link
            href="/shop"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition shadow-xl transform hover:scale-[1.02]"
          >
            Explore Collections
          </Link>
        </div>
      </section>
      {/* Category Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Shop by Category
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat: Category) => (
            <div
              key={cat.name}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              {/* Using standard <img> tag */}
              <img
                src={cat.image}
                alt={cat.alt}
                width={400}
                height={400}
                className="object-cover w-full h-40 sm:h-64 aspect-square group-hover:scale-[1.03] transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
              <h4 className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-lg sm:text-xl font-semibold text-white">
                {cat.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="bg-gray-50 py-16 px-6 w-full">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
              Hear from Our Customers
            </h3>
            <p className="text-center text-lg text-gray-600 mb-12">
              Authentic reviews from Sri Lankans and expats around the world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((review: Review) => (
                <div 
                  key={review.id}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between hover:shadow-xl transition"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} 
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-sm italic mb-4 line-clamp-4">
                      "{review.testimonial}"
                    </p>
                  </div>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-emerald-100 text-emerald-700 border border-emerald-300 shrink-0"
                          style={{ backgroundImage: `url(${review.avatar})`, backgroundSize: 'cover' }}>
                      {/* Avatar text fallback (mostly hidden by background image) */}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 leading-tight">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      <Footer />
      {/* Footer Section - Adapted for White Theme */}

    </div>
  );
}