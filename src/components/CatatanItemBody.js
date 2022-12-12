import React from 'react';
import { showFormattedDate } from "../utils/data";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CatatanItemBody({id, title,  createdAt, body}) {
    return (
        <div className="catatan-item__body">
            <h3><Link to={`/detail/${id}`}>{title}</Link></h3>
            {console.log(title)}
            <time dateTime={createdAt}>{showFormattedDate(createdAt)}</time>
            <p>{body}</p>
        </div>
    );
}

CatatanItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default CatatanItemBody;