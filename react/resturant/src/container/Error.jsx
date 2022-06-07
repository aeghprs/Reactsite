import React from 'react'
import './Error.css';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <>
      <div className="error">
          <img className='pic' src='https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png' alt='error' />
          <div className='btn'>
              <button type="button" className="custom__button"><Link to='/'>Back Home</Link></button>
              </div>
      </div>
    </>
  )
}

export default Error
