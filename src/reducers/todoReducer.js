const initailTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];
// https://react.vlpt.us/mashup-todolist/02-manage-state.html
// const todoReducer = (state=initailTodos, action) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//           //TODO
//           return Object.assign({}, state, {
//             cartItems: [...state.cartItems, action.payload],
//           });

//         // case REMOVE_FROM_CART:
//         //   //TODO
//         //   let currentItem = state.cartItems.filter((el) => el.itemId !== action.payload.itemId);
//         //   return Object.assign({}, state, {
//         //     cartItems: currentItem,
//         //   });

//         // case SET_QUANTITY:
//         //   let idx = state.cartItems.findIndex((el) => el.itemId === action.payload.itemId);
//         //   //TODO
//         //   return {
//         //     ...state,
//         //     cartItems: [...state.cartItems.slice(0, idx), action.payload, ...state.cartItems.slice(idx + 1)],
//         //   };

//         default:
//           return state;
//       }
// };

// export default todoReducer;
