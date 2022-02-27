import React from 'react';

const Postitem = (props) => {
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
                    <button>delete</button>
                </div>
            </div>
        </div>
    );
}

export default Postitem;
