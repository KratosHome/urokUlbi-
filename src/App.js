import React, { useMemo, useRef, useState } from "react";
import Postfilter from "./components/PostFilter";
import Postform from "./components/postForm";
import Postlist from "./components/PostList";
import "./components/styles/app.css"
import Maybutton from "./components/UI/Button/MayButton";
import MayModal from "./components/UI/MayModal/MayModal";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "I love javaScript", body: "description" },
    { id: 2, title: "gggg", body: "1111" },
    { id: 3, title: "аааа", body: "fvdfvsvfs" }
  ])

  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false)

  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return posts
    }
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(posts => posts.title.toLocaleUpperCase().includes(filter.query.toLocaleUpperCase()))
  }, [filter.query, sortedPost])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const remuvePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

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
      <Postlist remuve={remuvePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
    </div>
  );
}

export default App;
