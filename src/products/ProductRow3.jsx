import React from 'react'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Product from "./Product";

import Pagination from "../Pagination";
import data3 from '../data/data3'
import { useState } from 'react';
const ProductRow3 = () => {
    const [showPerPage, setShowPerPage] = useState(6);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });
    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };
    return (
        <div>   <div className="product_title_bar">
            <div className="product_title">Bazaar & Bookstore</div>
            <div className="product_bar_right_side">
                <div className="product_see_more">
                    See More <BiChevronRight />
                </div>
                <Pagination
                    showPerPage={showPerPage}
                    onPaginationChange={onPaginationChange}
                    total={data3.length}
                />
            </div>
        </div>
            <div className="card_row" style={{ display: "flex" }}>
                {data3.slice(pagination.start, pagination.end).map((data3) =>

                    <Product
                        id={data3.id}
                        title={data3.title}
                        price={data3.price}
                        grams={data3.grams}
                        image={data3.image}
                    />
                )}
            </div></div>
    )
}

export default ProductRow3