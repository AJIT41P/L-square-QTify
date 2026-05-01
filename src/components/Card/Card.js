import "./Card.css";
import Chip from "@mui/material/Chip";

function Card({ image, follows, title }) {
  return (
    <div className="card">
      <div className="cardImageContainer">
        <img
          src={image}
          alt={title}
          className="cardImage"
        />

        <div className="cardChip">
          <Chip
            label={`${follows} Follows`}
            size="small"
            sx={{
              backgroundColor: "#121212",
              color: "#ffffff"
            }}
          />
        </div>
      </div>

      <div className="cardBottom">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;