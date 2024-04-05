
import React from 'react';
import styled from 'styled-components';
import { arrowIcon } from '@/Helpers/icon';
import Link from 'next/link';

const BreadcrumbWrap = styled.div`
    width:100%;
    & .breadcrumb-section{
        width:100%;max-width:1280px;display:flex; margin:0 auto;padding:20px;flex-direction:column;row-gap:5px;
        & .title{color: #fff;font-size: 60px;padding-top: 50px;}
        & .lists{
            margin:0;padding:0;list-style:none;display:flex;align-items:center;column-gap:5px;
            & .list{
                display:flex;align-items:center;column-gap:5px;
                & .link{
                    display:flex;align-items:center;column-gap:5px;color:#9DD1FF;font-size: 17px;
                    &:hover{text-decoration:underline;}
                }
            }
        }
    }
    @media (max-width:767px){
        & .breadcrumb-section{
            align-items:center;
            & .title{font-size:30px;padding-top:30px;}
        }
    }
    @media (max-width:479px){
        & .title{font-size:18px !important;}
        & .link{font-size:14px;}
    }
`;
const Breadcrumb = ({ breadcrumbs }) => {
    if (!breadcrumbs) {
        return;
    }
    return (
        <BreadcrumbWrap>
            <div className='breadcrumb-section'>
                {breadcrumbs.map((crumb, index) => (<div key={index} className='title'>{crumb.name}</div>))}
                <ul className='lists'>
                    <li className='list'>
                        <Link className='link' href="/">Home</Link>
                    </li>
                    {breadcrumbs.map((crumb, index) => (
                        <li key={index} className='list'>{arrowIcon({ width: "14", height: "14",fill:"#9DD1FF"})}
                        <Link className='link' href={crumb.path}>{crumb.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </BreadcrumbWrap>
    );
}

export default Breadcrumb;
