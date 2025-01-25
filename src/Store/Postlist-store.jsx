import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
    TotalPosts: [],
    UploadPost: () => { },
    DeletePost: () => { },
    AddInitialPost: () => { },
    loading: true
});

const PostReducer = (currPostList, action) => {
    let NewPostList = currPostList;
    if (action.type === "NEW_POST") {
        NewPostList = [...currPostList, { id: currPostList.length + 1, title: action.payload.title, body: action.payload.body, tags: action.payload.tags, reactions: action.payload.reactions, views: action.payload.views, userId: action.payload.userId }]
    }
    else if (action.type === "INITIAL_POSTS") {
        NewPostList = action.payload.Posts
    }
    else if (action.type === "DELETE_POST") {
        NewPostList = currPostList.filter((item) => item.userId !== action.payload)
    }
    return NewPostList;
}



const PostListProvider = ({ children }) => {
    const [TotalPosts, dispachTotalPosts] = useReducer(PostReducer, []);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) => {
                AddInitialPost(data.posts);
                setloading(false);
            });
    }, []);
    const UploadPost = (NewPost) => {
        const UploadNewPost = {
            type: "NEW_POST",
            payload: NewPost
        }
        // console.log(UploadNewPost.payload)
        dispachTotalPosts(UploadNewPost)
    }
    const DeletePost = (Post) => {
        const DeleteOldPost = {
            type: "DELETE_POST",
            payload: Post
        }
        dispachTotalPosts(DeleteOldPost)
    }
    const AddInitialPost = (Posts) => {
        const initialPost = {
            type: "INITIAL_POSTS",
            payload: { Posts }
        }
        dispachTotalPosts(initialPost)
    }
    return (
        <PostListContext.Provider value={{ TotalPosts, UploadPost, DeletePost, AddInitialPost, loading }}>
            {children}
        </PostListContext.Provider >
    )
}

export default PostListProvider
