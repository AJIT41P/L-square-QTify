import "./Section.css";
import Card from "../Card/Card";

function Section({ title, data }) {
  return (
    <section className="section">
      <div className="sectionHeader">
        <h2>{title}</h2>

        <button className="sectionButton">
          Collapse
        </button>
      </div>

      <div className="sectionGrid">
        {data.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            follows={album.follows}
            title={album.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Section;