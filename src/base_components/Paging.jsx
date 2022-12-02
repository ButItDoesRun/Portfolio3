import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paging = ({ pagedList, active}) => {
    let items = [];
    const pagesTotal = pagedList.pages;
    const maxPagesShown = 20;
    if (pagesTotal > maxPagesShown) items.push(
        <Pagination.Ellipsis />
    );

    for (let number = 1; number <= pagesTotal; number++) {
        if (number > active-maxPagesShown/2 && number < active+maxPagesShown/2){
            items.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        }
    }

    if (pagesTotal > maxPagesShown) items.push(
        <Pagination.Ellipsis />
    );

    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            {items}
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
};

export default Paging;