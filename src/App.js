import React, { useMemo, useRef, useState } from "react";
import Postform from "./components/postForm";
import Postlist from "./components/PostList";
import "./components/styles/app.css"
import MyInput from "./components/UI/Input/MyInput";
import MaySelect from "./components/UI/select/MaySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "I love javaScript", body: "description" },
    { id: 2, title: "gggg", body: "1111" },
    { id: 3, title: "аааа", body: "fvdfvsvfs" }
  ])

  const [selectedSort, setSelectedSort] = useState("")
  const [saerchQwery, setSearchQwery] = useState("")


  const sortedPost = useMemo(() => {
    console.log("fvfvsdf")
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return posts
    }
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(posts => posts.title.toLocaleUpperCase().includes(saerchQwery.toLocaleUpperCase()))
  }, [saerchQwery,sortedPost])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const remuvePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelectedSort(sort)
  }


  return (
    <div className="App">
      <Postform
        create={createPost}
      />
      <hr style={{ margin: "15px 0" }} />
      <MyInput
        value={saerchQwery}
        onChange={e => setSearchQwery(e.target.value)}
        placeholder='Пошук'
      />
      <MaySelect
        value={selectedSort}
        onChange={sortPost}
        defoltValue="Сортировка"
        oprions={[
          { value: "title", name: "по названию" },
          { value: "body", name: "по описанию" }
        ]}
      />
      {sortedAndSearchedPosts.length !== 0
        ? <Postlist remuve={remuvePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
        : <h1 style={{ textAlign: "center" }}>
          Постов нету
        </h1>}
    </div>
  );
}

export default App;
