export const SearchForRestaurants = (props) => {
    const { city, page } = props;
    return function (dispatch) {
        if (page === "landingPage") {
            fetch(
                `${process.env.REACT_APP_BASE_URL}restaurants/landingpage/${city}`
            )
                .then((res) => res.json())
                .then((data) => {
                    dispatch(restaurant(data.businesses, "LANDINGPAGE"));
                });
        } else if (page === "mainPage") {
            fetch(`${process.env.REACT_APP_BASE_URL}restaurants?city=${city}`)
                .then((res) => res.json())
                .then((data) => {
                    dispatch(restaurants(data, "MAINPAGE"));
                });
        }
    };
};

export const clearRestaurants = (props) => {
    const { page } = props;
    return function (dispatch) {
        if (page === "landingPage") {
            dispatch(restaurants([], "RESET"));
        } else if (page === "mainPage") {
            dispatch(restaurants([], "MAINRESET"));
        }
    };
};

const restaurant = (data, type) => {
    return {
        type,
        payload: data,
    };
};

const restaurants = (data, type) => {
    return {
        type,
        payload: data,
    };
};
