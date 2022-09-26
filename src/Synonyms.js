import React from "react"

export default function Synonyms(props) {
    console.log(props.synonyms)
    if (props.synonyms) {
        return (
          <div className="search__synonyms">
            <ul className="list">
              {props.synonyms.map((synonym, index) => {
                return <li key="index">{synonym}</li>
              })}
            </ul>
          </div>
        )
    } else {
        return null
    }
}
