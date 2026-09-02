import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050",
    title: "New Collection",
    text: "Discover your next favorite style.",
    button: "Shop Now",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    title: "Style Your Way",
    text: "Fashion made for every moment.",
    button: "Explore Now",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    title: "Urban Styles",
    text: "Find the look that defines you.",
    button: "Shop Now",
  },
];

const Home = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
    prev === slides.length - 1 ? 0 : prev + 1 
  );
  };

  const prevSlide = () => {
    setCurrentSlide((prev)=> 
    prev === 0 ? slides.length - 1 : prev - 1
  );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  
  return (

    <div className="home">
      <section className="hero-carousel">

        <img 
        src={slides[currentSlide].image} 
        alt={slides[currentSlide].title}
        className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-label">
            URBANCLOSET
          </span>
          <h1>{slides[currentSlide].title}</h1>

          <p>{slides[currentSlide].text}</p>

          <Link to = "/shop" className="hero-btn">
          {slides[currentSlide].button}
          </Link>
        </div>

        <button
        className="hero-arrow hero-arrow-left"
        onClick={prevSlide}>
           ←
        </button>

        <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}>
           →
        </button>

        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button 
            key = {index}
            className={
              currentSlide === index
              ? "hero-dot active"
              :"hero-dot"
            }
            onClick={() => setCurrentSlide(index)}>
            </button>
          ))}
        </div>

      </section>
      <section className="home-categories">

        <h2>Shop by Category</h2>

        <div className="category-cards">

          <div className="category-card">
            <h3>Men</h3>
            <p>Explore the latest styles</p>
            <Link to="/shop">Shop Men</Link>
          </div>

          <div className="category-card">
            <h3>Women</h3>
            <p>Find your perfect look</p>
            <Link to="/shop">Shop Women</Link>
          </div>

          <div className="category-card">
            <h3>Accessories</h3>
            <p>Complete your style</p>
            <Link to="/shop">Explore More</Link>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;