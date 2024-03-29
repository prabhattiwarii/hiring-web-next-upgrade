import React from 'react';
import styled from 'styled-components';
import Layout from '@/Components/layout/Layout';
import Breadcrumb from '@/Components/BreadCrumbs';

import { Icon, Day, Time, Growth, Learning, Environment, Festival, Game} from "../Helpers/icon";

const Wrap = styled.div`
    & .banner{
        background:url(/images/career.jpg);width:100%;min-height: 600px;display: flex;align-items: center;position: relative;background-size: cover;background-position: center center
    }
    & .offer-section{ 
        max-width:1280px;margin:0 auto;padding:50px 20px;text-align:center;
        & .heading{position: relative;color: #1589F1;display: inline-block;background-color: #EBF5FF;padding: 10px 30px;border-radius: 10px;font-style: normal;font-weight: 500;font-size: 25px;line-height: 38px;}
        & .subheading{font-style: normal;font-weight: 700;font-size: 35px;line-height: 50px;color: #294762;margin:30px 0;
            & span{font-style: normal;font-weight: 300;line-height: 40px;}
        }
        & .work-about{
            display:flex;flex-wrap:wrap;row-gap:30px;justify-content:center;margin-bottom:60px;
            & .solution-wrap{
                width:calc(25% - 15px);display:flex;align-items:center;column-gap:10px;
                & .title{font-weight: 600;font-size: 15px;color: #294762;}
            }
        }
        & .job-wrap{
            display:flex;flex-wrap:wrap;gap:24px;
            & .job-open{
                width:calc(33.33% - 16px);background: #fff;border-radius: 6px;overflow: hidden;position: relative;transition: .4s;border: 1px solid #eaeff5;box-shadow: 0 0 10px 0 rgb(8 124 227 / 13%);text-align: center;padding:30px 0px 0px;
                & .job-img{
                    width: 80px;margin: 10px auto;height: 80px;display: flex;border: 1px solid #e4e4e4;background: #fff;align-items: center;border-radius: 50%;line-height: 80px;
                    & img{margin: 0 auto;vertical-align: middle;display: inline-block;max-width: 50px;line-height: 50px;}
                }
                & .job-title{font-size: 17px;padding: 0;margin-bottom: 5px;line-height: 1.4;position: relative;width: auto;display: inline-block;font-weight: 600;color: #294762;}
                & .job-desc{min-height: 70px;position: relative;text-transform: capitalize;line-height: 23px;color: #294762; margin-bottom:10px;padding:0 30px;}
                & .yearposition{
                    display:flex;width:100%;border-top: 1px solid #eaeff5;
                    & .years{flex:1;line-height: 1.5;padding:15px 0;color: #828fa2;font-size:14px;border-right: 1px solid #eaeff5;}
                    & .position{flex:1;flex:1;line-height: 1.5;padding-top: 15px;color: #828fa2;font-size:14px;}
                }
                & .job-type .urgent-hiring{position: absolute;padding: 4px 15px;top: 10px;right: 0;line-height: 1.4;font-size: 12px;border-radius: 2px 0 0 2px;background: rgba(210, 0, 1, 0.1);color: #d20001;}
                & .apply-btn{
                    padding: 17px;display: inline-block;width: 100%;font-size: 16px;font-weight: 500;border-radius: 0;background: #f2f3f5;border: 1px solid transparent;color: #272f46;cursor:pointer;
                }
            }
        }
        & .employee{
            margin-top:60px !important;display:flex;flex-wrap: wrap;
            & .desc{
                flex: 0 0 auto;width: 41.66666667%;text-align:left;padding:0 12px 0 0;
                & .text{color: #6C8BA7;margin:0 0 10px;line-height:26px;}
                & .join-btn{padding:10px;width:150Px;background-color:skyblue;border:none;color:white;border-radius:10px;cursor:pointer;font-size:16px;}
            }
            & .employeelist{
                flex: 0 0 auto;width: 58.33333333%;
                & .employee-wrap{
                    display:flex;flex-wrap:wrap;gap:20px;padding:0 0 0 12px;
                    & .developer{
                        width:calc(50% - 10px);flex:0 0 auto;box-shadow: 0 0 1px transparent;padding:20px;display: inline-block;position: relative;
                        & .text{font-size: 16px;text-align: center;color: #56606a;font-weight: 500;margin:0 0 10px;}
                        & .dev-name{font-size: 16px;font-weight: 600;color: #294762;line-height: 1.2;}
                        & .job-role{font-size: 15px;}
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
        & .offer-section{ 
            & .work-about{
                & .solution-wrap{
                    width:calc(33.33% - 15px);
                }
            }
            & .job-wrap{
                gap:24px;
                & .job-open{
                    width:calc(50% - 16px);
                }
            }
            & .employee{
                flex-direction:column;align-items:center;gap:40px;
                & .desc{
                    width:100%;text-align:center;max-width:767px;
                }
                & .employeelist{
                    width:100%;
                }
            }
        }
    }
    @media(max-width:767px){
        & .banner{min-height: 300px;}
        & .offer-section{ 
            padding:50px 20px;
            & .heading{font-size: 20px;line-height: 30px;}
            & .subheading{font-size: 30px;line-height: 40px;margin:15px 0;
                & span{font-style: normal;font-weight: 300;line-height: 40px;}
            }
            & .work-about{
                row-gap:30px;margin-bottom:60px;
                & .solution-wrap{
                    width:calc(50% - 50px);
                }
            }
            & .job-wrap{
                gap:24px;
                & .job-open{
                    width:calc(50% - 12px);
                }
            }
        }
    }
    @media(max-width:575px){
        & .banner{min-height: 300px;}
        & .offer-section{ 
            padding:50px 20px;
            & .heading{font-size:18px;}
            & .subheading{font-size: 24px;line-height: 28px;}
            & .work-about{
                row-gap:20px;margin-bottom:60px;
                & .solution-wrap{
                    width:100%;
                }
            }
            & .job-wrap{
                gap:20px;
                & .job-open{
                    width:100%;
                    & .job-desc{min-height:auto !important;}
                }
            }
            & .employee{
                & .employeelist{
                    & .employee-wrap{
                        & .developer{
                            width:100%;
                        }
                    }
                }
            }
        }
    }
    @media(max-width: 1024px) and (min-width: 576px){
        & .job-wrap{
            & .job-open{
                & .job-desc{min-height: 92px !important;}
            }
        }
    }
`;



