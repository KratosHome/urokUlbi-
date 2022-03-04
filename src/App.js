import React, { useEffect, useState } from "react";
import PostService from "./components/API/PostServis";
import { usePosts } from "./components/hooks/usePosts";
import Postfilter from "./components/PostFilter";
import Postform from "./components/postForm";
import Postlist from "./components/PostList";
import "./components/styles/app.css"
import Maybutton from "./components/UI/Button/MayButton";
import Loader from "./components/UI/Loader/Loader";
import MayModal from "./components/UI/MayModal/MayModal";


function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
 
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const remuvePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }



  async function fetchPosts(){
    setIsPostsLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    setIsPostsLoading(false)
  }

  useEffect(()=>{
    fetchPosts()
  },[])

  return (
    <div className="App">
      <Maybutton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пользователя
      </Maybutton>
      <MayModal visible={modal} setVisible={setModal}>
        <Postform create={createPost} />
      </MayModal>

      <hr style={{ margin: "15px 0" }} />
      <Postfilter filter={filter} setFilter={setFilter} />
      {isPostsLoading
      ? <Loader/>
      : <Postlist remuve={remuvePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
      }
    </div>
  );
}

export default App;
