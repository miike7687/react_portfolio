import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio-container" className="container justify-content-center">
      {/* <!-- set up a portfolio header and centered --> */}
      <div className="row justify-content-center">
        <h2 id="portfolio-header">Mike's Portfolio</h2>
      </div>
      <hr />
      {/* <!-- set up a row to hold the 2 columns --> */}
      <div className="row justify-content-center">
        {/* <!-- first column taking up half the container --> */}
        <div className="col-md-4">
          {/* <!-- card with info about my first Homework assignment --> */}
          <div className="card card-position">
            <img
              src="https://securityintelligence.com/wp-content/uploads/2018/10/si-eight-character-password-feature-630x330.jpg"
              className="card-img-top"
              alt="Homework"
            />
            <div className="card-body">
              <h5 className="card-title">PASSWORD GENERATOR</h5>
              <p className="card-text">Need a complex password?</p>
              <a
                href=" https://miike7687.github.io/Password_Generator_HW3/"
                className="btn btn-primary"
              >
                Password Generator
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          {/* <!-- 2nd column, first row--> */}
          <div className="card card-position">
            <img
              src="https://pmcdeadline2.files.wordpress.com/2020/04/parks-and-recreation-2.jpg?w=1000"
              className="card-img-top"
              alt="Preparation"
            />
            <div className="card-body">
              <h5 className="card-title">PARKS AND REC QUIZ</h5>
              <p className="card-text">Take my Parks and Rec themed quiz!</p>
              <a
                href="https://miike7687.github.io/Code_Quiz/"
                className="btn btn-primary"
              >
                Quiz
              </a>
            </div>
          </div>
        </div>
        {/* <!-- 3rd column, 1st row taking up the other half of the container --> */}
        <div className="col-md-4">
          {/* <!-- card with info about my first coding activity --> */}
          <div className="card card-position" id="schedule-card">
            <img
              src="https://shoptech.media/wp-content/uploads/2019/11/Manage-Important-Tasks-In-One-Place-with-Prestashop-thirtybees-Task-Scheduler-module.jpg"
              className="card-img-top"
              alt="Practice"
            />
            <div className="card-body">
              <h5 className="card-title">BOOTCAMP SCHEDULER</h5>
              <p className="card-text">
                A workday scheduler that adjusts to real time.
              </p>
              <a
                href="https://miike7687.github.io/workday_scheduler/"
                className="btn btn-primary"
              >
                Scheduler
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          {/* <!-- 2nd row, 1st column card with info about a website I created for fun --> */}
          <div className="card card-position">
            <img
              src="https://mediaweb.fox23.com/weather/5day.jpg"
              className="card-img-top"
              alt="Hobbies"
            />
            <div className="card-body">
              <h5 className="card-title">WEATHER FORECAST</h5>
              <p className="card-text">
                Need to know the current or 5-day weather in any city?
              </p>
              <a
                href="file:///Users/michaelhaber/Desktop/Weather%20App%20HW/weather.html"
                className="btn btn-primary"
              >
                Weather
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-position">
            <img
              src="https://www.cbc.ca/kidscbc2/content/the_feed/_848/LMTY_jokes_header.jpg"
              className="card-img-top"
              alt="Hobbies"
            />
            <div className="card-body">
              <h5 className="card-title">THE JOKE FACTORY</h5>
              <p className="card-text">
                Who needs a pick-me-up living in 2020? Enter our joke factory!
              </p>
              <a
                href="https://mkgude.github.io/marian-mike-jessica-camrynne-Joke-Factory/"
                className="btn btn-primary"
              >
                Laugh
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-position">
            <img
              src="https://i.github-camo.com/c78b3c01ca7753c84d26706b248adf236cda7d4f/68747470733a2f2f636c6f75642e67697468756275736572636f6e74656e742e636f6d2f6173736574732f3337383032332f31303031333038372f32346363633765632d363134392d313165352d393765612d3533613834326137313565612e706e67"
              className="card-img-top"
              alt="Read Me Example"
            />
            <div className="card-body">
              <h5 className="card-title">READ ME GENERATOR</h5>
              <p className="card-text">
                Need a high-quality READ ME written out for your next app? See
                how it works here!
              </p>
              <a
                href="https://drive.google.com/file/d/1zkOKmEXli1D9Re40_Zn79N_PexAbEqTN/view"
                className="btn btn-primary"
              >
                Read Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          {/* <!-- 2nd row, 1st column card with info about a website I created for fun --> */}
          <div className="card card-position">
            <img
              src="https://i.pinimg.com/originals/53/af/5d/53af5d7cc1fbf52057109d14b3e21ffb.jpg"
              className="card-img-top"
              alt="Workout"
            />
            <div className="card-body">
              <h5 className="card-title">FITNESS TRACKER</h5>
              <p className="card-text">
                An easy way to maintain your health and log your results.
              </p>
              <a
                href="https://dry-temple-34699.herokuapp.com/"
                className="btn btn-primary"
              >
                Fitness
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-position">
            <img
              src="https://cnet3.cbsistatic.com/img/_yzEPQWVhyypvW7zOAHTSnJf2LU=/1200x675/2020/07/31/bc892f23-c324-4125-83d4-50c196526dea/006-cash-money-dollar-bills-colorful-background-stimulus-2020.jpg"
              className="card-img-top"
              alt="Dollar Sign"
            />
            <div className="card-body">
              <h5 className="card-title">PROGRESSIVE BUDGET</h5>
              <p className="card-text">
                Check out this progressive budget app that updates even when
                offline!
              </p>
              <a
                href="https://fathomless-lowlands-29273.herokuapp.com/"
                className="btn btn-primary"
              >
                Budget
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-position">
            <img
              src="https://www.jing.fm/clipimg/detail/140-1407899_baseball-diamond-clipart-transparent.png"
              className="card-img-top"
              alt="Cartoon ball"
            />
            <div className="card-body">
              <h5 className="card-title">YANKEES TEAM DIRECTORY</h5>
              <p className="card-text">
                Want to search for a Yankee from a database of players?
              </p>
              <a
                href="https://github.com/miike7687/employee_directory"
                className="btn btn-primary"
              >
                Yankees
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          {/* <!-- 2nd row, 1st column card with info about a website I created for fun --> */}
          <div className="card card-position">
            <img
              src="https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/brand-4434-virtual-team-building-activities-road-tested-by-actual-remote-workers--1240x720.jpg"
              className="card-img-top"
              alt="Teamwork"
            />
            <div className="card-body">
              <h5 className="card-title">TEAM PROFILE GENERATOR</h5>
              <p className="card-text">
                An easy app to generate a profile for all of your employees. See
                how it works:
              </p>
              <a
                href="https://drive.google.com/file/d/1yKRQ7qa7pALPHKBaTh1so5o2ZfaVH7nS/view"
                className="btn btn-primary"
              >
                Team Generator
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-position">
            <img
              src="https://www.nicepng.com/png/detail/302-3027370_free-png-hamburger-png-pic-png-images-transparent.png"
              className="card-img-top"
              alt="Burger"
            />
            <div className="card-body">
              <h5 className="card-title">EAT DA BURGER</h5>
              <p className="card-text">
                Keep track of all the burgers you want to eat, create, and
                delete!
              </p>
              <a
                href="https://eatdaburgerhomeworkassignment.herokuapp.com/"
                className="btn btn-primary"
              >
                Burger Time
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-position">
            <img
              src="https://epmgaa.media.clients.ellingtoncms.com/img/croppedphotos/2020/06/23/StateCORRdeleteherpicBertino.jpg"
              className="card-img-top"
              alt="Education"
            />
            <div className="card-body">
              <h5 className="card-title">iCLASSROOM</h5>
              <p className="card-text">
                Educational app that allows students to collaborate, share
                notes, and check grades.
              </p>
              <a
                href="https://classroomhelper.herokuapp.com/"
                className="btn btn-primary"
              >
                Learn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
