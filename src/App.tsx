import "./App.css";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

export default function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const link = queryParams.get("link") as string;
  console.log(`link = ${link}`);

  return (
    <div 
      id="main" 
      className="player-wrapper"
    >
      <ReactPlayer
        className="react-player"
        url={link}
        controls={false}
        playing={true}
        playsinline={true}
        volume={1}
        onReady={(e) => {
          const player = e.getInternalPlayer();
          player.playVideo();

          console.log(`onReady `, player);
        }}
        config={{
          vimeo: {
            playerOptions: {
              autoplay: true,
            },
          },
        }}
      />
    </div>
  );
}
