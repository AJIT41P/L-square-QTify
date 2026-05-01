import "./App.css";

import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  const [topAlbums, setTopAlbums] =
    useState([]);

  const [newAlbums, setNewAlbums] =
    useState([]);

  const [songs, setSongs] =
    useState([]);

  const [genres, setGenres] =
    useState([]);

  const generateTopAlbums =
    async () => {
      try {
        const response =
          await axios.get(
            "https://qtify-backend.labs.crio.do/albums/top"
          );

        setTopAlbums(response.data);
      } catch (error) {
        console.log(error);
      }
    };

  const generateNewAlbums =
    async () => {
      try {
        const response =
          await axios.get(
            "https://qtify-backend.labs.crio.do/albums/new"
          );

        setNewAlbums(response.data);
      } catch (error) {
        console.log(error);
      }
    };

  const generateSongs =
    async () => {
      try {
        const response =
          await axios.get(
            "https://qtify-backend.labs.crio.do/songs"
          );

        setSongs(response.data);
      } catch (error) {
        console.log(error);
      }
    };

  const generateGenres =
    async () => {
      try {
        const response =
          await axios.get(
            "https://qtify-backend.labs.crio.do/genres"
          );

        setGenres(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    generateTopAlbums();

    generateNewAlbums();

    generateSongs();

    generateGenres();
  }, []);

  return (
    <div>
      <Navbar />

      <Hero />

      <Section
        title="Top Albums"
        data={topAlbums}
      />

      <Section
        title="New Albums"
        data={newAlbums}
      />

      <Section
        title="Songs"
        data={songs}
        type="song"
        genres={genres}
      />
    </div>
  );
}

export default App;