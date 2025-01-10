import React from 'react'
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from "react-icons/hi";
import { useParams } from 'react-router-dom';

const BreadCrumbs = () => {
    const { slug } = useParams();

    return (
        <div>
            <Breadcrumb aria-label="Default breadcrumb example">
                <Breadcrumb.Item href="/home" icon={HiHome}>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/blogs">Blogs</Breadcrumb.Item>
                {slug &&
                    <Breadcrumb.Item>{slug}</Breadcrumb.Item>
                }
            </Breadcrumb>
        </div>
    )
}

export default BreadCrumbs