import React from "react";
import { Link, useLocation } from "react-router-dom"; // single import for Link and useLocation

const items = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 3500, image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww", description: "High-quality wireless headphones with noise cancellation." },
  { id: 2, name: "Smartphone", category: "Electronics", price: 250000, image: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww", description: "Latest smartphone with amazing camera features." },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VCUyMHNoaXJ0fGVufDB8fDB8fHww", description: "Comfortable cotton t-shirt available in multiple sizes and colors." },
  { id: 4, name: "Jeans", category: "Clothing", price: 1500, image: "https://images.unsplash.com/photo-1714729382668-7bc3bb261662?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGplYW5zfGVufDB8fDB8fHww", description: "Stylish denim jeans with a modern fit." },
  { id: 5, name: "Coffee Mug", category: "Home & Kitchen", price: 450, image: "https://images.unsplash.com/photo-1533776992670-a72f4c28235e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww", description: "Ceramic mug perfect for coffee or tea." },
  { id: 6, name: "Blender", category: "Home & Kitchen", price: 3200, image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxlbmRlcnxlbnwwfHwwfHx8MA%3D%3D", description: "Powerful blender for smoothies and shakes." },
  { id: 6, name: "Makeup Kit", category: "Beauty", price: 1200, image: "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZXVwJTIwa2l0fGVufDB8fDB8fHww", description: "Powerful blender for smoothies and shakes." },
];

const ItemPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get("category"); // Get selected category

  // Filter items based on selected category
  const filteredItems = categoryFilter
    ? items.filter((item) => item.category === categoryFilter)
    : items;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">
        {categoryFilter ? categoryFilter : "All"} Items
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow hover:shadow-2xl transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-500">{item.category}</p>
              <p className="text-2xl font-bold mt-2">
                ₨ {item.price.toLocaleString()}
              </p>
              <Link
                to={`/item/${item.id}`}
                className="block mt-4 text-center bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
