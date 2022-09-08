import React, {useState} from "react"   
import axios from "axios"
import "./search.css"
import "./card.css"
import SearchData from "./SearchData"


export default function Search(props) {
    let [searchValue, setSearchValue] = useState(props.word)
	let [searchData, setSearchData] = useState({loaded: false})

    function handleResponse(response) {
		console.log(response.data[0])
		setSearchData({
			loaded: true,
			data: response.data[0]
		});
	}
	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;
		axios
			.get(apiUrl)
			.then(handleResponse)
			.catch((error) => console.log(error));
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
		</div>
	)
}