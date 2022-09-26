import React from "react"
import Audio from "./Audio";
export default function Phonetic(props) {
    if (props) {
        return (
          <div className="d-flex">
            {props.phonetic.audio && (
              <Audio audio={props.phonetic.audio} />
            )}
            <span className="search__transcription">{props.phonetic.text}</span>
          </div>
        )
    } else {
        return null
    }
}
