import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostList from './Components/PostList.jsx'
import CreatePost from './Components/CreatePost.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
