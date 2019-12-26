import React, { Component } from "react";
import "./About.css";
import NavBar from "../navBar/NavBar";

// @inject('UserStore')
class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="container">
          <div id="profile-container">
            <ul className="responsive_grid">
              <li>
                <div className="team_member">
                  <div className="info">
                    <img
                      src='https://media.licdn.com/dms/image/C4E03AQFGjKhkmrO3uw/profile-displayphoto-shrink_200_200/0?e=1582761600&v=beta&t=7XL6vZ6qAG0F9HGtDTwVUTJ6-DpJ_I9FAC4pVPRb4K0'
                      alt="Dudi"
                    />
                    <h5>Ahmed Kahil</h5>
                    <h6>From Ful to Full Stack</h6>
                  </div>
                  <div className="info_reveal">
                    <h6>
                      Contact
                      <br />
                      Ahmed Kheil
                    </h6>
                    <p>
                      <a href="mailto:kahildude@gmail.com">
                      kahildude@gmail.com
                      </a>
                    </p>
                    <p>(123) 555-1234 x1100</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="team_member">
                  <div className="info">
                    <img
                      src="https://media.licdn.com/dms/image/C4D03AQE5dckJXA84kQ/profile-displayphoto-shrink_200_200/0?e=1582761600&v=beta&t=Wmk2Nr6zOaMKZCKrAxZ9CyPoZlLUhCJDNcg4tg-PaIU"
                      alt=""
                    />
                    <h5>Rachel Aizenman</h5>
                    <h6>Front-End Developer</h6>
                  </div>
                  <div className="info_reveal">
                    <h6>
                      Contact
                      <br />
                      Rachel Aizenman
                    </h6>
                    <p>s.goodman@fbi.gov</p>
                    <p>(123) 555-1234 x1100</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="team_member">
                  <div className="info">
                    <img
                      src="https://media.licdn.com/dms/image/C5603AQFd-S8yR78Zkg/profile-displayphoto-shrink_200_200/0?e=1582761600&v=beta&t=-jqWQMILxdCMMc8kx43SBSrRtjGKw3e6BWe8B-BWPEI"
                      alt=""
                    />
                    <h5>Noam Lior</h5>
                    <h6>System Architect</h6>
                  </div>
                  <div className="info_reveal">
                    <h6>
                      Contact
                      <br />
                      Noam Lior
                    </h6>
                    <p>
                      <a href="mailto:address@addresss.com">
                        s.goodman@fbi.gov
                      </a>
                    </p>
                    <p>(123) 555-1234 x1100</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="info about-info" id="general-about">
            <h5>About Us</h5>
            <h6>
              A story of perseverance <br />
              The idea is simple. On the one hand there are people who want to
              give loans and get attractive interest rate on their money. On the
              other hand, there are people with a monthly salary of € 1,000 and
              up, who need a loan of up to 10,000 €. Peer 2 Peer makes the
              connection between them, verifies their ability to repay, and
              anonymously connect them. The result: higher interest rates for
              loan providers, and lower interest rates to borrowers. How can it
              be? When there is no need to pay for luxurious offices, branches,
              high salaries, bonuses and cups of tea... We can offer a great
              service at a lower cost. Peer 2 Peer does't have branches,
              thousands of employees or high overhead costs. Peer 2 Peer charges
              a transparent and clear fee and does not enjoy from interest rate
              margins. We did not invent it. Peer to Peer Lending enjoyed great
              success in the world and represents a growing share of the loans
              market in the world. people to people ... and everybody is happy.
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
