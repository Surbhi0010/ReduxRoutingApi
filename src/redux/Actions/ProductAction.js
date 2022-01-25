import { ActionTypes } from "../constants/ActionTypes"

 const setproducts=(products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products}
}
export default setproducts

export const selectedproducts=(product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product}
}