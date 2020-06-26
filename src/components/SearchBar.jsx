import React from 'react'

const SearchBar = ({
  handleInputChangeFrom,
  handleInputChangeTo,
  handleInputChangeDateFrom,
  handleInputChangeDateTo,
  handleSearchClick}) => {

  return (
    <div>
      {/* <input className='searchBar-input' value={searchValue} onChange={handleInputChange} /> */}
      
      <label for="departure">Choose departure:</label>
      <select name="departure" id="departure"  onChange={handleInputChangeFrom}>
        <option value="PRG">Prague</option>
        <option value="TXL">Berlin</option>
        <option value="WAW">Warsaw</option>
        <option value="PED">Pardubice</option>
      </select>

      <label for='dateFrom'>Date from:</label>
      <input type="date" id="dateFrom"  onChange={handleInputChangeDateFrom}/>
      
      <label for="destination">Choose destination:</label>

      <select name="destination" id="destination"  onChange={handleInputChangeTo}>
        <option value="VLC">Valencia</option>
        <option value="BCN">Barcelona</option>
        <option value="MAD">Madrid</option>
        <option value="MXP">Milano</option>
        <option value="ATH">Athens</option>
      </select>

      <label for='dateTo'>Date to:</label>
      <input type="date" required pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" title="dd/mm/yyyy" id="dateTo"  onChange={handleInputChangeDateTo}/>



      <button className='searchBar-button' onClick={handleSearchClick}>Search for flight</button>
    </div>
  )
}

export default SearchBar
