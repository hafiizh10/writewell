import Base from "../Layouts/Base";
import { Head } from "@inertiajs/inertia-react";

export default function Gallery() {
    return (
        <>
            <Head title="Write Well - Gallery" />
            <Base>
                <section id="gallery" className="gallery">
                    <div className="container">
                        <div className="section-title">
                            <h2>Gallery</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row g-0">
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/img/gallery/gallery-1.jpg" className="gallery-lightbox">
                                        <img src="/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/img/gallery/gallery-2.jpg" className="gallery-lightbox">
                                        <img src="/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/img/gallery/gallery-3.jpg" className="gallery-lightbox">
                                        <img src="/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/img/gallery/gallery-4.jpg" className="gallery-lightbox">
                                        <img src="/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/img/gallery/gallery-5.jpg" className="gallery-lightbox">
                                        <img src="/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/img/gallery/gallery-6.jpg" className="gallery-lightbox">
                                        <img src="/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/img/gallery/gallery-7.jpg" className="gallery-lightbox">
                                        <img src="/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="/img/gallery/gallery-8.jpg" className="gallery-lightbox">
                                        <img src="/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Base>
        </>
    )
}