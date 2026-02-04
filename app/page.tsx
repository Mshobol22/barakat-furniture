import React from 'react';
import { ShoppingBag, Star, Truck, ShieldCheck, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowRight, Sofa, Tag, Users } from 'lucide-react';

export default function BarakatFurniture() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#8B4513] flex items-center gap-2">
              <Sofa className="w-8 h-8" />
              <span>Barakat<span className="text-yellow-600">furniture</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-[#8B4513] transition">About Us</a>
            <a href="#" className="hover:text-[#8B4513] transition">Products</a>
            <a href="#" className="hover:text-[#8B4513] transition">Best Sellers</a>
            <a href="#" className="hover:text-[#8B4513] transition">Customer Reviews</a>
          </div>

          <button className="bg-[#8B4513] hover:bg-[#6d360f] text-white px-6 py-2 rounded font-medium transition">
            Show Me New Arrivals
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[600px] flex items-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80" 
            alt="Modern Living Room" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-white">
          <p className="text-[#d4a373] font-semibold tracking-wider mb-2 uppercase text-sm">Welcome to Barakat Furniture</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl">
            Transform Your Home with Quality Furniture at Prices You'll Love
          </h1>
          <p className="text-gray-200 text-lg mb-8 max-w-xl">
            Discover premium furniture collections designed for comfort and style. From living rooms to bedrooms, find pieces that make your house feel like home—without breaking the bank.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#8B4513] hover:bg-[#6d360f] text-white px-8 py-3 rounded font-medium transition">
              Shop Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded font-medium transition">
              View Catalog
            </button>
          </div>
        </div>
      </section>

      {/* --- VALUE PROPS --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#8B4513] font-bold text-sm uppercase tracking-wide">Why Barakat Furniture</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-900">Quality Meets Affordability</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Experience the perfect blend of exceptional craftsmanship, stunning designs, and prices that won't stretch your budget.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#FFF8F3] p-8 rounded-lg text-left hover:shadow-lg transition">
              <div className="w-14 h-14 bg-[#8B4513] rounded-full flex items-center justify-center text-white mb-6">
                <Sofa className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Every piece is crafted with attention to detail, using high-quality materials that stand the test of time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#FFF8F3] p-8 rounded-lg text-left hover:shadow-lg transition">
              <div className="w-14 h-14 bg-[#D97706] rounded-full flex items-center justify-center text-white mb-6">
                <Tag className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Unbeatable Prices</h3>
              <p className="text-gray-600 leading-relaxed">
                Get the furniture you love without the hefty price tag. We offer competitive pricing on all collections.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#FFF8F3] p-8 rounded-lg text-left hover:shadow-lg transition">
              <div className="w-14 h-14 bg-[#B45309] rounded-full flex items-center justify-center text-white mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Our knowledgeable team is here to help you find the perfect pieces that match your style and space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SHOP BY ROOM --- */}
      <section className="py-20 bg-[#FFFDF9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8B4513] font-bold text-sm uppercase tracking-wide">Shop By Room</span>
            <h2 className="text-4xl font-bold mt-2 text-gray-900">Find Furniture for Every Space</h2>
            <p className="text-gray-600 mt-4">Browse our curated collections and discover pieces that bring style to your home.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Room Card 1 */}
            <div className="group cursor-pointer relative overflow-hidden rounded-xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" alt="Living Room" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold">Living Room</h3>
                <p className="text-gray-300 mb-4">Sofas, coffee tables & more</p>
                <div className="flex items-center text-white font-medium group-hover:underline">Shop Now <ArrowRight className="w-4 h-4 ml-2" /></div>
              </div>
            </div>

            {/* Room Card 2 - UPDATED IMAGE */}
            <div className="group cursor-pointer relative overflow-hidden rounded-xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1616594039964-40891a909d93?auto=format&fit=crop&q=80" alt="Bedroom" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold">Bedroom</h3>
                <p className="text-gray-300 mb-4">Beds, dressers & nightstands</p>
                <div className="flex items-center text-white font-medium group-hover:underline">Shop Now <ArrowRight className="w-4 h-4 ml-2" /></div>
              </div>
            </div>

            {/* Room Card 3 */}
            <div className="group cursor-pointer relative overflow-hidden rounded-xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80" alt="Dining Room" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold">Dining Room</h3>
                <p className="text-gray-300 mb-4">Tables, chairs & storage</p>
                <div className="flex items-center text-white font-medium group-hover:underline">Shop Now <ArrowRight className="w-4 h-4 ml-2" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONSULTATION SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
               <div className="absolute top-4 left-4 bg-[#8B4513] text-white px-4 py-2 rounded shadow-lg z-10 font-bold">
                 Free Design Help
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80" 
                 alt="Moving Furniture" 
                 className="rounded-xl shadow-2xl w-full object-cover h-[500px]"
               />
            </div>
            <div className="md:w-1/2">
              <span className="text-[#8B4513] font-bold text-sm uppercase tracking-wide">Get Started Today</span>
              <h2 className="text-4xl font-bold mt-2 mb-6 text-gray-900">Need Help Choosing the Perfect Furniture?</h2>
              <p className="text-gray-600 text-lg mb-8">
                Our expert team is ready to guide you through every step of the process. Whether you're furnishing a single room or your entire home, we'll help you find pieces that match your style, space, and budget.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFF8F3] rounded-full flex items-center justify-center shrink-0 text-[#8B4513]">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">Personalized Consultations</h4>
                    <p className="text-gray-600">Work one-on-one with our design experts to create your dream space.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFF8F3] rounded-full flex items-center justify-center shrink-0 text-[#8B4513]">
                    <Tag className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">Budget-Friendly Options</h4>
                    <p className="text-gray-600">Find quality furniture at every price point without compromising on style.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFF8F3] rounded-full flex items-center justify-center shrink-0 text-[#8B4513]">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">Quick & Easy Delivery</h4>
                    <p className="text-gray-600">From our showroom to your home in no time, with professional setup available.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-[#8B4513] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10 text-white">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#8B4513] mx-auto mb-6">
            <Sofa className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Visit our showroom today and discover quality furniture that fits your style and budget. Our team is ready to help you create the home you've always dreamed of.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-[#8B4513] px-8 py-4 rounded font-bold hover:bg-gray-100 transition flex items-center justify-center">
              Browse Our Collections <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition flex items-center justify-center">
              Contact Us Today <Phone className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-medium">
            <div className="flex items-center"><Truck className="w-5 h-5 mr-2" /> Fast Delivery</div>
            <div className="flex items-center"><ShieldCheck className="w-5 h-5 mr-2" /> Quality Guaranteed</div>
            <div className="flex items-center"><Phone className="w-5 h-5 mr-2" /> Expert Support</div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#4a3f35] text-gray-300 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 border-b border-gray-600 pb-12">
            <div>
              <div className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                 <Sofa className="w-6 h-6" /> Barakat
              </div>
              <p className="mb-6 leading-relaxed">
                Quality furniture that transforms your house into a home. Exceptional service, unbeatable prices.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#8B4513] transition"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#8B4513] transition"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#8B4513] transition"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-[#8B4513] transition">Home</a></li>
                <li><a href="#" className="hover:text-[#8B4513] transition">About Us</a></li>
                <li><a href="#" className="hover:text-[#8B4513] transition">Products</a></li>
                <li><a href="#" className="hover:text-[#8B4513] transition">Customer Reviews</a></li>
                <li><a href="#" className="hover:text-[#8B4513] transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Shop</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-[#8B4513] transition">Best Sellers</a></li>
                <li><a href="#" className="hover:text-[#8B4513] transition">New Arrivals</a></li>
                <li><a href="#" className="hover:text-[#8B4513] transition">Living Room</a></li>
                <li><a href="#" className="hover:text-[#8B4513] transition">Bedroom</a></li>
                <li><a href="#" className="hover:text-[#8B4513] transition">Dining Room</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start"><MapPin className="w-5 h-5 mr-3 mt-1 shrink-0" /> 123 Furniture Street<br/>Chicago, IL 60601</li>
                <li className="flex items-center"><Phone className="w-5 h-5 mr-3 shrink-0" /> (123) 456-7890</li>
                <li className="flex items-center"><Mail className="w-5 h-5 mr-3 shrink-0" /> info@barakatfurniture.com</li>
                <li className="flex items-start"><div className="w-5 h-5 mr-3 mt-1 shrink-0 text-center font-bold text-xs border rounded flex items-center justify-center">L</div> <div>Mon-Sat: 9AM-6PM<br/>Sun: 10AM-4PM</div></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 Barakat Furniture. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}