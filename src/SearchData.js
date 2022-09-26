import React from 'react'
import Meaning from './Meaning'
import Phonetic from './Phonetic'

export default function SearchData(props) {
  console.log(props.data.data)
  if (props.data.data) {
    return (
      <div className="search__container">
        <div className="card">
          <h2 className="title">{`${props.data.data.word[0].toUpperCase()}${props.data.data.word.slice(
            1
          )}`}</h2>
          {props.data.data.phonetics.map((phonetic, index) => {
            return (
              <div className="search__pnonetics" key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            )
          })}
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
    return null
  }
}
