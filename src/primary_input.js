import React from 'react';

const primary_input = (id, defaultVal = '') => {
    return (
        <input id={id} className="primary_input" defaultValue={defaultVal} />
    );
};

export default primary_input;
