import { SET_ERRORS } from "../types";
const initialState = {};

export default function(state = initialState, action) {
   switch (action.type) {
      case SET_ERRORS:
         return action.payload;
      default:
         return state;
   }
}