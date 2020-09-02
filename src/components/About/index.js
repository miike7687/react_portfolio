import React from "react";

const About = () => {
  return (
    <div className="container1">
      <h2 id="about-me">ABOUT ME</h2>
      <hr />
      {/* <!-- Insert a horizontal card with an image and description --> */}
      <div className="card mb-3" style="max-width: 840px;">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="./public/Headshot1.png" className="card-img" alt="Mike" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Mike's Background</h5>
              <p className="card-text">
                Mike Haber is currently a history teacher and an aspiring
                software developer. His hobbies include being an avid New York
                Yankees fan, drawing/sketching, and directing live theatrical
                children's productions.
              </p>
              <p className="card-text">
                In his free time, Mike has worked on writing mystery/suspense
                novels, one of which he has self-published. Don't ask him for
                the title, though.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
