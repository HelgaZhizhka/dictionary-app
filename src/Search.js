import React, {useState} from "react"   
import axios from "axios"
import "./search.css"
import "./card.css"
import SearchData from "./SearchData"
import Photos from "./Photos";


export default function Search(props) {
    let [searchValue, setSearchValue] = useState(props.word)
	let [searchData, setSearchData] = useState({loaded: false})
	let [photos, setPhotos] = useState(null)

    function handleResponse(response) {
		setSearchData({
			loaded: true,
			data: response.data[0]
		});
	}
	function handlePixelsResponse(response) {
		setPhotos(response.data.photos)
	}

	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
		axios
			.get(apiUrl)
			.then(handleResponse)
			.catch((error) => console.log(error));

		let pexelsApiKey ="563492ad6f917000010000015f041cd965ba4125be4cd3e9b0c5faa0"
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchValue}&per_page=6`
		let headers = { Authorization: `Bearer ${pexelsApiKey}` }
		axios
			.get(pexelsApiUrl, {headers})
			.then(handlePixelsResponse)
			.catch((error) => console.log(error))
	}

    function handleSubmit(event) {
        event.preventDefault();
		search()
    }
    function handlerChange(event) {
		setSearchValue(event.target.value)
    }
	if (!searchData.loaded) search()

	return (
		<div className="search">
			<div className="card">
				<h2 className="title">What word are you searching for?</h2>
				<form onSubmit={handleSubmit}>
					<input
						className="search__input"
						type="search"
						placeholder={searchValue}
						autoFocus
						onChange={handlerChange}
					/>
					<em>i.e. paris, wine, yoga, coding</em>
				</form>
			</div>
			<SearchData data={searchData} />
			<Photos photos={photos}/>
		</div>
	)
}