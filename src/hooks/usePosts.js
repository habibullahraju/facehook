import { useContext } from "react"
import { PostsContext } from "../context"

export const usePosts = () =>{
    return useContext(PostsContext);
}