import React from 'react';
import PostItem from './PostItem';

const Postlist = ({ posts, title, remuve }) => {
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
