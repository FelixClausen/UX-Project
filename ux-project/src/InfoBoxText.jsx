// react
import React from 'react';

// css
import './App.css';

// container component
const InfoBoxText = ({ blogs }) => {
	return (
		<div className="InfoBox">
			<div className="InfoBoxTextWrapper">
				{blogs.map((blog) => (
					<div className="blog-preview">
						{/* text om relevant ämne */}
						<div className="textWrapper">
							<h3 className="InfoBoxTitle"> {blog.title} </h3>
							<p className="InfoBoxText"> {blog.body} </p>
						</div>
						{/* bild på relevant ämne */}
						<img
							className="InfoBoxImage rounded float-right"
							src={blog.img}
							alt="bild på klimat"
						></img>
					</div>
				))}
			</div>
		</div>
	);
};

export default InfoBoxText;
