export const Reducerfun=(state,action)=>{
 const{Product, Cart, Searched,recentSearched}=state
     switch (action.type) {
        case "FETCH PRODUCT":
            return {...state, Product:action.payload}
            break;
            case "SEARCHED PRODUCTS":
                return {...state,Searched:[... action.payload],recentSearched:action.payload}
                break;


     
        default:
            break;
     }
    return state
}