import React from 'react'
import Breadcrumb from '@/Components/BreadCrumbs';
import Layout from '@/Components/layout/Layout';
import styled from 'styled-components';
import { nodeIcon} from '@/Helpers/icon';
import Link from 'next/link';


const Wrap = styled.div`
    & .banner{
        background: url('/images/node.jpg');width:100%;min-height: 600px;display: flex;align-items: center;position: relative;background-size: cover;background-position: center center
    } 
    & .dev-section{
        max-width:1280px;margin:0 auto;padding:50px 20px;text-align:center;
        & .section-wrapper{
            display:flex;
            & .left-section{
                flex:0 0 66.66%;padding:0 50px 0 0;
                & .service-detail{
                    & .inner-box{
                        text-align:left;
                        & h4{color: #294762;font-weight: 600;margin:0 0 20px;font-size:25px;}
                        & p{margin-top: 0;margin-bottom: 1rem;color: #6C8BA7;line-height:25px;}
                        & .img-wrap{
                            position: relative;margin-top: 30px;margin-bottom: 35px;overflow: hidden;text-align: center;
                            & img{border-style: none;height: auto;max-width: 100%;vertical-align: middle;}
                        }
                        & .sevice-wrap{
                            display:flex;flex-wrap:wrap;margin-bottom:30px;
                            & .service{
                                width:50%;position: relative;border: 1px solid #CAE5FF;
                                & .inner{
                                    position: relative;padding: 35px 45px;
                                    & h5{
                                        &::before{position: absolute;content:">";left: 40px;top: 28px;line-height: 35px;text-align: center;color: #ffffff;background-color: #0057FC;font-family: "fontawesome";width: 35px;height: 35px;font-size: 25px;border-radius: 50px;}
                                        padding-left: 45px;font-weight: 600;color: #294762;margin:0 0 10px;font-size:20px;
                                    }
                                    & .text{position: relative;font-size: 16px;color: #6C8BA7;margin-top: 15px;line-height:25px;}
                                }
                            }
                        }
                        & .service-box{
                            display:flex;flex-wrap:wrap;row-gap:20px;column-gap:20px;
                            & .box{
                                width:calc(25% - 38px);text-align: -webkit-center;transition:.3s all;
                                &:hover{transform: translateY(-8px);}
                                & .icon{
                                    width: 100px;height: 100px;margin: 0 0 15px;background: #F5F5F5;border-radius: 5px;display: flex;align-items: center;justify-content: center;
                                }
                                & .title{margin-bottom: 1rem;color: #6C8BA7;}
                            }
                        }
                    }
                }
            }
            & .right-section{
                flex:0 0 33.33%;padding:0 12px;
                & .sidebar{
                    position: sticky;top: 0;z-index: 1020;
                    & .widget-content{
                        position: relative;padding: 30px 30px;border: 2px solid #E4E4E4;margin:0 0 45px;
                        & .service-list{
                            margin:0;padding:0;list-style:none;
                            & li{
                                position: relative;margin-bottom: 15px;
                                & a{position: relative;display: block;font-weight: 600;padding: 18px 25px;border-radius: 4px;color: #294762;font-size: 18px;background-color: #F8F8F8;transition: all 300ms ease;}
                            }
                        }
                    }
                    & .sidebar-widget{
                        & .widget-content{
                            margin:0px;position: relative;text-align: center;padding: 45px 45px 45px;background-color: #0168CA;border:none;
                            & .title{
                                font-weight: 400;font-size: 18px;color: #fff;margin-bottom: 25px;
                                & span{display: block;font-weight: 600;font-size: 26px;}
                            }
                            & .contact-btn{position: relative;padding: 14px 30px;border-radius: 5px;font-weight: 600;color: #fff;font-size: 20px;text-transform: uppercase;display: inline-block;margin-bottom: 25px;border: 2px solid #fff;}
                            & .phone{
                                font-size: 18px;color: #fff;
                                & a{font-weight: 600;color: #fff;word-break: break-all;}
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
        & .dev-section{
            padding:50px 20px;
            & .section-wrapper{
                flex-direction:column;row-gap:20px;
                & .left-section{padding:0;}
                & .right-section{padding:0;}
            }
        }
    }
    @media(max-width:767px){
        & .dev-section{
            & .section-wrapper{
                & .left-section{
                    & .service-detail{
                        & .inner-box{
                            & .sevice-wrap{
                                & .service{width:100%;}
                            }
                            & .service-box{
                                & .box{width:calc(33.33% - 38px);}
                            }
                        }
                    }
                }
            }
        }
    }
    @media(max-width:575px){
        & .dev-section{
            & .section-wrapper{
                & .left-section{
                    & .service-detail{
                        & .inner-box{
                            & h4{font-size:22px;}
                            & .sevice-wrap{
                                & .service{
                                    width:100%;
                                    & .inner{
                                        padding:30px;
                                        & h5{
                                            margin:0 0 20px;
                                            &::before{left:32px;top: 25px;width: 30px;height: 30px;font-size:17px;}
                                        }
                                    }
                                }
                            }
                            & .service-box{
                                & .box{width:calc(50% - 38px);}
                            }
                        }
                    }
                }
                & .right-section{
                    & .sidebar{
                        & .sidebar-widget{
                            & .widget-content{
                                padding:30px;
                                & .contact-btn{padding: 14px 30px;color: #fff;font-size:16px;}
                            }
                        }
                    }
                }
            }
        }
    }
`

