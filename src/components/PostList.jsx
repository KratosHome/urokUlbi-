import React from 'react';
import PostItem from './PostItem';

const Postlist = ({ posts, title, remuve }) => {
    if(!posts.length){
        return(
            <h1 style={{textAlign: "center"}}>
                Постов не найдено
            </h1>
        )
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem remuve={remuve} number={index + 1} key={post.id} post={post} />
            )}
        </div>
    );
}

export default Postlist;
