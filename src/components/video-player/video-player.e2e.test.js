import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mocks = [
  {
    isPlaying: false,
    muted: true,
    poster: `https://www.film.ru/sites/default/files/movies/posters/1610055-574057.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
];

it(`<VideoPlayer/> component can play & pause`, () => {
  const {isPlaying, muted, poster, src} = mocks;

  const videoPlayer = mount(
      <VideoPlayer
        isPlaying={isPlaying}
        poster={poster}
        src={src}
        muted={muted}
      />
  );

  const video = videoPlayer.find(`video`);

  video.simulate(`mouseenter`);
  expect(videoPlayer.isPlaying).toBe(true);

  video.simulate(`mouseleave`);
  expect(videoPlayer.isPlaying).toBe(false);
});


