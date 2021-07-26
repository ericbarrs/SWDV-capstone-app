import React from "react";
import "../css/card.css";
import {
    Card,
    Button,
    Tooltip,
    OverlayTrigger,
    Container,
} from "react-bootstrap";
import { connect } from "react-redux";
import { metersToMiles } from "../functions/metersToMiles";
import { Like, Dislike } from "../actions/restaurant";
import { GetFavs } from "../actions/favs";

class RandomCard extends React.Component {
    state = {
        rand: 0,
    };
    addressHandler(arr) {
        let string = "";
        arr.forEach((address) => (string += address + " "));
        return string;
    }

    Getlikes(id) {
        if (this.props.favs.some((obj) => obj.id.toString() === id)) {
            return true;
        }
        return false;
    }

    getRandom() {
        const x = Math.floor(Math.random() * (this.props.random.length - 1));
        this.setState({ rand: x });
    }

    componentDidMount() {
        const x = Math.floor(Math.random() * (this.props.random.length - 1));
        this.setState({ rand: x });
    }

    render() {
        const business = this.props.random[this.state.rand];
        return (
            <Container>
                <div
                    className="Card_Container"
                    style={{ justifyContent: "center" }}
                >
                    <div className="Cards" id={business.id} key={business.id}>
                        <Card style={{ width: "18rem" }}>
                            <OverlayTrigger
                                trigger="click"
                                className="overlay"
                                placement="bottom-start"
                                overlay={
                                    <Tooltip id="button-tooltip-2">
                                        {business.categories.map(
                                            (category, index) => {
                                                if (
                                                    business.categories.length -
                                                        1 ===
                                                    index
                                                ) {
                                                    return (
                                                        <span key={index}>
                                                            {category.title}{" "}
                                                        </span>
                                                    );
                                                }
                                                return (
                                                    <span key={index}>
                                                        {category.title + ", "}{" "}
                                                    </span>
                                                );
                                            }
                                        )}
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
                                        {this.addressHandler(
                                            business.location.display_address
                                        )}
                                    </a>
                                </div>
                                <div className="info">
                                    <div className="isOpen">
                                        {business.is_closed ? "Closed" : "Open"}
                                    </div>
                                    <div>Reviews: {business.review_count}</div>
                                </div>
                                <div>
                                    {metersToMiles(business.distance)} miles
                                </div>
                                <div>Yelp Rating: {business.rating}</div>
                                <div>Price: {business.price}</div>
                                <Card.Body className="likeAndDislikeText">
                                    {this.Getlikes(business.id) && (
                                        <div>Liked</div>
                                    )}
                                </Card.Body>
                            </Card.Body>
                            {this.props.user.isAuthenticated && (
                                <Card.Body className="likeAndDislike">
                                    <Button
                                        variant={
                                            this.Getlikes(business.id) === true
                                                ? "outline-success"
                                                : "success"
                                        }
                                        onClick={(e) => {
                                            this.props.Like(
                                                business.id,
                                                business
                                            );
                                            this.props.GetFavs();
                                        }}
                                    >
                                        Like
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={(e) => {
                                            this.props.Dislike(
                                                business.id,
                                                business
                                            );
                                            this.props.GetFavs();
                                        }}
                                    >
                                        Dislike
                                    </Button>
                                </Card.Body>
                            )}
                            <Button
                                variant="primary"
                                onClick={(e) => {
                                    this.getRandom();
                                }}
                            >
                                Next
                            </Button>
                        </Card>
                    </div>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favs: state.favs,
        user: state.user,
    };
};

const FilteredCardsContainer = connect(mapStateToProps, {
    Like,
    Dislike,
    GetFavs,
})(RandomCard);
export default FilteredCardsContainer;
