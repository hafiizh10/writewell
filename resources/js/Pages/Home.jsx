import Base from "../Layouts/Base";
import ErrorMessage from "../Components/ErrorMessage";
import Swal from "sweetalert2";
import Card from "../Shared/Card";
import { Head, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "../Shared/Pagination";

export default function Home() {
    const {posts, errors} = usePage().props;
    const [buttonDisabled, setButtonDisabled] = useState(false);

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
        setButtonDisabled(true);
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
                setButtonDisabled(false);
                // window.csrfToken = "{{ csrf_token() }}";
            }
        });
    };

    return (
        <>
            <Head title="Write Well - Home" />
            <Base>
                <section id="why-us" className="why-us" style={{paddingBottom: "40px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="content">
                                    <h3>Create Your Bulletin Board</h3>
                                    <form onSubmit={storePost} method="post" role="form" autoComplete="off" className="php-email-form">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="title" className="form-control" id="title" placeholder="Title" value={formData.title} onChange={handleInputChange} required />
                                                <ErrorMessage error={errors.title} />
                                            </div>
                                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                                <input type="text" className="form-control" name="author" id="author" placeholder="Your Name" value={formData.author} onChange={handleInputChange} required />
                                                <ErrorMessage error={errors.author} />
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="content" rows="5" placeholder="Content" value={formData.content} onChange={handleInputChange} required ></textarea>
                                            <ErrorMessage error={errors.content} />
                                        </div>
                                        <div className="text-center mt-3">
                                            <button type="button" className="btn btn-warning me-2" onClick={handleFormReset}>Reset <i className="bx bx-reset"></i></button>
                                            <button type="submit" className="btn btn-dark" disabled={buttonDisabled}>Post Bulletin <i className="bx bx-chevron-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="doctors" style={{paddingTop: "0px"}}>
                    <div className="container">
                        <div className="section-title">
                            <h2>Bulletin Board</h2>
                        </div>
                        {posts.length === 0 ? (
                            <div className="alert alert-danger text-center" role="alert">
                                There is no bulletin board yet!
                            </div>
                        ) : (
                            <div className="row">
                                {posts.data.map((post, index) => (
                                    <Card post={post} key={index} />
                                ))}
                            </div>
                        )}
                        <div className="mt-4">
                            <Pagination links={posts.links} align={'center'} />
                        </div>
                    </div>
                </section>
            </Base>
        </>
    );
}