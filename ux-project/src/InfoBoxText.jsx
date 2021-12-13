// react
import React from 'react';

// css
import './App.css';

// images
import imageOne from './images/image_one.jpeg';
import randomImg from './images/randomImg.jpg';

const InfoBoxText = ({ blogs, img}) => {
  return (
    <div className='InfoBox'>
      <div className="InfoBoxTextWrapper">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <div className="textWrapper">
            <h3 className="InfoBoxTitle">{ blog.title }</h3>
            <p className="InfoBoxText"> {blog.body} </p>
            <p className="InfoBoxText"> {blog.body} </p>
          </div>
          <img className="InfoBoxImage rounded float-right" src={blog.img} ></img>
        </div>
      ))}
      </div>
    </div>
  );
}

export default InfoBoxText;



/*

// function to show container component
function InfoBoxText() {
  return (
    <div className='xx'>
      <div className="InfoBoxTextWrapper">
      <h3 className="InfoBoxTitle">Vatten nivåer</h3>
      <p className="InfoBoxText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit,
        laoreet consequat erat. Sed ac augue vel diam pharetra rhoncus.
      </p>
      <p className="InfoBoxText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl metus, aliquet pretium justo suscipit,
        laoreet consequat erat.
      </p>
    </div>
    <img src={imageOne} className="InfoBoxImage rounded float-right" alt="..."></img>
  </div>
  );
}

export default InfoBoxText;

*/