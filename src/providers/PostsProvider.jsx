import React, { useReducer } from 'react'
import { PostsContext } from '../context'
import { initialState, postReducer } from '../reducers/postReducer'

function PostsProvider({children}) {
    const [state, dispatch] = useReducer(postReducer, initialState)
    return (
        <PostsContext.Provider value={{state, dispatch}}>
            {children}
        </PostsContext.Provider>
    )
}

export default PostsProvider
