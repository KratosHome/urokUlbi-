import React from 'react';
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
                <div className="post_btm">
                    <Maybutton onClick={() => props.remuve(props.post)}>delete</Maybutton>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
