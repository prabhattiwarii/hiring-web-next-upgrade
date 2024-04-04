import Breadcrumb from '@/Components/BreadCrumbs';
import Layout from '@/Components/layout/Layout';
import React, { useState } from 'react';
import styled from 'styled-components';


const Wrap = styled.div`
    & .banner{
        background:url('/images/portfolio.png');width:100%;min-height: 600px;display: flex;align-items: center;position: relative;background-size: cover;background-position: center center
    }
    & .portfolio-wrap{
        max-width:1280px;margin:0 auto;padding:50px 20px;text-align:center;
        & .work-section{
            display:flex;flex-direction:column;
            & .head-section{
                margin:0 0 20px;
                & .title{padding: 10px 30px;display: inline-block;border-radius: 10px;font-size: 18px;font-weight: 600;color: #1589F1;margin-bottom: 15px;background-color: #EBF5FF;}
                & .sub-title{font-size: 32px;line-height: 50px;font-weight: 600;color: #294762;margin-bottom: 0.5rem;}
            }
            & .portfolio-filter{
                margin:0 0 50px;
                & .btn{
                    font-size: 14px;font-weight: 600;padding: 9px 22px;color: #1589F1;margin-right: 10px;border-radius: 100px;display: inline-block;background: #fff;transition: all 0.5s ease;border: 1px solid #1589F1;cursor:pointer;
                    &:hover{background: linear-gradient(38.23deg, #10ADF0 17.61%, #1686F1 82.65%);color: #ffffff;}
                }
                & .active{background: linear-gradient(38.23deg, #10ADF0 17.61%, #1686F1 82.65%);color: #ffffff;}
            }
        }
        & .work-wrap{
            display:flex;flex-wrap:wrap;column-gap:25px;justify-content:center;
            & .work-item{
                width:calc(33.33% - 17px);border-radius: 30px;background: #fff;box-shadow: 0px 4px 12px 1px rgba(21, 137, 241, 0.22);margin-bottom: 45px;
                & .portfolio-img{
                    z-index: 1;border-radius: 30px;position: relative;overflow: hidden;
                    & img{border-radius: 30px;width: 100%;border-style: none;vertical-align: middle;overflow-clip-margin: content-box;overflow: clip;}
                    & .image{
                        transition: all 0.5s ease-in-out;max-width: 100%;height: auto;
                        &:hover{transform: scale(1.1);}
                    }
                }
                & .body{
                    padding: 30px;display: flex;align-items: center;border-radius: 30px;justify-content: space-between;text-align:left;
                    & .details{
                        & .title{font-weight: 400;display: block;margin-bottom: 5px;color: #6C8BA7;font-size: 15px;}
                        & .name{font-weight: 600;color: #294762;font-size:20px;margin:0 0 8px;}
                    }
                    & .portfolio-link{
                        padding: 10px;color: #fff;text-align: center;border-radius: 50%;display: inline-block;transition: all 0.5s ease-in-out;border: 2px solid #294762;
                        & span{width: 40px;height: 40px;line-height: 40px;border-radius: 50%;transition: all 0.5s ease;background: #294762;display: flex;align-items: center;justify-content: center;font-size:20px;}
                    }
                    & .ani-btn{animation: ani 0.6s linear infinite;overflow: hidden;}
                    @-webkit-keyframes ani{
                        0% {
                          box-shadow: 0 4px 10px rgb(36 112 208 / 10%),
                            0 0 0 0 rgb(0 113 255 / 10%),
                            0 0 0 5px rgb(36 112 208 / 10%),
                            0 0 0 10px rgb(0 113 255 / 10%);
                        }
                      
                        100% {
                          box-shadow: 0 4px 10px rgb(36 112 208 / 10%),
                            0 0 0 5px rgb(36 112 208 / 10%),
                            0 0 0 10px rgb(36 112 208 / 10%),
                            0 0 0 20px rgba(102, 102, 102, 0);
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
        & .portfolio-wrap {
            max-width:800px;
            & .work-wrap{
                & .work-item {width: calc(50% - 13px);margin:0 0 30px;}
            }
        }
    }
    @media(max-width:767px){
        & .portfolio-wrap {
            max-width:500px;
            & .work-wrap{
                & .work-item {width:100%;margin:0 0 20px;}
            }
            & .portfolio-filter{
                & .btn{margin: 5px;margin-right: 0px;margin-bottom: 10px;}
            }
        }
    }
    @media(max-width:576px){
        & .portfolio-wrap {
            & .work-section{
                & .head-section{
                    & .sub-title{font-size:22px;line-height:32px;}
                }
            }
            & .portfolio-filter{
                & .btn{margin-right: 0px;margin-bottom: 10px;}
            }
        }
    }

`;

const Portfolio = () => {
    const [showList, setShowList] = useState("ios");
    const data = [
        {id: 1,name: "IOS",slug: "ios",
        childs:[
            {id:4,title:"Vision Board", image: "/images/project0.jpg",},
            {id:5,title:"FitDog", image: "/images/project2.jpg",},
        ]},
        {id: 2,name: "Andriods",slug:"andriods",
        childs:[
            {id:13,title:"Jewish Dating", image:"/images/project3.jpg",},
            {id:14,title:"Food Jumla", image: "/images/project4.jpg",},
            {id:15,title:"Skip Scooters", image: "/images/project5.jpg"},
        ]},
        {id: 3,name: "Flutter",slug: "flutter",childs:[
            {id:16,title: 'Maximum Realty Group', image: "/images/project6.jpg",},
            {id:17,title:"Food Jumla", image: "/images/project4.jpg",},
            {id:18,title:"Skip Scooters", image: "/images/project10.jpg"},
        ]},
        {id: 4,name: "React Native",slug: "react-native",childs:[
            {id:19,title:"Food Jumla", image: "/images/project4.jpg",},
            {id:20,title:"Skip Scooters", image: "/images/project10.jpg"},
        ]},
        {id: 5,name: "Web",slug: "web",childs:[
            {id:21,title:"Food Jumla", image: "/images/project4.jpg",},
            {id:22,title:"Skip Scooters", image: "/images/project10.jpg"},
        ]},
        {id: 6,name: "UI/UX",slug: "ui-ux",childs:[]}
    ]
    const breadcrumbs = [
        { name: "Portfolio", path: "/portfolio"},
    ];

    return (
        <Layout>
            <Wrap>
                <div className='banner'>
                    <Breadcrumb breadcrumbs={breadcrumbs}/>
                </div>
                <div className="portfolio-wrap">
                    <div className='work-section'>
                        <div className="head-section">
                            <div className='title'>Our Works</div>
                            <div className='sub-title'>Delivering The Great Service That Our Client Love</div>
                        </div>
                        <div className='portfolio-filter'>
                            {data.map((category) => (
                                <button key={category.slug} onClick={() => setShowList(category.slug)} 
                                    className={`btn ${showList === category.slug ? 'active' : ''}`}>
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='work-wrap'>
                        {showList && data.find((category) => category.slug === showList)?.childs.map((item) => (
                            <div className='work-item' key={item.id}>
                                <div className="portfolio-img">
                                    <img className='image' src={item.image} alt={item.title}/>
                                </div>
                                <div className='body'>
                                    <div className="details">
                                        <div className='title'>{item.title}</div>
                                        <div className='name'>{data.find(cat => cat.slug === showList).name}</div>
                                    </div>
                                    <a href='#' className='portfolio-link ani-btn'><span>{'>'}</span></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrap>
        </Layout>
    );
};

export default Portfolio;
