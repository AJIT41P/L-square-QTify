import "./Card.css";

import Chip from "@mui/material/Chip";

function Card({
  image,
  follows,
  likes,
  title,
  type
}) {
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
            label={
              type === "song"
                ? `${likes} Likes`
                : `${follows} Follows`
            }
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