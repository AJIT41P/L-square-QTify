import "./Hero.css";
import hero from "../../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <img
        src={hero}
        alt="hero"
      />
    </section>
  );
}

export default Hero;