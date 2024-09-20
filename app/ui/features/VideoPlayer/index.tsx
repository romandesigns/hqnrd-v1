import "video.js/dist/video-js.css";
// Fantasy
import "@videojs/themes/dist/fantasy/index.css";

export const VideoPlayer = (props: { src: string }) => {
  console.log(props.src);
  return (
    <div>
      Video Player
      <video
        id="my-player"
        className="video-js vjs-fantasy-skin vjs-big-play-centered"
        controls
        preload="auto"
        width="640"
        height="264"
        poster="http://video-js.zencoder.com/oceans-clip.png"
        data-setup='{"example_option":true}'
      >
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
};
