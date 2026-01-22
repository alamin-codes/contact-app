import React from 'react'

const Filter = ({onFilterChange}) => {
  return (
    <div className='mb-3'>
        <h2>Filter</h2>
        <select name="" id="" className='border rounded' onChange={(e) => onFilterChange(e.target.value)}>
            <option value="default">Default</option>
            <option value="fname">First Name (A - Z)</option>
            <option value="lname">Last Name (A - Z)</option>
            <option value="oldest">Oldest to First</option>
        </select>
    </div>
  )
}

export default Filter