import React from "react";

export default function Card({post}) {
    return (
        <div className="col-lg-6">
            <div className="member">
                <div className="">
                    <h4>{post.title}</h4>
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <span>Oleh {post.author}</span>
                        </div>
                        <div className="">
                            <small>Dibuat {new Date(post.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</small>
                        </div>
                    </div>
                    <p>{post.content}</p>
                </div>
            </div>
        </div>
    )
}