const Career = () => {
    const data = [
        { id: 1, title: "GlobalClients", icon: Icon },
        { id: 2, title: "5 Day Working", icon: Day },
        { id: 3, title: "Flexible Working Time", icon: Time },
        { id: 4, title: "Employee Growth", icon: Growth },
        { id: 5, title: "Free Learning Resources", icon: Learning },
        { id: 6, title: "Friendly Environment", icon: Environment },
        { id: 7, title: "Festival Celebrations", icon: Festival},
        { id: 8, title: "Festival Celebrations", icon:  Game},
    ];

    const datamain = [
        { id: 9, title: "Project manager", details: "Effective Communication, Time Management, Technical Expertise, Critical Thinking And Problem Solving", years: "1 - 4 Years", position: "2 Position", button: " Apply Now", icon:"./images/job.png",require:"Urgent Requirment"},
        { id: 10, title: "BDE ( Online Bidder )", details: "Basic IT Skills, Creatively And Strategically, Negotiation ", years: "0 - 2 Years", position: "2 Position", button: " Apply Now", icon:"./images/job.png",},
        { id: 11, title: "Node JS Developer", details: "JavaScript, MongoDB, API Development", years: "1 - 4 Years", position: "2 Position", button: " Apply Now", icon:"./images/job4.png",},
        { id: 12, title: "Android Developer ", details: " Java, XML, Android Studio, Firebase, Kotlin", years: "1 - 4 Years", position: "2 Position", button: " Apply Now", icon:"./images/job.png",},
        { id: 13, title: "Laravel Developer", details: "Laravel,HTML,CSS,Java Script, MySql", years: "1 - 4 Years", position: "2 Position", button: " Apply Now",icon:"./images/job.png" ,require:"Urgent Requirment"},
        { id: 15, title: "React Native Developer", details: "React ,JavaScript, Redux, MongoDB", years: "1 - 4 Years", position: "2 Position", button: " Apply Now", icon:"./images/job2.jpg",require:"Urgent Requirment"},
        { id: 16, title: "Flutter Developer", details: "Flutter SDK, Dart", years: "1 - 4 Years", position: "2 Position", button: " Apply Now", icon:"./images/job1.jpg",require:"Urgent Requirment"},
        { id: 17, title: "Quality Assurance", details: "Quick To Learn, Flexibility, Discipline, Curiosity, Accuracy", years: "1 - 4 Years", position: "2 Position", button: " Apply Now", icon:"./images/job3.png",require:"Urgent Requirment"},
    ];

    const datawrap = [
        { id: 18, title: "ReactDeveloper", name: "Pankaj", deatails: "“Hello !! You may be surprised to hear that C-j Tech. treats employees like family members. I joined here as a React.Js Developer . Here we celebrate every festival, birthday and many more along with employee engagement activities. Here I met supported seniors and Juniors who helped me a lot in enhancing my knowledge.”",bg:"#CCEEFF"},
        { id: 19, title: "ReactDeveloper", name: "Anshul", deatails: "“I have been working here as a sr php developer for the last 5 years and it was a wonderful experience working with the C-j Tech. family. C-j Tech. has given me a better chance to learn new things in the last few years and for that I am very thankful to C-j Tech. !! If you want to get a worthwhile experience there is no alternative of C-J.”",bg:"#DFFFF8" },
        { id: 20, title: "NexjsDeveloper", name: "Ajay", deatails: "“I have been working here as a sr php developer for the last 5 years and it was a wonderful experience working with the C-j Tech. family. C-j Tech. has given me a better chance to learn new things in the last few years and for that I am very thankful to C-j Tech. !! If you want to get a worthwhile experience there is no alternative of C-J.”",bg:"#EFF0FF" },
        { id: 21, title: "Android Developer", name: "Neha", deatails: "“Today I am sharing my wonderful experience with C-j Tech. and its employees. Here we found the best training process compared to others. All the mentors here are very experienced, skilled, supportive and cooperative. I am so glad to be a part of C-J.”",bg:"#F6E1FF"},

    ]
    const breadcrumbs = [
        { name: "Career", path: "/career"},
    ];

    return (
        <Layout>
            <Wrap>
                <div className="banner">
                    <Breadcrumb breadcrumbs={breadcrumbs}/>
                </div>
                <div className="offer-section">
                    <div className='heading'>What We Offers</div>
                    <h2 className='subheading'><span>Work - Life Balance For Our </span> Prestigious Team!</h2>
                    <div className='work-about'>
                        {data.map((item) => (
                            <div className='solution-wrap' key={item.id}>
                                <div className='wrapimage'>{item.icon({ width: 70, height: 70,fill:"#ffffff"})}</div>
                                <div className='title'>{item.title}</div>
                            </div>
                        ))}
                    </div>
                    <div className='heading'>Let's Work Together</div>
                    <div className='subheading'><span>We're Always Looking For</span> New Faces<br />And Fresh Ideas</div>
                    <div className='job-wrap'>
                        {datamain.map((item) => (
                            <div className='job-open' key={item.id}>
                                <div className='job-img'><img src={item.icon} alt="job-icon" /></div>
                                <div className='job-title'>{item.title}</div>
                                <div className='job-desc'>{item.details}</div>
                                <div className='yearposition'>
                                    <div className='years'>{item.years}</div>
                                    <div className='position'>{item.position}</div>
                                </div>
                                {item.require && (
                                    <div class="job-type">
                                        <span class="urgent-hiring">{item.require}</span>
                                    </div>
                                )}
                                <button className='apply-btn' type='button'>{item.button}</button>
                            </div>
                        ))}
                    </div>
                    <div className='employee'>
                        <div className='desc'>
                            <div className='heading'>Employee Speak</div>
                            <div className='subheading'><span>Don’t take our word for it. See what our </span> Employees Say.</div>
                            <div className='text'>Every employee is an important asset to the company. C-J believes in employee satisfaction in terms of their needs and what C-j Tech. is? Let's hear from their esteemed members.</div>
                            <button className='join-btn' type='button'>Join Now</button>
                        </div>
                        <div className='employeelist'>
                            <div className="employee-wrap">
                            {datawrap.map((item) => (
                                <div className='developer' key={item.id} style={{background:item.bg}}>
                                    <div className='text'>{item.deatails}</div>
                                    <div className='dev-name'>{item.name}</div>
                                    <div className='job-role'>{item.title}</div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Wrap>
        </Layout>
    );
};
export default Career;