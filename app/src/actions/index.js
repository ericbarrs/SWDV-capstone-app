export const test = () =>{
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
			.then((post) => {
				dispatch(testing(post));
			})
    }
}

const testing = (post) =>{
    return {
		type: "testing",
		payload: post,
	};
}
