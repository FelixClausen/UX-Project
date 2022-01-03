git// react
import React from 'react';

// css
import './App.css';

// försök koppla via id istället  ?

const InfoBoxText = ({ blogs }) => {
  return (
    <div className='InfoBox'>
      <div className="InfoBoxTextWrapper">
      {blogs.map(blog => (
        <div className="blog-preview" >
          <div className="textWrapper" key={blog.id}>
            <h3 className="InfoBoxTitle"> {blog.title} </h3>
            <p className="InfoBoxText"> {blog.body} </p>
          </div>
          <img className="InfoBoxImage rounded float-right" src={blog.img} alt='alt'></img>
        </div>
      ))}
      </div>
    </div>
  );
}

export default InfoBoxText;

/*
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