// export default function PopularSection() {
//     return (
//         <div>
//             <div className="d-flex justify-content-between mt-5 mx-5">
//                 <div className="populartext">Popular products</div>
//                 <div className="">
//                     <ul className="d-flex popularlist">
//                         <li>Cameras</li>
//                         <li>Laptops</li>
//                         <li>Tablets</li>
//                         <li>Mouse</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React, { useState } from 'react';


const productData = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is the description for Product 1',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This is the description for Product 2',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'This is the description for Product 3',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'This is the description for Product 4',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'This is the description for Product 5',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 6,
        name: 'Product 6',
        description: 'This is the description for Product 6',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 7,
        name: 'Product 7',
        description: 'This is the description for Product 7',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 8,
        name: 'Product 8',
        description: 'This is the description for Product 8',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 9,
        name: 'Product 9',
        description: 'This is the description for Product 1',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 10,
        name: 'Product 10',
        description: 'This is the description for Product 2',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 11,
        name: 'Product 11',
        description: 'This is the description for Product 3',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 12,
        name: 'Product 12',
        description: 'This is the description for Product 4',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 13,
        name: 'Product 13',
        description: 'This is the description for Product 5',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 14,
        name: 'Product 14',
        description: 'This is the description for Product 6',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 15,
        name: 'Product 15',
        description: 'This is the description for Product 7',
        image: 'https://via.placeholder.com/300x300',
    },
    {
        id: 16,
        name: 'Product 16',
        description: 'This is the description for Product 8',
        image: 'https://via.placeholder.com/300x300',
    },
];

const Carousel = () => {
    const [page, setPage] = useState(0);
    const productsPerPage = 8;
    const totalPages = Math.ceil(productData.length / productsPerPage);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const renderProductCards = () => {
        const startIndex = page * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = productData.slice(startIndex, endIndex);

        return (
            <div className="product-cards">
                <div className="row">
                    {productsToShow.slice(0, productsToShow.length / 2).map((product) => (
                        <div key={product.id} className="col">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <img src={product.image} alt={product.name} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    {productsToShow.slice(productsToShow.length / 2).map((product) => (
                        <div key={product.id} className="col">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <img src={product.image} alt={product.name} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className='mt-5 mx-5 alicebotsection'>
            <div>
                <div className="d-flex justify-content-between">
                    <div className="populartext">Popular products</div>
                    <div className="">
                        <ul className="d-flex popularlist">
                            <li>Cameras</li>
                            <li>Laptops</li>
                            <li>Tablets</li>
                            <li>Mouse</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='productcard'>
                {renderProductCards()}
                <div>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button key={i} onClick={() => handlePageChange(i)}>
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>

    );
};
export default Carousel