import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./App.css";
//import Ved3 from "./ved/Howprogrammersfixthebugshort.mp4";
//import Ved1 from "./ved/nn.webm";
//import Ved2 from "./ved/Senior.webm";
import Video from "./Video.js";

function App() {
  // connecting and fetching from the backend
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      {/* app_container */}
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
        {/* Hand Coded data
        <Video
          // url={Ved1}
          url="https://i.imgur.com/FTBP02Y.mp4"
          channel="SlimGuy"
          description="I am a tiktok-clone Developer with React"
          song="How i react with React"
          likes={105}
          messages={24}
          shares={4}
        />
        <Video
          // url={Ved3}
          url="https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/8.mp4?alt=media&token=87e20ffd-2b5c-422a-ad85-33b90b4e2169"
          channel="SlimGuy"
          description="I am a tiktok-clone Developer with React"
          song="How i react with React"
          likes={105}
          messages={24}
          shares={4}
        />
        <Video
          // url={Ved3}
          url="https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/5.mp4?alt=media&token=965a0494-7aaf-4248-85c5-fefac581ee7f"
          channel="SlimGuy"
          description="I am a tiktok-clone Developer with React"
          song="How i react with React"
          likes={105}
          messages={24}
          shares={4}
        />
        <Video
          // url={Ved3}
          url="https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/4.mp4?alt=media&token=517ad60c-ca28-400e-ab46-49fb8c122d75"
          channel="SlimGuy"
          description="I am a tiktok-clone Developer with React"
          song="How i react with React"
          likes={105}
          messages={24}
          shares={4}
        />
        <Video
          // url={Ved3}
          url="https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/1.mp4?alt=media&token=36032747-7815-473d-beef-061098f08c18"
          channel="SlimGuy"
          description="I am a tiktok-clone Developer with React"
          song="How i react with React"
          likes={105}
          messages={24}
          shares={4}
        />

        <Video
          // url={Ved2}
          url="https://i.imgur.com/JAwZVLa.mp4"
          channel="SlimGuy"
          description="I am a tiktok-clone Developer with React"
          song="How i react with React"
          likes={99}
          messages={87}
          shares={11}
        />
        <Video
          // url={Ved3}
          url="https://i.imgur.com/Kzvbeup.mp4"
          channel="SlimGuy"
          description="I am a tiktok-clone Developer with React"
          song="How i react with React"
          likes={105}
          messages={24}
          shares={4}
        /> */}
      </div>
    </div>
  );
}

export default App;
