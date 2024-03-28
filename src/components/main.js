import React, { useMemo, useCallback } from "react";
import { Link } from 'react-router-dom';
import image1 from "../img/apple.png";
import image2 from "../img/apple2.png";
import image3 from "../img/lenovo.png";
import image4 from "../img/msi.png";
import image5 from "../img/hp.png";

const Main = () => {
    const types = useMemo(
        () => [
            {
                id: 1,
                name: "Lenovo",
                classBgColor: "bg-first-second-row",
                img: image3,
                imageClass: "image3",
                fade: "fade-right",
            },
            {
                id: 2,
                name: "Msi",
                classBgColor: "bg-second-second-row",
                img: image4,
                imageClass: "image4",
                fade: "fade-right",
            },
            {
                id: 3,
                name: "HP",
                classBgColor: "bg-second-third-row",
                img: image5,
                imageClass: "image5",
                fade: "fade-left",
            },
        ],
        []);


    const handleScrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const renderTypes = useMemo(
        () =>
            types.map((type) => (
                <div className="col-xl-4 col-md-6 col-12" key={type.id}>
                    <div
                        className={`mx-3 vh-75 my-5 rounded-5 my-shadow p-5 position-relative  ${type.classBgColor}`}
                        data-aos={type.fade}
                    >
                        <img
                            src={type.img}
                            className={`position-absolute ${type.imageClass} t-delay`}
                            data-aos={type.fade}
                        />
                        <div className="d-flex justify-content-between t-delay" data-aos={type.fade}>
                            <h2 className="text-white">{type.name}</h2>
                            <Link
                                to={"/shop"}
                                onClick={handleScrollToTop}
                                className="w-fit text-decoration-none text-black bg-white mb-5 border-0 px-3 py-2 rounded-5 fs-5"
                            >
                                See More
                            </Link>
                        </div>
                    </div>
                </div>
            )),
        [types, handleScrollToTop]
    );

    return (
        <main className="w-100 overflow-hidden mt-0">
            <div className="row">
                <div className="col-xl-8 col-12">
                    <div
                        className="bg-main bg-black mx-3 vh-75 rounded-5 p-5 my-4 my-shadow"
                        data-aos="fade-right"
                    >
                        <img
                            src={image1}
                            className="position-absolute t-delay Apple"
                            data-aos="fade-right"
                        />
                        <div className="d-flex flex-column h-100 justify-content-start t-delay" data-aos="fade-right">
                            <h1 className="text-white w-50 w-m-100 fs-2 lh-md">
                                Refurbished 14-inch MacBook Pro Apple M1 Max Chip with 10‑Core CPU and 32‑Core GPU
                            </h1>
                            <Link
                                to={"/shop"}
                                onClick={handleScrollToTop}
                                className="w-fit text-decoration-none mt-auto mb-3 ms-3 border-0 fs-3 px-3 py-2 rounded-5 first-btn text-white"
                            >
                                See More
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6 col-12">
                    <div
                        className="bg-second-div mx-3 vh-75 rounded-5 my-xl-4 p-5 my-5 my-shadow"
                        data-aos="fade-left"
                    >
                        <img
                            src={image2}
                            className="position-absolute second-img t-delay"
                            data-aos="fade-left"
                        />
                        <div className="d-flex justify-content-between t-delay" data-aos="fade-left">
                            <h2 className="text-white">MacBook</h2>
                            <Link
                                to={"/shop"}
                                onClick={handleScrollToTop}
                                className="w-fit btn bg-white mb-5 border-0 px-3 py-2 rounded-5 fs-5"
                            >
                                See More
                            </Link>
                        </div>
                    </div>
                </div>

                {renderTypes}
            </div>
        </main>
    );
};

export default Main;