import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paging = ({ pageList, page, maxPageButtons, setPage }) => {
    let items = [];
    const active = page;
    const maxPagesShown = maxPageButtons;
    const pagesTotal = pageList.pages;
    if (pagesTotal > maxPagesShown) items.push(
        <Pagination.Ellipsis />
    );

    for (let number = 1; number <= pagesTotal; number++) {
        if (number > active - maxPagesShown / 2 && number < active + maxPagesShown / 2) {
            items.push(
                <Pagination.Item key={number} active={number === active} onClick={() => setPage(number)}>
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
            <Pagination.First key={"first"} onClick={() => setPage(1)} />
            <Pagination.Prev  key={"prev"}  onClick={() => setPage(active - 1)} />
            {items}
            <Pagination.Next  key={"next"}  onClick={() => setPage(active + 1)} />
            <Pagination.Last  key={"last"}  onClick={() => setPage(pagesTotal)} />
        </Pagination>
    );
};

export default Paging;