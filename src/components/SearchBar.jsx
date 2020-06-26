import React from 'react'

const SearchBar = ({
  searchValueFrom,
  searchValueTo,
  dateFrom,
  dateTo,
  handleInputChangeFrom,
  handleInputChangeTo,
  handleInputChangeDateFrom,
  handleInputChangeDateTo,
  handleSearchClick}) => {

  return (
    <div>
      {/* <input className='searchBar-input' value={searchValue} onChange={handleInputChange} /> */}
      
      <label for="departure">Choose departure:</label>

      <select name="departure" id="departure" value={searchValueFrom} onChange={handleInputChangeFrom}>
        <option value="valencia">Valencia</option>
        <option value="barcelona">Barcelona</option>
        <option value="madrid">Madrid</option>
        <option value="milano">Milano</option>
        <option value="athens">Athens</option>
      </select>

      <label for='dateFrom'>Date from:</label>
      <input type="date" id="dateFrom" value={dateFrom} onChange={handleInputChangeDateFrom}/>
      
      <label for="destination">Choose destination:</label>

      <select name="destination" id="destination" value={searchValueTo} onChange={handleInputChangeTo}>
        <option value="valencia">Valencia</option>
        <option value="barcelona">Barcelona</option>
        <option value="madrid">Madrid</option>
        <option value="milano">Milano</option>
        <option value="athens">Athens</option>
      </select>

      <label for='dateTo'>Date to:</label>
      <input type="date" id="dateTo" value={dateTo} onChange={handleInputChangeDateTo}/>



      <button className='searchBar-button' onClick={handleSearchClick}>Search country</button>
    </div>
  )
}

export default SearchBar
