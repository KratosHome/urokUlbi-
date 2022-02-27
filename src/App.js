import React, { useState } from "react";
import Postitem from "./components/PostItem";
import "./components/styles/app.css"

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "I love javaScript", body: "description" },
    { id: 2, title: "I love javaScript", body: "description" },
    { id: 3, title: "I love javaScript", body: "description" }
  ])


  return (
    <div className="App">
      {posts.map(post => <Postitem key={id} post={post}/>)}
    </div>
  );
}

export default App;
