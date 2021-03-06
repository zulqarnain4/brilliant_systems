import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Content extends Component {
  render() {
    return (
      <section className="contact-info-area ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <FontAwesomeIcon icon={["fas", "at"]} />
                </div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:zulkarnain@brilliant.net">
                    support@brilliant.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
                </div>
                <h3>Address</h3>
                <p>504, BUK road, Opposite Buk Old site, Kano</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
