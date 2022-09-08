import React from "react"

export default function Meaning(props) {
    // console.log(props.data.definitions[0].definition);
    return (
		<div>
			<h3> {props.data.partOfSpeech}</h3>
			{props.data.definitions.map((def, index) => {
                return (
					<div className="search__column" key={index}>
						<p className="search__definition">{def.definition}</p>
						<em>{def.example}</em>
					</div>
				);
            })}
		</div>
	);
}