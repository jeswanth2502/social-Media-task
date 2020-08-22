import React from 'react';
import {
  Link
} from 'react-router-dom';

function BodySearch(props) {
  return <div className = 'col-12' > {
      props.name === "" ? <h2 style = {
        {
          fontSize: 30,
          marginLeft: 15
        }
      } > Top Searches </h2>:<h2 className='searchTag' style={{fontSize:30,marginLeft:15}}>Results for '{props.name}'</h2>
    } <
    div className = 'searchBody col-12'
  style = {
      {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }
    } > {
      props.list.length > 0 ? props.list.map(
        x => < Link to = {
          '/profile/' + x.name
        }
        key = {
          x.userId
        }
        className = 'searchList col-10'
        onClick = {
          () => {
            console.log(x.name)
          }
        } >
        <
        div className = 'row' > < div className = 'col-3'
        style = {
          {
            display: 'flex',
            justifyContent: 'center'
          }
        } >
        <
        img className = 'searchResultImage '
        src = {
          x.url
        }
        /> </div> <
        div className = 'col-9' > < div className = 'searchResultName' > {
          x.name
        } </div> 
        </div> 
        </div> 
        </Link>): 
        <h2 className = 'defaultSearch' > No Results Found </h2>} 
        </div> 
        </div>;
      }
      export default BodySearch;
