export const reducerfunction = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return (state = {
        ...state,
        products: action.payload,
      });

      break;
    case "ADD_TO_CART":
      return (state = {
        ...state,
        Cart: [action.payload, ...state.Cart],
      });
      break;
     case 'CART_UPDATE':
      return(
        state={
          ...state,
          Cart:[...state.Cart]
        }
      )
    case "CATEGORY":
      return (state = {
        ...state,
        Category: action.payload,
      });
      break;
      case 'REMOVE_FROM_CART':
        return state={
          ...state,
          Cart:state.Cart.filter((prod)=>(
            prod.id !== action.payload
          ))
        }
    default:
      break;
  }
};
