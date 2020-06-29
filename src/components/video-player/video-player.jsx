import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

  }

  componentDidMount() {
    const {src, poster, muted} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;
    video.muted = muted;

    /* video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () => {
      this.setState({
        isPlaying: false,
      });
    };*/
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (video) {
      if (isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }
  }

  render() {
    const {src, poster, muted} = this.props;
    const videoClass = `player__video`;

    return (
      <video
        ref={this._videoRef}
        src={src}
        poster={poster}
        muted={muted}
        className={videoClass}
      />
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
};

export default VideoPlayer;
