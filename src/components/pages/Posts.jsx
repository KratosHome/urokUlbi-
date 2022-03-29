import React, { useEffect, useState } from "react";
import { useFetshing } from '../hooks/useFetsing';
import PostService from '../API/PostServis';
import { getPageCount } from '../utils/pages';
import MayModal from '../UI/MayModal/MayModal';
import Maybutton from '../UI/Button/MayButton';
import Postfilter from '../PostFilter';
import Loader from '../UI/Loader/Loader';
import Pagination from "../UI/Pagination/Pagination";
import { usePosts } from '../hooks/usePosts';
import Postform from '../postForm';
import Postlist from '../PostList';




function Posts() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  // Пагінація 
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetshing, isLoading, eror] = useFetshing(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCoint = response.headers["x-total-count"]
    setTotalPage(getPageCount(totalCoint, limit))
  })



  const changePage = (page) => {
    setPage(page)
  }


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const remuvePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  useEffect(() => {
    fetshing()
  }, [page])

  return (
    <div className="App">
      <Maybutton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </Maybutton>
      <MayModal visible={modal} setVisible={setModal}>
        <Postform create={createPost} />
      </MayModal>
      <hr style={{ margin: "15px 0" }} />
      <Postfilter filter={filter} setFilter={setFilter} />
      {eror &&
        <h1>Помилка ${eror}</h1>}
      {isLoading
        ? <Loader />
        : <Postlist remuve={remuvePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
      }
      <Pagination page={page} totalPage={totalPage} changePage={changePage} />

    </div>
  );
}

export default Posts;
