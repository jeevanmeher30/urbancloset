import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">

      <div
        id="urbanClosetCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        {/* Indicators */}
        <div className="carousel-indicators">

          <button
            type="button"
            data-bs-target="#urbanClosetCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#urbanClosetCarousel"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#urbanClosetCarousel"
            data-bs-slide-to="2"
          ></button>

        </div>


        {/* Slides */}
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050"
              className="d-block w-100 "
              alt="Fashion collection"
            />

            <div className="carousel-caption">
              <h1>New Collection</h1>
              <p>Discover your next favorite style.</p>

              <Link to="/shop">
                <button className="hero-btn">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>


          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
              className="d-block w-100"
              alt="Fashion"
            />

            <div className="carousel-caption">
              <h1>Style Your Way</h1>
              <p>Fashion made for every moment.</p>

              <Link to="/shop">
                <button className="hero-btn">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>


          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
              className="d-block w-100"
              alt="Shopping"
            />

            <div className="carousel-caption">
              <h1>Urban Styles</h1>
              <p>Find the look that defines you.</p>

              <Link to="/shop">
                <button className="hero-btn">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

        </div>


        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#urbanClosetCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>


        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#urbanClosetCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

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