import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ video }) => {
  //state of duration
  const [durationt, setDurationt] = useState(0);

  //state of played
  const [played, setPlayed] = useState(0);

  //state of source
  const [source, setSource] = useState([]);

  //state of playing
  const [playing, setPlaying] = useState(false);

  const Shower = () => {
    if (played >= durationt) {
      return true;
    }
  };

  return (
    <div>
      <div className="videopls">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={source.videourl}
            width="100%"
            height="100%"
            playing={playing}
            controls={true}
            onDuration={(duration) => {
              const finalduration = duration - 5; //display of buttons over screen when 5sec left
              setDurationt(finalduration);
              console.log(duration);
            }}
            onProgress={(progress) => {
              setPlayed(progress.playedSeconds);
            }}
          />
        </div>
        {Shower() && (
          <div className="popbtn">
            <button
              className="btn"
              onClick={() => {
                if (playing) {
                  setSource(video[0]);
                }
                setPlaying(true);
              }}
            >
              {playing ? <div className="btn bg-warning">Prev</div> : ""}
            </button>
            <button
              className="btn bg-warning"
              onClick={() => {
                if (playing) {
                  var random = Math.round(Math.random() * 2); // 2 depends on videourl uploaded
                  setSource(video[random]);
                }
                setPlaying(true);
              }}
            >
              {playing ? (
                " Next"
              ) : (
                <div className="btn bg-warning text-center">Play</div>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default VideoPlayer;
