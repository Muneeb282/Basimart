import React from 'react'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Product from "./Product";
import "../App.css"
import Pagination from "../Pagination";
import data from '../data/data'
import { useState } from 'react';
const ProductRow = () => {
    const [showPerPage, setShowPerPage] = useState(6);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });
    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };
    return (
        <div>
            <div className="product_title_bar">
                <div className="product_title">Groceries</div>
                <div className="product_bar_right_side">
                    <div className="product_see_more">
                        See More <BiChevronRight />
                    </div>
                    <Pagination
                        showPerPage={showPerPage}
                        onPaginationChange={onPaginationChange}
                        total={data.length}
                    />
                </div>
            </div>
            <div className="card_row" style={{ display: "flex" }}>
                {data.slice(pagination.start, pagination.end).map((data) =>

                    <Product
                        id={data.id}
                        title={data.title}
                        price={data.price}
                        grams={data.grams}
                        image={data.image}
                    />
                )}
            </div></div>
    )
}

export default ProductRow