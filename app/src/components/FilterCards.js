import React from "react";
import "../css/card.css";
import { Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { connect } from "react-redux";
import { metersToMiles } from "../functions/metersToMiles";
import { Like, Dislike } from "../actions/restaurant";

class FilterCards extends React.Component {
  addressHandler(arr) {
    let string = "";
    arr.forEach((address) => (string += address + " "));
    return string;
  }

  render() {
    const businesses = this.props.restaurants
      .filter((business) => business[this.props.filterPrice])
      .map((bus) => {
        const x = bus[this.props.filterPrice];
        const { businesses } = x;
        return businesses;
      });

    // console.log(businesses[0]);

    return (
      <div className="Card_Container">
        {businesses[0].map((business, index) => {
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
                {this.props.user.isAuthenticated && (
                  <Card.Body className="likeAndDislike">
                    <Button
                      variant="success"
                      onClick={(e) => {
                        this.props.Like(business.id, business);
                      }}
                    >
                      Like
                    </Button>
                    <Button
                      variant="danger"
                      onClick={(e) => {
                        this.props.Dislike(business.id, business);
                      }}
                    >
                      Dislike
                    </Button>
                    {/* {<Card.Text></Card.Text>} */}
                  </Card.Body>
                )}
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
    filterPrice: state.filterPrice,
    user: state.user,
    restaurants: state.restaurants,
  };
};

const FilteredCardsContainer = connect(mapStateToProps, { Like, Dislike })(
  FilterCards
);
export default FilteredCardsContainer;
