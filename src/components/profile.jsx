import React, {
  useState
} from 'react';
import {
  FaReact
} from "react-icons/fa";
import ProfilePic from '../assets/profilePic';
import RenderPost from './render_post';
import Users from '../model/users';
import Posts from '../model/posts';
import {
  AiFillHome
} from "react-icons/ai";
import {
  Link,
  useParams
} from 'react-router-dom';


function Profile() {
  let params = useParams();
  console.log(params);
  var dummyArray = [];
  var id;

  for (var i = 0; i < Users.length; i++) {
    if (Users[i].name === params.userName) {
      id = Users[i].userId;
      break;
    }
  }
  for (var i = 0; i < Posts.length; i++) {

    if (Posts[i].userId === id) {
      dummyArray.push(Posts[i]);
    }
  }
  console.log(dummyArray);

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
      } > <li> <div className = 'FaReact' > <FaReact/> </div></li> </div> 
      <div className = 'col-2' > </div>

      <div className = 'col-6'
    style = {
        {
          display: 'flex',
          justifyContent: 'center',
          marginTop: -10
        }
      } > <li className = 'topnav-center' > <h1> SOCIAL MEDIA </h1></li> </div> 
      <div className = 'col-1' > </div> 
      <Link to = '/home'
    className = 'col-1'
    style = {
        {
          display: 'flex',
          justifyContent: 'center',
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
    <div className = 'col-12' >
      <div className = 'row'
    style = {
        {
          display: 'flex',
          marginTop: 20
        }
      } >
      <div className = 'col-4'
    style = {
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    } > <img className = 'profileImage'
    src = {
      Users[id - 1].url
    }
    /><h1>{params.userName}</h1> </div> 
    <div className = 'col-1 profileDetails' > <h1> Posts </h1><h1>{dummyArray.length}</h1> </div> 
    <div className = 'col-2 profileDetails' > <h1>Following </h1><h1>25</h1> </div> 
    <div className = 'col-2 profileDetails' > <h1> Followers </h1><h1>15</h1> </div> 
    <div className = 'col-1' > </div> 
    </div> 
    <h2 className = 'col-12 profilePostDivider' > Posts </h2> 
    <RenderPost Post = {
        dummyArray
      }
    />   
    </div>   
    </div>
  }
  return <div> <Header/> </div>;
}
export default Profile;
