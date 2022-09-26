import React from "react"
import Audio from "./Audio";
export default function Phonetic(props) {
    if (props) {
        return (
          <div className="d-flex mr-2">
            {props.phonetic.audio && <Audio audio={props.phonetic.audio} />}
            <span
              className="search__transcription"
              style={{ marginLeft: '10px' }}
            >
              {props.phonetic.text}
            </span>
          </div>
        )
    } else {
        return null
    }
}
