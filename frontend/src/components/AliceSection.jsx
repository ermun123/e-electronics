import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const categoryData = [
    {
        title: "Speaker",
        imgUrl: "speaker.jpg",
        items: 4,
    },
    {
        title: "Desktop & Laptop",
        imgUrl: "laptop.png",
        items: 5,
    },
    {
        title: "DSLR Camera",
        imgUrl: "s-camera.png",
        items: 6,
    },
    {
        title: "Speaker",
        imgUrl: "speaker.jpg",
        items: 4,
    },
    {
        title: "Desktop & Laptop",
        imgUrl: "laptop.png",
        items: 5,
    },
    {
        title: "DSLR Camera",
        imgUrl: "s-camera.png",
        items: 6,
    },
];

export default function Category() {
    const category = categoryData.map((data) => (
        <div className="aliceitem mt-5 pt-2">
            <div className="d-flex">
                <div className="ms-2 mt-1">
                    <img src={data.imgUrl} alt="image" />
                </div>
                <div className="category-text text-center">
                    <h3 className="alicetext mt-2 ms-2  ">{data.title}</h3>
                    <p className="alicetext2">({data.items} items)</p>
                </div>
            </div>
        </div >
    ));

    return (
        <div className="mt-5">
            <AliceCarousel
                autoPlay
                infinite
                autoPlayInterval="3000"
                mouseTracking
                items={category}
                responsive={{ 0: { items: 3 } }}
                disableButtonsControls
                disableDotsControls
            />
        </div>
    );
}