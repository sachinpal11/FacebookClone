import React, { useState } from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import CreatePost from './Components/CreatePost'
import PostList from './Components/PostList'
import PostListProvider from './Store/Postlist-store'
import { Outlet } from 'react-router-dom'

function App() {
  return (

    <PostListProvider>
      <Header />
      <div className='h-[90vh] w-full flex'>
        <Sidebar />
        <div className='w-full h-full'>
          <Outlet />
        </div>
      </div>
    </PostListProvider>

  )
}

export default App
