import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const onPlay = jest
  .spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => {});

const onPause = jest
  .spyOn(window.HTMLMediaElement.prototype, `load`)
  .mockImplementation(() => {});

const poster = `https://www.film.ru/sites/default/files/movies/posters/1610055-574057.jpg`;
const src = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const isPlaying = false;

const videoPlayer = mount(
    <VideoPlayer
      isPlaying={isPlaying}
      poster={poster}
      src={src}
      muted={true}
    />
);


it(`<VideoPlayer/> component can play`, () => {
  videoPlayer.setProps({isPlaying: true});
  expect(onPlay).toHaveBeenCalled();
  onPlay.mockRestore();
});

it(`<VideoPlayer/> component can pause`, () => {
  videoPlayer.setProps({isPlaying: false});
  expect(onPause).toHaveBeenCalled();
  onPause.mockRestore();
});


