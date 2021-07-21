export const SearchForRestaurants = (props) => {
  const { city, page } = props;
  return function (dispatch) {
    if (page === "landingPage") {
      fetch(
        `https://mylocalfood-server.herokuapp.com/restaurants/landingpage/${city}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(restaurant(data, "LANDINGPAGE"));
        });
    } else if (page === "mainPage") {
      fetch(`https://mylocalfood-server.herokuapp.com/restaurants?city=${city}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(restaurants(data, "MAINPAGE"));
        });
    }
  };
};

export const clearRestaurants = () => {
  return function (dispatch) {
    dispatch(restaurants([], "RESET"));
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
