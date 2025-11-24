import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Electronics",
    img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800",
  },
  {
    name: "Clothing",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Home & Kitchen",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800",
  },
  {
    name: "Beauty",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
  },
];

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-28">
      {/* HERO SECTION */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 mt-16">
        <div className="flex flex-col gap-6 max-w-lg">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Shop Smarter. Live Better.
          </motion.h1>

          <p className="text-gray-600 text-lg">
            Discover curated essentials, trending styles, and must-have
            deals—all in one place.
          </p>

          <div className="flex gap-4 mt-4">
            {/* Link to all items page */}
            <Link
              to="/itempage"
              className="rounded-2xl px-6 py-3 text-lg bg-black text-white hover:bg-gray-800 transition"
            >
              Shop Now
            </Link>
            <button className="rounded-2xl px-6 py-3 text-lg border border-gray-400 hover:bg-black hover:text-white transition">
              Browse Deals
            </button>
          </div>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0"
          className="h-96 w-auto rounded-3xl shadow-2xl mt-8"
          alt="Hero"
        />
      </section>

      {/* CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/itempage?category=${encodeURIComponent(cat.name)}`}
              className="rounded-2xl shadow hover:shadow-xl cursor-pointer transition-all bg-white"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="rounded-t-2xl h-40 w-full object-cover"
              />
              <div className="p-4 font-semibold">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
