import { combineReducers } from "redux";
import { ProductReducers, selectedProductReducers } from "./ProductReducers";
const reducers= combineReducers({
    allProducts: ProductReducers,
    product: selectedProductReducers,
})
export default reducers