import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Maybutton from './UI/Button/MayButton';

const PostItem = (props) => {

    return (
        <div>
            <div className="post">
                <div className="post_couner">
                    <strong>{props.post.id}, {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <Maybutton onClick={() => props.remuve(props.post)}>delete</Maybutton>
                    <Link to={`/posts/${props.post.id}`}>
                        <Maybutton>open</Maybutton>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
