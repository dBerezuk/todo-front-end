import { RootReducer } from './../rootReducer';

//TODO: на будущее делать более разделенные селекторы.
export const getAuth = (state: RootReducer) => state.auth;
