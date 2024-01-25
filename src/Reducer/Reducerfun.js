import { act } from "react-dom/test-utils";

export const Reducerfun=(state,action)=>{
 const{Product, Cart, Searched,recentSearched}=state
     switch (action.type) {
        case "FETCH PRODUCT":
            return {...state, Product:action.payload}
            break;
            case "SEARCHED PRODUCTS":
                return {...state,Searched:[... action.payload],recentSearched:action.payload}
                break;
                case "ADD TO CART":
                    return {...state, Cart:[...state.Cart, action.payload]}
                    break;
                    case "REMOVE FROM CART":
                        return {...state, Cart:state.Cart.filter((cart)=>cart.id!==action.payload)}
                        break;


     
        default:
            break;
     }
    return state
}