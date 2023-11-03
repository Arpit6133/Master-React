import React, {useState} from 'react';
import './SearchBar.css';

export default function SearchBar({ onSubmit }) {

	const handleFormSubmit = (event) => {
		event.preventDefault();

		onSubmit(searchValue)
	};

	const [searchValue, setSearchValue] = useState('');

	const handleChange = (event) => {
		setSearchValue(event.target.value);
	};
  return (
    <div className='search-bar'>
			<form onSubmit={handleFormSubmit}>
				<label>Enter Search Term</label>
				<input value={searchValue}  onChange={handleChange}/>
			</form> 
    </div>
  )
}
