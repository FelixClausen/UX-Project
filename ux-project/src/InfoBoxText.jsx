// react
import React from 'react';

// css
import './App.css';

const InfoBoxText = ({ blogs }) => {
	return (
		<div className="InfoBox">
			<div className="InfoBoxTextWrapper">
				{blogs.map((blog) => (
					<div className="blog-preview">
						<div className="textWrapper" key={blog.id}>
							<h3 className="InfoBoxTitle"> {blog.title} </h3>
							<p className="InfoBoxText"> {blog.body} </p>
						</div>
						<img
							className="InfoBoxImage rounded float-right"
							src={blog.img}
							alt="alt"
						></img>
					</div>
				))}
			</div>
		</div>
	);
};

export default InfoBoxText;
