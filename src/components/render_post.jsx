import React, {
  useState
} from 'react';
import {
  FcLike
} from "react-icons/fc";
import {
  FaSave
} from "react-icons/fa";
import {
  MdComment
} from 'react-icons/md';
import {
  IoMdHeartEmpty
} from 'react-icons/io';
import {
  IoMdSend
} from 'react-icons/io';
import User from '../model/users';

function RenderPost(props) {

  function CreatePost(x) {
    const [comment, setComment] = useState(false);
    const [like, setLike] = React.useState(false);
    var imageUrl = User[x.userId - 1].url;
    var userName = User[x.userId - 1].name;

    function toggleLike() {
      setLike(!like);
    }

    function toggleComment() {
      console.log(comment);
      setComment(!comment);
    }

    function DisplayComments(com) {
      var name = User[com.userId - 1].name;
      console.log(name);
      return <div className = 'postDisplayComments col-11' > <h3 className = 'postCommentName col-2' > {
        name
      }: </h3><p className='postCommentBody col-10'>{com.body}</p> </div>;
    }

    function RenderComments() {
      return <div className = 'col-11'
      style = {
          {
            display: 'flex',
            flexDirection: 'column'
          }
        }> <div className = 'postMyComment row' >
        <h2 className = 'col-2'
      style = {
          {
            textAlign: 'center'
          }
        } > You: </h2> <input className = 'postComment col-7'
      placeholder = 'Add a comment' > </input> 
      <div className = 'col-1'
      style = {
          {
            textAlign: 'center',
            fontSize: 30
          }
        } > < IoMdSend/> </div> 
        </div> {
          x.comments.map(DisplayComments)
        } </div>;
    }
    return ( <div className = 'postWhole col-7'
      style = {
        {
          alignSelf: 'center'
        }
      }
      key = {
        x.id
      }>
      <div className = 'postOwner ' > < img className = 'postDp'
      src = {
        imageUrl
      }/><h1 className='postOwnerName'>{userName}</h1> </div>
       <p className = 'postCaption' > {
        x.caption
      } </p> <img className = 'postFeed col-12'
      src = {
        x.thumbnailUrl
      }/> <div className = 'postRectangle' >
      <div className = 'postIcons' >
      <div onClick = {
        () => toggleLike()
      } > {
        like ? < FcLike / > : < IoMdHeartEmpty / >
      } </div> <FaSave/>
      <div onClick = {
        () => toggleComment()
      } >
      <MdComment/>
      </div> </div> {
        comment ? <div> <RenderComments/> </div>:<div></div>
      } </div> </div>
    );
  }
  return <div className = 'bodyFeed col-12'> {
      props.Post.map(CreatePost)
    }

    </div>;
}
export default RenderPost;
