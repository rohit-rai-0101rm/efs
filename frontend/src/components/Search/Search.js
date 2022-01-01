import React, { Fragment, useState } from 'react'
import MetaData from '../layout/MetaData'
import './Search.css'
const Search = ({history}) => {
    const [keyword, setKeyword] = useState('')
    const searchSubmitHandler=(e)=>{
        e.preventDefault();
        if(keyword.trim()){
            history.push(`/products/${keyword}`)
        }
    }
    return (
        <Fragment>
            <MetaData title="SEARCH_PRODUCT"/>
            <form className='searchBox' onSubmit={searchSubmitHandler}>
                <input
                type="text"
                placeholder="Search a product"
                onChange={(e)=>setKeyword(e.target.value)}
                />
                <input type="submit" value="search"/>
            </form>

        </Fragment>
    )
}

export default Search
