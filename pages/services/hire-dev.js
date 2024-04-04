import Breadcrumb from '@/Components/BreadCrumbs';
import Layout from '@/Components/layout/Layout';
import React from 'react';
import styled from 'styled-components';


const datanew = [
    { id: 1, title: "Custom iOS App Development", main: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", },
    { id: 2, title: "iOS App Upgrade", main: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", },
    { id: 3, title: "iOS App Testing/Portability", main: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", },
    { id: 4, title: "Irresistible Features", main: "We are proficient at building custom iOS applications that address customers' issues and pressed with present day highlights. You can share your application thoughts and we will transform it into a protected, mobile, and strong iOS application.", }
];

const maindata1 = [
    { id: 1, title: "Hire Dedicated Developers ", image: " ./images/1.png", description: " Hire our iOS app developers to build high-performing iOS apps for your business." },
    { id: 1, title: "Hire Dedicated Developers ", image: " ./images/1.png", description: "Hire our iOS app developers to build high-performing iOS apps for your business." },
    { id: 1, title: "Hire Dedicated Developers ", image: " ./images/1.png", description: "Hire our iOS app developers to build high-performing iOS apps for your business." },
    { id: 1, title: "Hire Dedicated Developers ", image: " ./images/1.png", description: 'Hire our iOS app developers to build high-performing iOS apps for your business.' },
    { id: 1, title: "Hire Dedicated Developers ", image: " ./images/1.png", description: "Hire our iOS app developers to build high-performing iOS apps for your business." },
];


const maindata = [
    {
        id: 1,
        title: "Photoshop",
        main:
            <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
                <g>
                    <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
                    <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
                    <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
                    <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="100" height="98.4252" />
                    </clipPath>
                </defs>
            </svg>
    },

    {
        id: 2, title: " Illustrator", main: <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
            <g>
                <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
                <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
                <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
                <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="100" height="98.4252" />
                </clipPath>
            </defs>
        </svg>
    },
    {
        id: 3, title: " Figma", main: <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
            <g>
                <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
                <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
                <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
                <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="100" height="98.4252" />
                </clipPath>
            </defs>
        </svg>
    },
    {
        id: 4, title: " XD", main: <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
            <g>
                <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
                <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
                <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
                <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="100" height="98.4252" />
                </clipPath>
            </defs>
        </svg>
    },
    {
        id: 2, title: " Illustrator", main: <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
            <g>
                <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
                <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
                <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
                <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="100" height="98.4252" />
                </clipPath>
            </defs>
        </svg>
    },
    {
        id: 3, title: " Figma", main: <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
            <g>
                <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
                <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
                <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
                <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="100" height="98.4252" />
                </clipPath>
            </defs>
        </svg>
    },
    {
        id: 4, title: " XD", main: <svg width="70" height="99" viewBox="0 0 100 99" fill="none" >
            <g>
                <path d="M0.00695801 0H99.9934V98.4252H0.00695801V0Z" fill="#F5F5F5" />
                <path d="M7.95862 7.82697H92.0419V90.5982H7.95862V7.82697Z" fill="#F5F5F5" />
                <path d="M24.1695 27.7406C24.1695 27.7406 30.4913 27.5741 35.6953 27.5741C40.9539 27.5741 44.7034 28.8126 47.2207 30.9889C49.6267 33.0455 51.2492 36.5514 51.2492 40.5425C51.2492 44.5336 50.018 47.7993 47.7796 50.0954C44.8704 53.0585 41.4802 54.8125 35.6953 55.0551C34.0972 55.1221 32.618 55.1381 32.618 55.1381V68.1116H24.1692L24.1695 27.7406V27.7406ZM32.6177 47.9504C33.5356 48.0398 34.1108 47.9968 35.4713 47.9805C40.0034 47.9261 42.8 45.1672 42.8 40.9949C42.8 37.2468 40.494 34.1692 36.1432 34.0097C34.4091 33.9463 32.6177 34.0097 32.6177 34.0097V47.9504V47.9504Z" fill="#252B33" />
                <path d="M54.4734 59.0735C56.1762 60.1194 60.1943 61.6859 62.9332 61.6859C65.7315 61.6859 66.887 60.6987 66.887 59.1596C66.887 57.6184 65.9745 55.9996 62.506 54.8292C56.3605 52.7342 53.9871 50.2265 54.0488 46.7166C54.0488 41.0476 58.7941 36.797 66.1565 36.797C69.6247 36.797 72.3953 37.9321 74.219 38.8556V45.6593C72.8792 44.9193 69.0161 43.2671 66.4611 43.2671C64.2084 43.2671 62.9316 44.1912 62.9316 45.73C62.9316 47.1473 64.0884 47.8867 67.7389 49.1812C73.3965 51.1524 75.7698 54.0471 75.8298 58.4829C75.8298 64.0898 71.5124 68.5483 62.9316 68.2777C59.9866 68.185 56.7241 67.0196 54.4727 65.7891L54.4734 59.0735V59.0735Z" fill="#252B33" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="100" height="98.4252" />
                </clipPath>
            </defs>
        </svg>
    }
];

const Wrap = styled.div`
    & .banner{
        background: url('/images/hddbg.jpg');width:100%;min-height: 600px;display: flex;align-items: center;position: relative;background-size: cover;background-position: center center
    } 
    & .section-app-dev{
        padding:60px 0 0;
        & .container{
            max-width:1280px;width:100%;margin:0 auto;box-sizing:border-box;display:flex;padding:0 20px;
            & .content-wrap{
                flex:1;padding:0 10px 0 0;
                & .head-sction{
                    margin-bottom: 1.5rem !important;
                    & h6{background-color: #EBF5FF;padding: 10px 30px;display: inline-block;border-radius: 10px;font-size: 18px;font-weight: 600;color: #1589F1;margin:0 0 15px;}
                    & h2{
                        font-size: 30px;color: #294762;font-weight: 300;margin:0 0 15px;
                        & span{font-weight:700;}
                    }
                }
                & .sub-head{font-weight: 500;font-size: 17px;line-height: 26px;margin:0 0 5px;color: #294762;}
                & p{margin-top: 0;margin-bottom: 1rem;text-align: justify;color: #6C8BA7;line-height:26px;}
                & .conversioninquire{
                    align-items: center;color: #1589f1;column-gap: 10px;display: flex;flex-direction: row;font-size: 18px;font-weight: 600;cursor: pointer;
                    & span{align-items: center;background-color: #6495ed;border-radius: 50%;color: #fff;cursor: pointer;display: flex;font-size: 30px;height: 50px;justify-content: center;width: 50px;}
                }
            }
            & .image-wrap{
                flex:1;padding:0 0 0 10px;margin:auto;
                & img{border-style: none;height: auto;max-width: 100%;vertical-align: middle;}
            }
            & .image-wrap-1{
                flex:1;padding:0 0 0 10px;margin:auto;
                & .img-1{position: relative;display: block;margin-right: 100px;}
                & .img-2{position: relative;margin-top: -94px;z-index: 2;text-align: right;padding-left: 100px;}
                & img{border-style: none;height: auto;max-width: 100%;vertical-align: middle;}
            }
        }
    }
    & .why-choose-wrap{
        background: #F8FBFF;padding:60px 0;
        & .container{
            max-width:1280px;width:100%;margin:0 auto;box-sizing:border-box;padding:0 20px;
            & .head-sction{
                margin-bottom:50px;text-align:center;
                & h6{background-color: #EBF5FF;padding: 10px 30px;display: inline-block;border-radius: 10px;font-size: 18px;font-weight: 600;color: #1589F1;margin:0 0 15px;}
                & h2{
                    font-size: 30px;color: #294762;font-weight: 300;margin:0 0 15px;
                    & span{font-weight:700;}
                }
            }
            & .info-wrap{
                display:flex;flex-wrap:wrap;justify-content:center;gap:40px 20px;
                & .info{
                    width:calc(33.33% - 14px);
                    & .inner{
                        display:flex;gap:10px;align-items:center;background-color: #fff;padding: 20px;border-radius: 5px;box-shadow: 0px 12px 42px rgb(20 140 240 / 0%), 11px 6px 25px rgb(18 162 241 / 15%);border-top: 5px solid #148ef0;transition: all 0.3s ease-out 0s;min-height: 105px;
                        & .icon{
                            flex: 0 0 60px;
                            & img{transition: all 1s ease;border-style: none;height: auto;max-width: 100%;vertical-align: middle;}
                        }
                        & .text{font-weight: 500;font-size: 15px;line-height: 22px;text-align: left;color: #6C8BA7;align-self: center}
                        &:hover{
                            & .icon{
                                & img{transform: rotateY(360deg);}
                            }
                        }
                    }
                }
            }
        }
    }
    & .process-wrap{
        padding:60px 0;
        & .container{
            max-width:1280px;width:100%;margin:0 auto;box-sizing:border-box;padding:0 20px;
            & .head-sction{
                & h2{
                    font-size: 30px;color: #294762;font-weight: 300;margin:0 0 15px;
                    & span{font-weight:700;}
                }
            }
            & .info-wrap{
                display:flex;flex-wrap:wrap;justify-content:center;gap:40px 20px;
                & .info{
                    width:calc(33.33% - 14px);
                    & .inner{
                        display:flex;gap:10px;align-items:center;background-color: #fff;padding: 20px;border-radius: 5px;box-shadow: 0px 12px 42px rgb(20 140 240 / 0%), 11px 6px 25px rgb(18 162 241 / 15%);border-top: 5px solid #148ef0;transition: all 0.3s ease-out 0s;min-height: 105px;
                        & .icon{
                            flex: 0 0 60px;
                            & img{transition: all 1s ease;border-style: none;height: auto;max-width: 100%;vertical-align: middle;}
                        }
                        & .text{font-weight: 500;font-size: 15px;line-height: 22px;text-align: left;color: #6C8BA7;align-self: center}
                        &:hover{
                            & .icon{
                                & img{transform: rotateY(360deg);}
                            }
                        }
                    }
                }
            }
        }
    }
    @media(max-width: 1199px){
        & .banner{min-height: 470px;}
    }
    @media(max-width:991px){
        & .banner{min-height: 350px;}
        & .why-choose-wrap{
            & .container{
                & .info-wrap{
                    & .info{width:calc(50% - 10px);}
                }
            }
        }
    }
    @media(max-width:767px){
        & .section-app-dev{
            padding:40px 0 0;
            & .container{
                flex-direction:column;
                & .content-wrap{
                    padding:0;
                    & .conversioninquire{
                        & span{font-size:24px;height:40px;width:40px;}
                    }
                }
                & .img-wrap{padding:0;}
                & .image-wrap-1{padding:0;margin-bottom: 30px;}
            }
        }
    }
    @media(max-width:576px){
        & .section-app-dev{
            & .container{
                & .content-wrap{
                    & .head-sction{
                        & h2{
                            font-size:22px;
                        }
                    }
                }
                & .img-wrap-1{
                    & .img-2{
                        & img{width: 220px}
                    }
                }
            }
        }
        & .why-choose-wrap{
            & .container{
                & .head-sction{
                    margin:0 0 30px;
                    & h2{font-size:22px;}
                }
                & .info-wrap{
                    gap:20px;
                    & .info{width:100%;}
                }
            }
        }
    }
`;

const hiredev = () => {
    const breadcrumbs = [
        { name: "Hire Dedicated Developers", path: "/services/hire-dev"},
    ];
    const data = [
        {id:1,about:"Expert and skilled developer team for your project.",img:"/images/1.png"},
        {id:2,about:"A fully transparent development cycle.",img:"/images/img__2.png"},
        {id:3,about:"Using diverse communication channels for friendly client interaction..",img:"/images/homeimg_6.png"},
        {id:4,about:"Focus on Quality Driven Processes.",img:"/images/img__4.png"},
        {id:5,about:"On Time Project Competition.",img:"/images/img__5.png"}
    ]
    return (
        <Layout>
            <Wrap>
                <div className="banner">
                    <Breadcrumb breadcrumbs={breadcrumbs}/>
                </div>
                <div className="section-app-dev">
                    <div className="container">
                        <div className="content-wrap">
                            <div className="head-sction">
                                <h6>Hire Dedicated Developers</h6>
                                <h2>Hire Dedicated Resources To Reach<span> New Business Heights</span></h2>
                            </div>
                            <h5 class="sub-head">Looking to perfect the balance between cost, time &amp; quality? </h5>
                            <p className='text'>Hire dedicated developers from Weapplinse will be the best option to develop your business website or applications. Being a leading enterprise, Weapplinse offers you tailored solutions. Hiring dedicated developers to manage the entire development cycle of your project. When you choose us, you get trust of a brand, Surat's top Dedicated Development team, 7+ years of experience, strict NDA terms & complete peace of mind.</p>
                        </div>
                        <div className="image-wrap">
                            <img src="/images/hdd_img1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="section-app-dev" style={{paddingTop:"0",marginBottom:"40px"}}>
                    <div className="container">
                        <div className="image-wrap-1" style={{padding:"0 10px 0 0"}}>
                            <div className="img-1">
                                <img src="/images/hdd_img2.jpg" alt="" />
                            </div>
                            <div className="img-2">
                                <img src="/images/hdd_img3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="content-wrap" style={{padding:"0 0 0 10px"}}>
                            <div className="head-sction">
                                <h2>Our Expert Developer Create an experience<span> that's is too hard to Forget.</span></h2>
                            </div>
                            <p className='text'>Finding developers may not be difficult, however, vetting them or having the assurance of product delivery is quite a challenge. But not anymore, at cj-tech, we have a dedicated Developers model of outsourcing.</p>
                            <p className='text'>cj-tech developers work dedicatedly with clients, report on their reporting tools and work as a part of the client’s team to attain success. All happens under reliability and trust that is ensured always by cj-tech under proper agreements and working procedure.Here you can hire an already formed team of expert developers who will harmonize with your team or existing process and work dedicatedly.</p>
                            <p className='text'>When you choose us, you get trust of a brand, Surat's top Dedicated Development team, 13+ years of experience. Here, cj-tech keeps the process as simple as possible and does not bog you down with any long term agreement. We house professionally trained developers that are proficient and experienced in providing end-to-end mobile and web solutions for startups as well as large-scale enterprises worldwide.</p>
                            <div className="conversioninquire" onClick={() => window.location="/contact"}><span>&gt;</span>Get In Touch</div>
                        </div>
                    </div>
                </div>
                <div className="why-choose-wrap">
                    <div className="container">
                        <div className="head-sction">
                            <h6>Why Choose Us</h6>
                            <h2>Cj Is your<span> Development Partner</span></h2>
                        </div>
                        <div className="info-wrap">
                            {data.map((item) => (
                                <div className="info" key={item.id}>
                                    <div className="inner">
                                        <div className="icon">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="text">{item.about}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="process-wrap">
                    <div className="container">
                        <div className="head-sction">
                            <h2>Hire Expert Developer<span> - A Simplistic & Flexible Process</span></h2>
                        </div>
                        <div className="info-wrap">
                            {data.map((item) => (
                                <div className="info" key={item.id}>
                                    <div className="inner">
                                        <div className="icon">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="text">{item.about}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Wrap>
        </Layout>
    );
};

export default hiredev;