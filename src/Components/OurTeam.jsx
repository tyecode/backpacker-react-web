import React from "react";

// Import Assets

import Team1 from "../assets/images/teams/team-1.jpg";
import Team2 from "../assets/images/teams/team-2.jpg";
import Team3 from "../assets/images/teams/team-3.jpg";
import Team4 from "../assets/images/teams/team-4.jpg";
import Team5 from "../assets/images/teams/team-5.jpg";

const OurTeam = () => {
    return (
        <section className="our-team">
            <div className="container">
                <div className="content-header">Our team</div>
                <p className="content-info">
                    Backpacker Designers are our gems. They have been carefully handpicked for their love of travel and their commitment to share 
                    their first-hand knowledge of the destinations they visit. Our team spends lot of time exploring the wonders of the world and seeking unique experiences, 
                    so that they can give honest advice and perfectly craft the itinerary that you are dreaming of. Their ability to provide extraordinary experiences is paramount and 
                    each of them prides themselves on exceeding client expectations. We are exceptionally proud of each one of them.
                </p>
            </div>
            <div className="container">
                <div className="our-team--teams">
                    <div className="teams-wrapper">
                        <div className="teams-img"><img className="team-1" src={Team1} alt="" /></div>
                        <div className="teams-name">Darcy Snyder</div>
                        <div className="teams-position">Founder & CEO</div>
                        <div className="teams-social-media">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="teams-wrapper">
                        <div className="teams-img"><img className="team-1" src={Team2} alt="" /></div>
                        <div className="teams-name">Michelle Sutton</div>
                        <div className="teams-position">Office & Accounts Manager</div>
                        <div className="teams-social-media">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="teams-wrapper">
                        <div className="teams-img"><img src={Team3} alt=""/></div>
                        <div className="teams-name">Bruno Dittman</div>
                        <div className="teams-position">Senior Travel Designer</div>
                        <div className="teams-social-media">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="faName-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="teams-wrapper">
                        <div className="teams-img"><img src={Team4} alt="" /></div>
                        <div className="teams-name">Kevin Wright</div>
                        <div className="teams-position">Travel Designer</div>
                        <div className="teams-social-media">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="teams-wrapper">
                        <div className="teams-img"><img src={Team5} alt="" /></div>
                        <div className="teams-name">Sabrina Hayward</div>
                        <div className="teams-position">Travel Designer</div>
                        <div className="teams-social-media">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurTeam;