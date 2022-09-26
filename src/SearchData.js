import React from "react";
import Meaning from "./Meaning";

export default function SearchData(props) {
    console.log(props.data.data);
    if (props.data.data) {
		return (
      <div className="search__container">
        <div className="card">
          <h2 className="title">{`${props.data.data.word[0].toUpperCase()}${props.data.data.word.slice(1)}`}</h2>
          <div className="d-flex">
            {/* <a
							href={props.data.phonetics[1].audio}
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11H10L19 4V28L10 21Z"
									stroke="#a6e4e7"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M24 13V19"
									stroke="#a6e4e7"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M28 11V21"
									stroke="#a6e4e7"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</a> */}
            <span className="search__transcription">
              {props.data.data.phonetic}
            </span>
          </div>
        </div>
        {props.data.data.meanings.map((meaning, index) => {
          return (
            <div className="card" key={index}>
              <Meaning data={meaning} />
            </div>
          )
        })}
      </div>
    )
	} else {
		return null;
	}
}