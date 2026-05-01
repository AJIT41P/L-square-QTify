import "./Section.css";

import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({
  title,
  data,
  type,
  genres
}) {
  const [collapse, setCollapse] = useState(false);

  const [value, setValue] = useState("all");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredSongs =
    value === "all"
      ? data
      : data.filter(
          (song) => song.genre.key === value
        );

  const displayData =
    type === "song"
      ? filteredSongs
      : data;

  const generateCards = () => {
    return displayData.map((item) => (
      <Card
        key={item.id}
        image={item.image}
        follows={item.follows}
        likes={item.likes}
        title={item.title}
        type={type}
      />
    ));
  };

  return (
    <section className="section">
      <div className="sectionHeader">
        <h2>{title}</h2>

        {type !== "song" && (
          <button
            className="sectionButton"
            onClick={() =>
              setCollapse(!collapse)
            }
          >
            {collapse
              ? "Collapse"
              : "Show All"}
          </button>
        )}
      </div>

      {type === "song" && (
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#34c94b"
            }
          }}
          sx={{
            marginBottom: "20px"
          }}
        >
          <Tab
            label="All"
            value="all"
            sx={{
              color: "white"
            }}
          />

          {genres.map((genre) => (
            <Tab
              key={genre.key}
              label={genre.label}
              value={genre.key}
              sx={{
                color: "white"
              }}
            />
          ))}
        </Tabs>
      )}

      {type === "song" ? (
        <Carousel
          data={displayData}
          renderComponent={(item) => (
            <Card
              image={item.image}
              follows={item.follows}
              likes={item.likes}
              title={item.title}
              type={type}
            />
          )}
        />
      ) : collapse ? (
        <div className="sectionGrid">
          {generateCards()}
        </div>
      ) : (
        <Carousel
          data={displayData}
          renderComponent={(item) => (
            <Card
              image={item.image}
              follows={item.follows}
              likes={item.likes}
              title={item.title}
              type={type}
            />
          )}
        />
      )}
    </section>
  );
}

export default Section;