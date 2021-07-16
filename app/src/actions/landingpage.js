export const landingPageSearch = (props) => {
  const { city } = props;
  return function (dispatch) {
    fetch(`/restaurants/landingpage/${city}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(restaurants(data));
      });
  };
};

const restaurants = (data) => {
  return {
    type: "LandingPage",
    payload: data.businesses,
  };
};
