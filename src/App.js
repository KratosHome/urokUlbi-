import React, { useRef, useState } from "react";
import Postform from "./components/postForm";
import Postlist from "./components/PostList";
import "./components/styles/app.css"
import Maybutton from "./components/UI/Button/MayButton";
import MyInput from "./components/UI/Input/MyInput";
import MaySelect from "./components/UI/select/MaySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "I love javaScript", body: "description" },
    { id: 2, title: "gggg", body: "1111" },
    { id: 3, title: "аааа", body: "fvdfvsvfs" }
  ])

  const [selectedSort, setSelectedSort] = useState("")

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const remuvePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b)=> a[sort].localeCompare(b[sort])))
}

return (
  <div className="App">
    <Postform
      create={createPost}
    />
    <hr style={{ margin: "15px 0" }} />
    <MaySelect
      value={selectedSort}
      onChange={sortPost}
      defoltValue="Сортировка"
      oprions={[
        { value: "title", name: "по названию" },
        { value: "body", name: "по описанию" }
      ]}
    />
    {posts.length !== 0
      ? <Postlist remuve={remuvePost} posts={posts} title={"Список постов"} />
      : <h1 style={{ textAlign: "center" }}>
        Постов нету
      </h1>}
  </div>
);
}

export default App;
