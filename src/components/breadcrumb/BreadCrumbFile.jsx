import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const BreadCrumbFile = (props) => {

    return (
        <>
        <div className='breadcrumb-data'>
            {props.prop.split('/').map((label, id) => (
                <Link key={id} to={props.prop.split('/').length === id + 1 ? '' : '/' + label}>
                    {label === '' ? 'Home>' : label.charAt(0).toUpperCase() + label.slice(1).replace(/%20/g, " ") + (props.prop.split('/').length === id + 1 ? '' : '>')}
                </Link>
            ))}
        </div>
        </>
    )
}

export default BreadCrumbFile