export const SearchForRestaurants = (props) => {
  const { city, page } = props;
  return function (dispatch) {
    if (page === "landingPage") {
      fetch(`/restaurants/landingpage/${city}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(restaurant(data, "LANDINGPAGE"));
        });
    } else if (page === "mainPage") {
      fetch(`/restaurants?city=${city}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(restaurants(data, "MAINPAGE"));
        });
    }
  };
};

const restaurant = (data, type) => {
  return {
    type,
    payload: data.businesses,
  };
};

const restaurants = (data, type) => {
  return {
    type,
    payload: data,
  };
};
