import React, {
  useState
} from 'react';
import {
  GrSearch
} from "react-icons/gr";
import {
  FaReact
} from "react-icons/fa";
import {
  MdKeyboardBackspace
} from "react-icons/md";
import Profile from '../assets/profilePic';
import RenderPost from './render_post';
import Users from '../model/users';
import BodySearch from './body_search';
import Posts from '../model/posts';
import {
  AiFillHome
} from "react-icons/ai";
import {
  Link
} from 'react-router-dom';


function Header() {

  var [result, setResult] = useState(Users);
  var [searchBool, setSearchBool] = useState(false);
  var [parameter, setParameter] = useState("");
  var tempName = "";

  function input(event) {
    tempName = event.target.value;
    setParameter(tempName);
    tempName === "" ? setResult(Users) :
      setResult(Users.filter(s => s.name.startsWith(tempName)));

  }

  function toggleSearch() {
    setSearchBool(!searchBool);
  }

  return <div> <nav>
    <ul className = "topnav row" >
    <div className = 'col-1'
  style = {
    {
      display: 'flex',
      justifyContent: 'center'
    }
  }> <li> {
    !searchBool ? <div className = 'FaReact' > <FaReact/> </div>:<div className='MdKeyboardBackspace' onClick={toggleSearch}><MdKeyboardBackspace/> </div>}</li> </div> 
    <div className = 'col-1'
    style = {
      {
        marginTop: -10
      }
    } > <li> <div className = 'GrSearch'
    onClick = {
      toggleSearch
    } > <GrSearch/> </div></li> </div> 
    <div className = 'col-2' > <li> {
      searchBool ? < input className = 'SearchBar'
      style = {
        {
          marginTop: -10
        }
      }
      type = 'text'
      onChange = {
        input
      }
      placeholder = 'Search for User' > </input>:<div></div>
    } </li></div>
    <div className = 'col-6'
    style = {
      {
        display: 'flex',
        justifyContent: 'center',
        marginTop: -10
      }
    } > <li className = 'topnav-center' > <h1> SOCIAL MEDIA </h1></li> </div> 
    <Link to = '/home'
    className = 'col-1'
    style = {
      {
        display: 'flex',
        justifyContent: "center",
        marginTop: -10
      }
    } > <li className = "topnav-right aiFillHome" > <AiFillHome/> </li></Link>
    <Link to = '/profile/Admin'
    className = 'col-1'
    style = {
      {
        display: 'flex',
        justifyContent: 'center',
        marginTop: -10
      }
    } > <li className = "topnav-right " > <img className = 'headerProfilePic'
    src = {
      Users[0].url
    }
    /></li> </Link> 
    </ul> 
    </nav> 
    <div className = 'row' >
    <div className = 'col-3' >
    <BodySearch list = {
      result
    }
    name = {
      parameter
    }
    /> </div> <div className = 'col-9' >
    <
    RenderPost Post = {
      Posts
    }/>   
    </div>   
    </div> 
    </div>;
  }
  export default Header;
