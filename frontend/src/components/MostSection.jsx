import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Carouselimage from "../utils/Carouselimage.js"

export default function MostSection() {

    const items = [
        { title: "Canon camera.", path: "/camera.png" },
        { title: "Canon camera", path: "/camera.png" },

    ]
    return (
        <Carousel variant="dark" className="mt-4">
            {items.map((item) => (
                <Carousel.Item>
                    <div className="d-flex container justify-content-evenly">
                        <div className="d-flex align-items-center">
                            <div>
                                <h1
                                    className="fw-bold"
                                    style={{ color: "#1B5A7D", marginBottom: "30px" }}
                                >
                                    {item.title}
                                </h1>
                                <div className="d-flex gap-5">
                                    <button className="button btn bg-warning">Shop now</button>
                                    <button className="button btn btn-outline-primary">
                                        View more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Carouselimage className="secimg" path={item.path} />
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}