import React from 'react'

function Timer() {
  return (
    <><div className="boxTimer">
          <div className="timer">

          </div>
      </div><div className="boxControls">
              <button><i class="bi bi-skip-start-fill"></i></button>
              <button><i class="bi bi-play-fill"></i></button>
              <button><i class="bi bi-pause-fill"></i></button>
              <button><i class="bi bi-stop-fill"></i></button>
          </div></>
  )
}

export default Timer