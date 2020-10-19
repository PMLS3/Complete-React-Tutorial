const initialState = {
  posts: [
    { id: 1, title: "hello", body: "test ereljklj" },
    { id: 2, title: "helsdfdaslo", body: "test ereljklj" },
    { id: 3, title: "hedfasdfllo", body: "testdfsdfsa ereljklj" },
  ],
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => action.id !== post.id);
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;
