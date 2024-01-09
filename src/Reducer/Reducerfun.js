export const Reducerfun=(state,action)=>{
 const{Product, Cart}=state
     switch (action.type) {
        case "FETCH PRODUCT":
            return {...state, Product:action.payload}
            break;
     
        default:
            break;
     }
    return state
}