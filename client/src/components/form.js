import React from 'react';

const starImg = [];

const startList = function () {
  for (let i = 0; i < 3; i++) {
    starImg.push(
      <img
        className="agent-img"
        src="https://s3-us-west-1.amazonaws.com/sidebar-side/tempsnip.png"
        alt="stars"
      />,
    );
  }
  for (let j = 0; j < 2; j++) {
    starImg.push(
      <img
        className="agent-img"
        src="https://s3-us-west-1.amazonaws.com/sidebar-side/tempsnip2.png"
        alt="stars"
      />,
    );
  }
};
startList();

//const size = 5;

const TopBar = props => (
  <article id="ARTICLE_3">
    <div id="TOP">
      <h2 className="contact">CONTACT AGENT</h2>
      <form id="ca-agent">
        <div id="DIV_1">
          <div id="DIV_2">
            <div id="nameFill">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                id="NAME"
              />
              {/* <p id="P_5">
                                Please enter your name.
                            </p> */}
            </div>
            <div id="phoneFill">
              <input name="phone" type="tel" placeholder="Phone" id="PHONE" />
              {/* <p id="P_8">
                                Please enter a valid phone number, beginning with + for international numbers.
                            </p> */}
            </div>
            <div id="emailFill">
              <input name="email" type="email" placeholder="Email" id="EMAIL" />
              {/* <p id="P_11">
                                Please enter a valid email address.
                            </p> */}
            </div>
          </div>
          <div id="messageFill">
            <textarea name="message" id="MESSAGE">
              I am interested in 1665 Euston Rd, SAN MARINO, CA 91108.
            </textarea>
            {/* <p id="P_14">
                            Please fill in a valid message.
                        </p> */}
          </div>
          <div id="submitButton">
            <button type="submit" id="submit">
              <span id="contact">Contact Agent</span>
            </button>
          </div>
          <div id="check">
            <input
              id="INPUT_1"
              name="preapproval"
              type="checkbox"
              value="true"
            />
            <label id="LABEL_1">I want financing information</label>
          </div>
          <p className="agreement">
            By pressing Contact Agent, you agree that Zillow Group and real
            estate professionals may call/text you about your inquiry, which may
            involve use of automated means and prerecorded/artificial voices.
            You don't need to consent as a condition of buying any property,
            goods or services. Message/data rates may apply. You also agree to
            our Terms of Use. Zillow does not endorse any real estate
            professionals.
          </p>
          <hr className="separator" />
          {props.topInfo.map((item) => (
            <div id="recipients" className="container">
              {/* <div className='sig-content'> */}
              <div className="sig-photo">
                <div className="sig-photo-container">
                  <input
                    id="first-select"
                    className="select-input"
                    type="radio"
                  />
                  <label id="first-pic" className="select-label">
                    <img
                      className="agent-pic"
                      src={item.imageurl}
                    />
                  </label>
                </div>
              </div>
              <div className="sig-info">
                <div className="display-name">
                  <a href="#" className="profile-link">
                    <span className="name">{item.name}</span>
                  </a>
                </div>
                <span className="display-rating">
                  <span className="stars-container">
                    <a href="#" className="stars-link">
                      <span className="stars-rating">{starImg}</span>
                    </a>
                  </span>
                  <span className="count-rating">
                    (
                    <a href="#" className="ratings-num">{item.rating}</a>
                    )
                  </span>
                </span>

                <span className="recent-sales">
                  <a href="#" className="profile-link">
                    <span className="sales-count">
                      {item.sales}
                    </span>
                    <span className="sales-text">Recent sales</span>
                  </a>
                </span>
                <span className="phone-num">
                  {item.phone}
                </span>
              </div>
              <span className="agent-badge">Listing Agent</span>
            </div>
          ))}
        </div>
      </form>
    </div>
  </article>
);
export default TopBar;
