import React from 'react';
import Maybutton from './UI/Button/MayButton';
import MyInput from './UI/Input/MyInput';

const Postform = ({ create }) => {

    const [post, setPost] = React.useState({ title: "", body: "" })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: "", body: "" })
    }


    return (
        <form>
            <MyInput
                value={post.title}
                type="text"
                placeholder="Названия поста"
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                type="text"
                placeholder="Описания поста"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            <Maybutton
                onClick={addNewPost}
            >
                Создать пост
            </Maybutton>
        </form>
    );
}

export default Postform;
