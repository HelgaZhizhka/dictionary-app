import React from "react"

export default function Photos(props) {
    if (props.photos) {
      return (
        <div className="card search__photos">
          {props.photos.map((photo, index) => {
            return (
              <a href={photo.src.original}>
                <img
                  srcSet={`${photo.src.landscape} 1040w, ${photo.src.medium} 560ц, ${photo.src.small} 360w`}
                  sizes="(max-width: 300px) 100vw, (max-width: 600px) 50vw, (max-width: 900px) 33vw, 900px"
                  src={photo.src.landscape}
                  alt=""
                  key={index}
                />
              </a>
            )
          })}
        </div>
      )

    } else {
        return null
    }
}
