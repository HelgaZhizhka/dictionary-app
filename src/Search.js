import React, {useState} from "react"   
import axios from "axios"
import "./search.css"


export default function Search(props) {
    let [searchValue, setSearchValue] = useState(null)

    function handleResponse(response) {
		console.log(response.data[0]);
	}

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${searchValue}`);
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;
        axios.get(apiUrl).then(handleResponse).catch(error => console.log(error))
    }
    function handlerChange(event) {
		setSearchValue(event.target.value)
    }

    return (
		<div className="search">
			<form onSubmit={search}>
				<div className="d-flex">
					<input
						className="search__input"
						type="search"
						onChange={handlerChange}
					/>``
				</div>
			</form>
		</div>
	);
}