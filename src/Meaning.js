import React from "react"
import Synonyms from './Synonyms'

export default function Meaning(props) {
    // console.log(props.data.definitions[0].definition);
    return (
      <div>
        <h3>{`${props.data.partOfSpeech[0].toUpperCase()}${props.data.partOfSpeech.slice(1)}`}</h3>
        {props.data.definitions.map((def, index) => {
          return (
            <div className="search__column" key={index}>
              <p className="search__definition">
                <strong>Definition: </strong>
                {def.definition}
              </p>
              {def.example && (
                <p>
                  <strong>Example: </strong>
                  <em>{def.example}</em>
                </p>
              )}
              <Synonyms synonyms={def.synonyms} />
            </div>
          )
        })}
      </div>
    )
}