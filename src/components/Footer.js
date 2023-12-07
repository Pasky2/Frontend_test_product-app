import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div>
        <h1>Pasky@great</h1>
        <div>
            <Link to='/'>About</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Products</Link>
        </div>
      </div>
    </>
  )
}

export default Footer
