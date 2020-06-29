import React from "react";
import VideoPlayer from "./video-player.jsx";
import renderer from "react-test-renderer";

const film = {
  id: 910,
  poster: `https://www.film.ru/sites/default/files/movies/posters/1610055-574057.jpg`,
  title: `Harry Potter - 1`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`<VideoPlayer/> renders correctly`, () => {
  const {
    src,
    poster
  } = film;

  const tree = renderer.create(
      <VideoPlayer
        src={src}
        isPlaying={false}
        poster={poster}
        muted={true}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
