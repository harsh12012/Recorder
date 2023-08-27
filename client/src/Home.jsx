import React from "react";
import { ReactMediaRecorder } from "react-media-recorder";

function Home() {
  return (
    <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div
          style={{ backgroundColor: "#f5f0f0" }}
          className="d-flex justify-content-center align-item-center bg- secondary vh-100"
        >
          <div style={{ alignItems: "center", marginTop: 20 }}>
            <p style={{ textAlign: "center", fontStyle: "italic" }}>{status}</p>
            <div style={{ alignItems: "center" }}>
              <video
                src={mediaBlobUrl}
                autoPlay
                loop
                controls
                style={{ width: 1300, height: 500 }}
              ></video>
            </div>
            <div
              style={{
                alignItems: "center",
                marginLeft: 450,
                marginTop: 20,
              }}
            >
              <button
                onClick={startRecording}
                // className="btn btn-primary w-20 rounded-10"
                style={{
                  color: "white",
                  width: 170,
                  height: 55,
                  backgroundColor: "#35b031",
                  borderColor: "#35b031",
                  borderRadius: 12,
                }}
              >
                Start Recording
              </button>
              <button
                onClick={stopRecording}
                //className="btn btn-success w-20 rounded-10"
                style={{
                  color: "white",
                  width: 170,
                  height: 55,
                  marginLeft: 50,
                  backgroundColor: "#db4656",
                  borderColor: "#db4656",
                  borderRadius: 12,
                }}
              >
                Stop Recording
              </button>
            </div>
          </div>
        </div>
      )}
    />
  );
}

export default Home;
