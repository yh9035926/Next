export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번째 게시글금 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://placeimg.com/200/100/any",
        },
        {
          src: "https://placeimg.com/200/100/any",
        },
        {
          src: "https://placeimg.com/200/100/any",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          Content: "우와 개장판이 나왔군요",
        },
        {
          User: {
            nickname: "hero",
          },
          Content: "만두나 먹어야지",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다",
  User: {
    id: 1,
    nickname: "제로소",
  },
  Images: [],
  Comments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default rootReducer;
