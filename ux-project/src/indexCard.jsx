// react
import React from 'react';

// css
import './App.css';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// container component
const IndexCard = ({ blogs }) => {
	return (
		// använder en vanligt div som container pga react syntax
		<div>
			{/* använder .map för att visa rätt antal objekt i arrayen,
          samt skriver ut rätt innehåll på rätt plats */}
			{blogs.map((blog) => (
				<div className="CardWrapper">
					<div className="card bg-dark text-white">
						<div className="card-img-overlay">
							<img src={blog.img} className="cardImg" alt="alt"></img>
							<h5 className="card-title">{blog.title}</h5>
							<p className="card-text">{blog.body}</p>
							<button type="button" className="btn btn-outline-dark">
								Läs mer
								{/* använder ikon från font awsome */}
								<span className="btnIcon-Right">
									<FontAwesomeIcon icon={faChevronRight} />
								</span>
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default IndexCard;
