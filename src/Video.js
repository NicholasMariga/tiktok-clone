import React, { useRef, useState } from "react";
import "./Video.css";
// import Veds from "./ved/Howprogrammersfixthebugshort.mp4";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  //  Handles the playing and pausing functionality
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
        // src={Veds}
        src={url}
      ></video>
      {/* <video loop src={Veds} type="video/mp4"></video> */}
      {/* VideoFooter */}

      <VideoFooter
        channel={channel}
        description={description}
        song={song}
        /*channel="SlimGuy"
        description="I am a tiktok-clone Developer with React"
        song="How i react with React" */
      />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
//https://www.w3schools.com/html/movie.mp4
//https://www.w3schools.com/html/mov_bbb.mp4
