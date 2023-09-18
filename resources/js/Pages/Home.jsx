import { Head, usePage } from "@inertiajs/inertia-react";
import Base from "../Layouts/Base";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

export default function Home() {
    const {errors} = usePage().props;

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        content: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormReset = () => {
        setFormData({
            title: "",
            author: "",
            content: "",
        });
    };

    const storePost = async (e) => {
        e.preventDefault();
        Inertia.post('/post/store', formData, {
            onSuccess: () => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Bulletin has been posted successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });
                handleFormReset();
            }
        });
    };

    return (
        <>
            <Head title="Write Well - Home" />
            <Base>
                <section id="why-us" className="why-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="content">
                                    <h3>Create Your Bulletin Board Post</h3>
                                    <form onSubmit={storePost} method="post" role="form" autoComplete="off" className="php-email-form">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="title" className="form-control" id="title" placeholder="Title" data-msg="Please fill in the title of your bulletin post" value={formData.title} onChange={handleInputChange} />
                                                {errors.title && (
                                                    <div className="validate">
                                                        {errors.title}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                                <input type="text" className="form-control" name="author" id="author" placeholder="Your Name" data-msg="Please fill in your name" value={formData.author} onChange={handleInputChange} />
                                                {errors.author && (
                                                    <div className="validate">
                                                        {errors.author}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="content" rows="5" placeholder="Content" value={formData.content} onChange={handleInputChange}></textarea>
                                            {errors.content && (
                                                <div className="validate">
                                                    {errors.content}
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-center mt-3">
                                            <button type="button" className="btn btn-warning me-2" onClick={handleFormReset}>Reset <i className="bx bx-reset"></i></button>
                                            <button type="submit" className="btn btn-dark">Post Bulletin <i className="bx bx-chevron-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Base>
        </>
    );
}