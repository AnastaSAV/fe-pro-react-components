import React from "react";

const Section = (props) => {
	return (
		<section className="post">
			{props.children}
		</section>
	)
};
export default Section;