import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Search.css'
import { toast } from 'react-toastify'
const Search = () => {
  let dispatch = useDispatch()
  const { search } = useSelector((state) => ({ ...state }))
  const { text } = search

  const handleChange = (e) => {
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: e.target.value },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Results Filtered')
  }

  return (
    <div className='searchStyle'>
      <form className='form-inline my-2 my-lg-0' onSubmit={handleSubmit}>
        <input
          type='search'
          value={text}
          onChange={handleChange}
          className='form-control mr-sm-2'
          placeholder='Search'
        />
      </form>
    </div>
  )
}

export default Search
