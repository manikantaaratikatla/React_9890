import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// Sample food items
const foodItems = [
  {
    name: "Idli",
    rating: 4.2,
    price: 100,
    image: "https://takanini.noveltysweets.co.nz/wp-content/uploads/2024/11/Rice-Idli-1024x683-1-2.jpg",
  },
  {
    name: "Dosa",
    rating: 4.5,
    price: 150,
    image: "https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
  },
  {
    name: "Paneer Tikka",
    rating: 4.8,
    price: 350,
    image: "https://suhana.com/cdn/shop/articles/paneer-tikka-2-1.png?v=1709544706",
  },
  {
    name: "Chole Bhature",
    rating: 4.6,
    price: 250,
    image: "https://punjabirestaurant.ca/wp-content/uploads/2025/01/Chole-Bhature-2.jpg",
  },
  {
    name: "Veg Biryani",
    rating: 4.7,
    price: 250,
    image: "https://t3.ftcdn.net/jpg/09/82/71/66/360_F_982716634_04UFwbDpbgF083Yoc7B0PrXPlQLMDjJW.jpg",
  },
  {
    name: "Samosa",
    rating: 4.3,
    price: 60,
    image: "https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800",
  },
  {
    name: "Rajma Chawal",
    rating: 4.4,
    price: 220,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBZK-YsUk1_WT-VTS6fDZOUzliKTSf6AxSw&s",
  },
];

const App = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const Header = () => (
  <header id="header">
    <Logo />
    <NavBar />
  </header>
);

const Logo = () => (
  <img
    width="100px"
    height="100px"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp6yS0DVo3PQwxRVWHaUJ9ejn6Dkgu0zcuA&s"
    alt="Food Logo"
  />
);

const NavBar = () => (
  <nav>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact</li>
    </ul>
  </nav>
);

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const filteredItems = foodItems.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main>
      <SearchBar value={searchText} onChange={setSearchText} />
      <ItemsContainer items={filteredItems} />
    </main>
  );
};

const SearchBar = ({ value, onChange }) => (
  <div className="search-bar-modern">
    <input
      type="text"
      placeholder="Search delicious food..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
    <button>
      <span role="img" aria-label="search">🔍</span> Search
    </button>
  </div>
);

const ItemsContainer = ({ items }) => (
  <div className="items-container">
    {items.length > 0 ? (
      items.map((item, index) => <Item key={index} {...item} />)
    ) : (
      <p>No items found.</p>
    )}
  </div>
);

const Item = ({ name, rating, price, image }) => (
  <div className="item-card">
    <img src={image} alt={name} className="item-image" />
    <h3>{name}</h3>
    <p>Ratings: {rating} ⭐</p>
    <p>Price: ₹{price}/-</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li>Menu</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Contact</h4>
      <p>Email: support@foodweb.com</p>
      <p>Phone: +91 9876543210</p>
    </div>
    <div className="footer-section">
      <h4>Follow Us</h4>
      <p>Instagram | Facebook | Twitter</p>
    </div>
  </footer>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
