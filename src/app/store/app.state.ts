import { blogsReducer, pagesReducer } from "../pages/store/pages.reducer";

export interface count {
    score: number
}



export const AppState = {
    count: pagesReducer,
    blog: blogsReducer
}