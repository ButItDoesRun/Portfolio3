import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


const BirthyearOptions = ({ getter, setter, startYear, endYear }) => {
    let items = [];
    // if (getter === "") setter(startYear);
    for (let number = startYear; number <= endYear; number++) {
        items.push(
            <option key={number}>
                {number}
            </option>
        );
    }

    return (
        <Form.Select
            value={getter}
            onChange={e => setter(e.target.value)}>
            {items}
        </Form.Select>
    );
};

export default BirthyearOptions;