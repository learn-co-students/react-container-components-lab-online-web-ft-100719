import React from 'react'

const SearchForm = ({handleChange, handleSubmit}) => {
    return (
      <div>
        <form onSubmit={handleSubmit} >
          <input type="text" name="serchTerm" onChange={handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
}

export default SearchForm