import React from 'react'

const Footer = () => {
  return (
<footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-xl font-bold text-emerald-700">CeySpire</h2>
              <p className="text-sm text-gray-600 mt-4">
                Bringing the authentic taste of Sri Lanka to your kitchen with all-natural, premium quality products.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a className="text-base text-gray-600 hover:text-emerald-600 transition" href="#">About Us</a></li>
                <li><a className="text-base text-gray-600 hover:text-emerald-600 transition" href="#">Contact</a></li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a className="text-base text-gray-600 hover:text-emerald-600 transition" href="/shop">Shop All</a></li>
         
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase mb-4">Subscribe</h3>
              <form className="mt-4 flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                />
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-gray-500">© 2025 CeySpire. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {/* Placeholder Social Icons */}
            </div>
          </div>
        </div>
      </footer>
        )
}

export default Footer