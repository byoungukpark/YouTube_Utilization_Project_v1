import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Search = () => {
  const[search_keyword, set_search_keyword] = useState('');
  const navigate = useNavigate();

  const handle_search = () =>{
    console.log(search_keyword);
    if(search_keyword){
      navigate(`/Search/${search_keyword}`);
      set_search_keyword('');
    }
  }

  return (
    <div id='search'>
      <div className='search__inner'>
        <label htmlFor="searchinput">
          <span className='ir'>검색</span>
        </label>
        <input 
          type="search" 
          id='searchinput'
          placeholder='검색어를 입력해주세요'
          autoComplete='off'
          className='search__input'
          onChange={e=>set_search_keyword(e.target.value)}
          onKeyDown={e=>{
            if(e.key ==='Enter'){
              handle_search();
            }
          }}
        />
      </div>
    </div>
  )
}

export default Search
