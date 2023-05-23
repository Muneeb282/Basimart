import React from 'react'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Product from "./Product";

import Pagination from "../Pagination";
import data2 from '../data/data2'
import { useState } from 'react';
const ProductRow2 = () => {
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
            <div className="product_title">Drinks</div>
            <div className="product_bar_right_side">
                <div className="product_see_more">
                    See More <BiChevronRight />
                </div>
                <Pagination
                    showPerPage={showPerPage}
                    onPaginationChange={onPaginationChange}
                    total={data2.length}
                />
            </div>
        </div>
            <div className="card_row" style={{ display: "flex" }}>
                {data2.slice(pagination.start, pagination.end).map((data2) =>

                    <Product
                        id={data2.id}
                        title={data2.title}
                        price={data2.price}
                        grams={data2.grams}
                        image={data2.image}
                    />
                )}
            </div></div>
    )
}

export default ProductRow2