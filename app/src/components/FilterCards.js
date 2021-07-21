import React from "react";
import "../css/card.css";
import { Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { connect } from "react-redux";
import { metersToMiles } from "../functions/metersToMiles";
import { Like, Dislike } from "../actions/restaurant";
import { GetStatus } from "../actions/restaurant";

class FilterCards extends React.Component {
  addressHandler(arr) {
    let string = "";
    arr.forEach((address) => (string += address + " "));
    return string;
  }

  Getlikes(id) {
    if (
      this.props.savedRestaurants.likes.some((obj) => {
        console.log(obj[id] === this.props.user._id);
        return obj[id] === this.props.user._id;
      })
    ) {
      return true;
    }
    return false;
  }

  GetDislikes(id) {
    if (
      this.props.savedRestaurants.dislikes.some(
        (obj) => obj[id] === this.props.user._id
      )
    ) {
      return true;
    }
    return false;
  }

  render() {
    const businesses = this.props.restaurants
      .filter((business) => business[this.props.filterPrice])
      .map((bus) => {
        const x = bus[this.props.filterPrice];
        return x;
      });

    // console.log(businesses[0]);
    return (
      <div className="Card_Container">
        {businesses[0].map((business) => {
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
                <Card.Body className="main_body">
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
                  <Card.Body className="likeAndDislikeText">
                    {this.Getlikes(business.id) && <div>Liked</div>}
                    {this.GetDislikes(business.id) && <div>Disliked</div>}
                  </Card.Body>
                </Card.Body>
                {this.props.user.isAuthenticated && (
                  <Card.Body className="likeAndDislike">
                    <Button
                      variant={
                        this.Getlikes(business.id)
                          ? "outline-success"
                          : "success"
                      }
                      onClick={(e) => {
                        this.props.Like(business.id, business);
                        this.props.GetStatus();
                      }}
                    >
                      Like
                    </Button>
                    <Button
                      variant={
                        this.GetDislikes(business.id)
                          ? "outline-danger"
                          : "danger"
                      }
                      onClick={(e) => {
                        this.props.Dislike(business.id, business);
                        this.props.GetStatus();
                      }}
                    >
                      Dislike
                    </Button>
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
    savedRestaurants: state.savedRestaurants,
  };
};

const FilteredCardsContainer = connect(mapStateToProps, {
  Like,
  Dislike,
  GetStatus,
})(FilterCards);
export default FilteredCardsContainer;
