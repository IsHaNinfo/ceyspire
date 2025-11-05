"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { User, ShoppingCart } from "lucide-react";
import Header from '../components/ui/Header'
import Footer from "../components/ui/Footer"


// Function to handle form submission (placeholder)

const page = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen font-sans">

            {/* 1. Integrated Styles & Config */}

            <Header />

            <main className="flex flex-col">
                {/* HeroSection */}
                <section className="relative flex h-[60vh] min-h-[480px] w-full items-center justify-center overflow-hidden">
                    {/* NOTE: Removed the '-mt-[84px]' class for clean rendering */}
                    <div className="absolute inset-0 z-0 bg-cover bg-center" data-alt="A serene, lush green Sri Lankan tea plantation under a soft morning light." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsf-_v9CQ5AXB-6XSoQbukUQz02tc-R_Rpo0okjkzNKJSzk3w1BrTGHaNDTYmjM8qupb4ts6Z_1sFOml8s8vqKrG9F3sz1DU61TB_Hd4N5P1GQYv20RPFt6-98FYEMxWtNfMnYWKtPqngcgq3-F3yDWpUdBbk48cxy7cqo4FtdZNFNC3G7r09v8qad49GU0xz4C5kpI4NC135XsMPN-69Ju7-7lw5WqRYgJu6UAdR2DyzQbmnx87_2jZL8UUyojFsSCstzpF2EoUI')" }}></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">The Soul of Sri Lanka's Finest</h1>
                        <p className="max-w-xl text-base font-normal leading-normal text-gray-200 md:text-lg">Discover the authentic essence of Sri Lanka's natural treasures, from our home to yours.</p>
                    </div>
                </section>

                <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

                    {/* Grid Layout Section 1 (Our Mission) */}
                    <section className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
                        <div className="flex flex-col justify-center gap-4 lg:col-span-2">
                            <h2 className="font-heading text-4xl font-bold text-primary">Our Mission</h2>
                            <p className="text-text-muted-light dark:text-text-muted-dark">To share the authentic, natural treasures of Sri Lanka with the world. We are dedicated to bringing you the highest quality products, sourced directly from the heart of the island, while upholding our unwavering commitment to quality, sustainability, and community.</p>
                        </div>
                        <div className="relative h-80 w-full overflow-hidden rounded-xl lg:col-span-3">
                            <img className="h-full w-full object-cover" alt="Close-up of vibrant, rolled cinnamon sticks tied with a rustic twine." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPKZ6Gu5wZ2lxMWMgstb_GfQIPgrsYGM35-ehQRd77XCB0-iEDnp-jni1FcMGoyMK_NccpwnP7duNgq0-4fFHa7H1kIGgetjKQyW0Lj3n9mnFbF5-mD0bVPt35gDs165azHH4FHdCJMCdaJscxhGDl5APDgasli5mhL0o6h_fyGgMYyqPgE6nsXx8KCyCKatiBBfqcvrHUrnEAgCG9tBD_F5HncYsp4NZfyVVqXMfg285cij93uCs2BI28tj17TgJUU8EoY8IsfJE" />
                        </div>
                    </section>

                    {/* Grid Layout Section 2 (From the Source) */}
                    <section className="mt-16 grid grid-cols-1 gap-8 lg:mt-24 lg:grid-cols-5 lg:gap-12">
                        <div className="relative order-2 h-80 w-full overflow-hidden rounded-xl lg:order-1 lg:col-span-3">
                            <img className="h-full w-full object-cover" alt="A Sri Lankan farmer carefully hand-picking fresh tea leaves in a vibrant green field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ElZFqoa5U491UFM0j79sNluvvM6unR8_Phiu_WK44w2ePC7X3OZ2zrYDhCif5l2nC4pO6z2hvf1oT44EJHc1OWvASwRmnuRj6QK4mKbiLzVt9SHwCjwTJpnK6KyyBeF5jzrv0WDiK4erQ6XHGFq76kiQHtMwWBiKqJV4WodgNmc2mDcZEDG9qrH3j5yVr9Wwn5ZPdHU813PjNntD3gyQMpA_CZoHAXIrfo7dRYJgge0Of-QoYY23HVmis0a9jo-xq-oCX5Pkd50" />
                        </div>
                        <div className="order-1 flex flex-col justify-center gap-4 lg:order-2 lg:col-span-2">
                            <h2 className="font-heading text-4xl font-bold text-primary">From the Source</h2>
                            <p className="text-text-muted-light dark:text-text-muted-dark">Our journey begins in the lush landscapes of Sri Lanka. We partner directly with local farmers and artisans who use age-old traditions to cultivate and harvest our ingredients. This direct relationship ensures that every product is not only of the highest quality but also ethically and sustainably sourced, supporting the communities that make it all possible.</p>
                        </div>
                    </section>

                    {/* FeatureSection / Value Proposition */}
                    <section className="mt-16 py-10 lg:mt-24">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <h2 className="font-heading text-4xl font-bold text-primary">Our Values</h2>
                            <p className="max-w-2xl text-text-muted-light dark:text-text-muted-dark">We stand by a simple set of promises that guide everything we do, ensuring an experience that is authentic, responsible, and of the highest quality.</p>
                        </div>
                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                            {/* Value 1: 100% Natural */}
                            <div className="glassmorphism flex flex-col items-center gap-4 rounded-xl p-6 text-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-green/30 text-accent-green">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 13.9C7.5 10.5 9 6 13 4c1 2.5 3.5 4.9 5.5 5.5c2.3 0.6 2.8 2.7 2.4 4.3c-0.2 1-0.7 2.1-1.4 3.1c-1.1 1.6-2.5 2.7-4 3.4c-1.5 0.7-3 1-4.7 0.9z" /><path d="M18 10c1.7 0.5 2.5 2 2.5 4.5" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">100% Natural</h3>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Every product is free from artificial additives, preservatives, and anything that isn't found in nature.</p>
                            </div>

                            {/* Value 2: Ethically Sourced */}
                            <div className="glassmorphism flex flex-col items-center gap-4 rounded-xl p-6 text-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-terracotta/30 text-accent-terracotta">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake"><path d="m11 17 2 2c1.7 1.7 2.8 1.4 3.6 1.1 2-.7 4.1-3.2 5.5-5.5.9-1.5.7-3.3-0.2-4.9c-0.9-1.5-2.2-2.3-3.7-2.7c-1.5-0.3-3.1 0-4.6 1L8 8" /><path d="m5 10 2 2c1.7 1.7 2.8 1.4 3.6 1.1 2-.7 4.1-3.2 5.5-5.5.9-1.5.7-3.3-0.2-4.9c-0.9-1.5-2.2-2.3-3.7-2.7c-1.5-0.3-3.1 0-4.6 1L2 5" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Ethically Sourced</h3>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">We partner with local farmers, ensuring fair practices that support and uplift their communities.</p>
                            </div>

                            {/* Value 3: Authentic Sri Lankan */}
                            <div className="glassmorphism flex flex-col items-center gap-4 rounded-xl p-6 text-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/30 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Authentic Sri Lankan</h3>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Experience the true taste and benefits of ingredients grown in their native, nutrient-rich soil.</p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="mt-16 lg:mt-24">
                        <div className="flex flex-col items-center text-center">
                            <h2 className="font-heading text-4xl font-bold text-primary">Get In Touch</h2>
                            <p className="mt-2 max-w-2xl text-text-muted-light dark:text-text-muted-dark">We'd love to hear from you. Whether it's a question about our products, a partnership inquiry, or just a hello, please don't hesitate to reach out.</p>
                        </div>
                        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">

                            {/* Contact Form */}
                            <div className="glassmorphism rounded-xl p-8">
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="name">Name</label>
                                        <div className="mt-1">
                                            <input
                                                id="name" name="name" type="text"
                                                className="block w-full rounded-lg border-gray-300/50 bg-white/50 dark:border-gray-600/50 dark:bg-black/50 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="email">Email</label>
                                        <div className="mt-1">
                                            <input
                                                id="email" name="email" type="email"
                                                className="block w-full rounded-lg border-gray-300/50 bg-white/50 dark:border-gray-600/50 dark:bg-black/50 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-light dark:text-text-dark" htmlFor="message">Message</label>
                                        <div className="mt-1">
                                            <textarea
                                                id="message" name="message" rows={4}
                                                className="block w-full rounded-lg border-gray-300/50 bg-white/50 dark:border-gray-600/50 dark:bg-black/50 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-bold text-white shadow-sm transition-opacity hover:opacity-90" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>

                            {/* Contact Details */}
                            <div className="flex flex-col justify-center space-y-8">

                                <div className="flex items-start gap-4">
                                    <Phone className="mt-1 text-2xl text-primary h-6 w-6 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-text-light dark:text-text-dark">Phone</h3>
                                        <p className="text-text-muted-light dark:text-text-muted-dark">+94 71 324 6556</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="mt-1 text-2xl text-primary h-6 w-6 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-text-light dark:text-text-dark">Email</h3>
                                        <p className="text-text-muted-light dark:text-text-muted-dark">hello@ceyspire.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="mt-1 text-2xl text-primary h-6 w-6 shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-text-light dark:text-text-dark">Address</h3>
                                        <p className="text-text-muted-light dark:text-text-muted-dark">Dodampapitiya,Uthumgama,Mathugama Sri Lanka</p>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center gap-4 pt-4">
                                    {/* Instagram */}
                                    <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#" aria-label="Instagram">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path></svg>
                                    </a>
                                    {/* Facebook */}
                                    <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#" aria-label="Facebook">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.409 0 22.675 0z"></path></svg>
                                    </a>
                                    {/* Twitter */}
                                    <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#" aria-label="Twitter">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default page