const phpdev = () => {
    const datanew = [
        { id: 1, title: "Custom Node.js Development",},
        { id: 2, title: "Node.js API Development",},
        { id: 3, title: "Node.Js Plugin",},
        { id: 4, title: "Ongoing Statistics", }
    ];
      
    const techData = [
        {id:3,name:"Node JS",icon:nodeIcon},
    ]

    const breadcrumbs = [
        { name: "Node JS Development", path: "/services/node-dev"},
    ];
    return (
        <Layout>
            <Wrap>
                <div className="banner">
                    <Breadcrumb breadcrumbs={breadcrumbs}/>
                </div>
                <div className='dev-section'>
                    <div className="section-wrapper">
                        <div className='left-section'>
                            <div className="service-detail">
                                <div className="inner-box">
                                    <h4>Build Custom Web Applications With Node JS Development Company</h4>
                                    <p>
                                        If you require mobile and web app development services, then it’s high time to hire NodeJS developers as they are really valuable for the forthcoming future of applications. Also, it allows the NodeJS developers to create networking tools & web servers using JavaScript and a bunch of modules that handle numerous core functionalities. We have a dedicated team of skillful and trained NodeJS developers who are competent enough to develop apps that meet the diverse needs of your business. We are always ready to provide our end-to-end NodeJS development solutions. Our world-class NodeJS application development services are renowned across the globe. We also have a team of full-stack developers who have extensive knowledge & experience to work on multiple app development frameworks. We have adequate resources at our disposal to create cost-effective and swift NodeJS web development.
                                    </p>
                                    <div className="img-wrap">
                                        <img className="wrapimagework" src="/images/nodejs_img.jpg" alt="Node development"/>
                                    </div>
                                    <h4>Our Customized Node.JS Web Development Services Are Highly Recommendable To Get The Best Results As Per Client’s Business Needs</h4>
                                    <p>
                                    Our entire focus is to meet the requisite needs of our clients. We assure you of delivering the best applications using Node.JS technology. Our NodeJS developers keep updated with the latest happenings in the field of this technology so that you receive the best web application using Node.JS technology. We believe in providing our total commitment, honesty, and integrity while transforming your raw idea into an improvised product deliverable.                                    </p>
                                    <p>
                                    Weapplinse Technology is one of the leading NodeJS development companies that provide a one-stop solution for developing rich, high performance, and scalable web and mobile applications. No matter what your needs are – from social networking & collaboration applications to eCommerce solutions & advanced Node.JS programming we can develop them all. We employ advanced skill sets and knowledge to develop apps that can become the heartthrob of the nation!                                    </p>
                                    <p>
                                    If you require mobile and web app development services, then it’s high time to hire NodeJS developers as they are really valuable for the forthcoming future of applications. Also, it allows the NodeJS developers to create networking tools & web servers using JavaScript and a bunch of modules that handle numerous core functionalities. We have a dedicated team of skillful and trained NodeJS developers who are competent enough to develop apps that meet the diverse needs of your business. We are always ready to provide our end-to-end NodeJS development solutions. Our world-class NodeJS application development services are renowned across the globe. We also have a team of full-stack developers who have extensive knowledge & experience to work on multiple app development frameworks. We have adequate resources at our disposal to create cost-effective and swift NodeJS web development.
                                    </p>
                                    <p>
                                    Our entire focus is to meet the requisite needs of our clients. We assure you of delivering the best applications using Node.JS technology. Our NodeJS developers keep updated with the latest happenings in the field of this technology so that you receive the best web application using Node.JS technology. We believe in providing our total commitment, honesty, and integrity while transforming your raw idea into an improvised product deliverable.
                                    </p>
                                    <div className="sevice-wrap">
                                        {datanew.map((item) => (
                                            <div className="service" key={item.id}>
                                                <div className="inner">
                                                    <h5>{item.title}</h5>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <h4>We Hold Expertise in the Following Platforms</h4>
                                    <div className="service-box">
                                        {techData.map((item) => (
                                            <div className="box" key={item.id}>
                                                <div className="icon">{item.icon({width:50,height:50})}</div>
                                                <div className="title">{item.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-section">
                            <aside className='sidebar'>
                                <div className="widget-content">
                                    <ul className="service-list">
                                        <li><Link href="/services/larvel-dev">Larvel Development</Link></li>
                                        <li><Link href="/services/php-dev">PHP Development</Link></li>
                                        <li><Link href="/services/reactjs-dev">React JS Development</Link></li>
                                    </ul>
                                </div>
                                <div className="sidebar-widget">
                                    <div className="widget-content" style={{backgroundImage:"url(/images/pattern.png)"}}>
                                        <div className="title">
                                            Have Any Project <span>or work together ?</span>
                                        </div>
                                        <a href="/contact" className="contact-btn">Contact us</a>
                                        <div className="phone">
                                            Let's Discuss : <a href="">@cj-technology</a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </Wrap>
        </Layout>
      );
}

export default phpdev