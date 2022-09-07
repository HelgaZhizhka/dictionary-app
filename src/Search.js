import React, {useState} from "react";
import "./search.css"

export default function Search(props) {
    let [searchValue, setSearchValue] = useState(null)
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${searchValue}`);
    }
    function handlerChange(event) {
		setSearchValue(event.target.value)
    }

    return (
		<div className="search">
			<form onSubmit={search}>
				<input
					className="search__input"
					type="search"
					onChange={handlerChange}
				/>
			</form>
		</div>
	);
}