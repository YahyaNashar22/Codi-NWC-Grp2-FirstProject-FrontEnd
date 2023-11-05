import React from 'react'
import {Link} from 'react-router-dom'
import notFound from '../../assets/images/notFound.png'
import style from './PageNotFound.module.css'
const PageNotFound = () => {
  return (
    <div className={style.notFoundContainer} >
  <img alt='404 error' src={notFound} className={style.error}/>
    <h1>Oops! Page Not Found</h1>
    <Link to="/" className={style.returnHome}>Go Home</Link>
     </div>
  )
}

export default PageNotFound
