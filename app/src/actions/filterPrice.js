export const filterPrice = (filter) => {
    return function (dispatch) {
        dispatch(filtered(filter));
    };
};

const filtered = (filterList) => {
    return {
        type: "FILTER",
        payload: filterList,
    };
};
