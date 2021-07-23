import React from "react";
import "../css/card.css";
import { Card, Tooltip, OverlayTrigger } from "react-bootstrap";
import { connect } from "react-redux";
import { metersToMiles } from "../functions/metersToMiles";

class Cards extends React.Component {
  addressHandler(arr) {
    let string = "";
    arr.forEach((address) => (string += address + " "));
    return string;
  }

  render() {
    return (
      <div className="Card_Container">
        {this.props.LandingPageRest.map((business) => {
          return (
            <div className="Cards" id={business.id} key={business.id}>
              <Card style={{ width: "18rem" }}>
                <OverlayTrigger
                  trigger="click"
                  className="overlay"
                  placement="bottom-start"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      {business.categories.map((catogories, index) => {
                        if (business.categories.length - 1 === index) {
                          return <span key={index}>{catogories.title} </span>;
                        }
                        return (
                          <span key={index}>{catogories.title + ", "} </span>
                        );
                      })}
                    </Tooltip>
                  }
                >
                  <Card.Img
                    className="Cards_image"
                    variant="top"
                    src={business.image_url}
                  />
                </OverlayTrigger>
                <Card.Body>
                  <Card.Title>
                    <a href={business.url}>{business.name}</a>
                  </Card.Title>

                  <div>
                    <a
                      href={`http://maps.google.com/?q=${this.addressHandler(
                        business.location.display_address
                      )}`}
                    >
                      {this.addressHandler(business.location.display_address)}
                    </a>
                  </div>
                  <div className="info">
                    <div className="isOpen">
                      {business.is_closed ? "Closed" : "Open"}
                    </div>
                    <div>Reviews: {business.review_count}</div>
                  </div>
                  <div>{metersToMiles(business.distance)} miles</div>
                  <div>Yelp Rating: {business.rating}</div>
                  <div>Price: {business.price}</div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    LandingPageRest: state.LandingPageRest,
  };
};

const CardsContainer = connect(mapStateToProps)(Cards);
export default CardsContainer;
