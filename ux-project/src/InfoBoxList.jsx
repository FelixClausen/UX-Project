// react
import React from 'react';

// css
import './App.css';

// container component
const InfoBoxList = ({ blogs }) => {
	return (
		<div>
			{/* använder .map för att visa rätt antal objekt i arrayen,
                samt skriver ut rätt innehåll på rätt plats */}
			{/* blog hittas med data i container componenten */}
			{blogs.map((blog) => (
				<div className="InfoBox">
					{/* bild på relevant ämne */}
					<img
						src={blog.img}
						className="InfoBoxListImage rounded float-right"
						alt="..."
					></img>
					<div className="InfoBoxTextWrapper">
						{/* text om relevant ämne */}
						<h3 className="InfoBoxImpact">{blog.title}</h3>
						<ul className="InfoBoxImpactList">
							<li>
								<h4>1.</h4>
								<p>{blog.li_1}</p>
							</li>
							<li>
								<h4>2.</h4>
								<p>{blog.li_2}</p>
							</li>
							<li>
								<h4>3.</h4>
								<p>{blog.li_3}</p>
							</li>
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default InfoBoxList;
