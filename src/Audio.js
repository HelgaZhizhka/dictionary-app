import React from 'react'
import PlayAudio from 'react-simple-audio-player'
import chroma from 'chroma-js'

const colorScale = chroma.scale(['#0199CB', '#ffffff']).mode('lch').colors(5)

export default function Audio (props)  {
    return (
      <PlayAudio url={props.audio} simpleMod={true} colorScale={colorScale} />
    )
}