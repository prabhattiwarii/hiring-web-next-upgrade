import React from 'react';
import styled from 'styled-components';
import Layout from '@/Components/layout/Layout';

import { Icon, Day, Time, Growth, Learning, Environment, Festival, Game, Job1, Job2, Job3, Job4, Job5, Job6, Job7, } from "../Helpers/icon";

const Wrap = styled.div`
   & .banner{background: url(/images/career.jpg);background-size: cover; min-height: 550px;color:white; display: flex; align-items: center;flex-direction:column;justify-content:center; width:100%;left:0px;
     & .heading {font-size:44px; font-weight:600:}
     & .headingwrap{font-size:22px;}
    }
    & .offers{ padding:20px;justify-content:center;align-items:center;
        & .wrapheading{font-size: 30px; color: #5890ff;font-size: 18px; background-color: #ebf5ff; font-weight: 600; border-radius: 10px;  padding: 10px 30px; display: inline-block; margin-bottom: 15px;}
        & .wrapwork{font-size: 30px;display:flex;justify-content: center;font-weight: 400;
            span{font-weight: 700;}
          } 
        & .wrapicons{ display:flex;padding: 10px;flex-direction: row; column-gap: 20px;width: 100%; display: grid;grid-template-columns: repeat(4, 1fr);gap: 50px;margin: auto; }
         & .solutionitem{width:100%;justify-content: center;align-items:center;  display:flex;flex-direction:row;padding:10px; 
             & .wraptitle{font-weight:700;}
          
        }
        }
        & .wrapiconsmain{display:flex;flex-direction:row;column-gap:20px;padding: 10px;flex-direction: row; column-gap: 20px;width: 100%; display: grid;grid-template-columns: repeat(3, 1fr);gap: 50px;margin: auto;align-ites:center;justify-content:center;
        & .titlesolutionitem{font-size:21px;font-weight:700;color:#294762;}
        & .solution-item{background-color:whitesmoke;display: flex;flex-direction: column; row-gap: 20px; align-items: center;justify-content: center;  text-align: center; padding: 15px 10px 30px;border:3px solid wheat; border-radius:10px; & .buttonsolutionitem{color:white; font-size:17px;background-color:teal ;border:none;width:100%;height:50px;border-radius:5px;}
        & .wrapyearposition{display:flex;flex-direction:row;column-gap: 20px; & .yearssolutionitem{color:#294762;font-size:16px;}
        & .positionsolutionitem{color:#294762;font-size:16px;}}
            & .deatailssolutionitem{color:#6c8ba7;font-size:18px;
          }
        }
         }
        }
        & .wrapemployeelistmain{display: flex;flex-direction: column;row-gap: 16px;text-align:left;justify-content: center;align-items: center;
            & .wrapemployee1{padding: 10px 30px;display: inline-block; border-radius: 10px; font-size: 18px;font-weight: 600; color: #1589F1; background-color: #ebf5ff;}
        & .wrapemployee2{font-weight: 300;font-size: 30px;padding-top: 20px;} span{font-weight:700}
        & .wrapemployee3{font-weight: 200;font-size: 18px;linehight:10;}
        & .wrapbutton{padding:10px;width:150Px;background-color:skyblue;border:none;color:white;border-radius:10px;}
        }
        & .wrapmain{display:flex;padding:20px;}
        & .wrapemployeelist{display:flex; column-gap:20px;padding: 10px;flex-direction: row; column-gap: 20px;width: 100%; display: grid;grid-template-columns: repeat(2, 1fr);gap: 50px;}
        & .wrapmaindetails{background-color:whitesmoke;border:2px solid skyblue;  width:100%;padding:20px;display:flex;align-items:center;justify-content:centre;flex-direction:column;row-gap:20px;border-radius:10px; font-size:14px;font-size: 10px;text-align: center;color: #56606a;font-weight: 500;background-color:whitesmoke;
        & .wrapmaintitle{font-size:20px;font-weight:600;}
        & .wrapmainname{font-size:14px;font-weight:500;}
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
        { id: 7, title: "Festival Celebrations", icon: Day },
        { id: 8, title: "Festival Celebrations", icon: Icon },
    ];

    const datamain = [
        { id: 9, title: "Project manager", details: "Effective Communication, Time Management, Technical Expertise, Critical Thinking And Problem Solving", years: "1-4 Years", position: "2 Position", button: " Apply Now", icon: Icon },
        { id: 10, title: "BDE ( Online Bidder )", details: "Basic IT Skills, Creatively And Strategically, Negotiation ", years: "0-2 Years", position: "2 Position", button: " Apply Now", icon: Day },
        { id: 11, title: "Node JS Developer", details: "JavaScript, MongoDB, API Development", years: "1-4 Years", position: "2 Position", button: " Apply Now", icon: Growth },
        { id: 12, title: "Android Developer ", details: " Java, XML, Android Studio, Firebase, Kotlin", years: "1-4 Years", position: "2 Position", button: " Apply Now", icon: Learning },
        { id: 13, title: "Laravel Developer", details: "Laravel,HTML,CSS,Java Script, MySql", years: "1-4 Years", position: "2 Position", button: " Apply Now", icon: Time },
        { id: 14, title: "Friendly Environment", details: " React ,JavaScript, Redux, MongoDB", years: "1-4 Years", position: "2 Position", button: " Apply Now", icon: Time },
        { id: 15, title: "Android Developer ", details: " Java, XML, Android Studio, Firebase, Kotlin", years: "1-4 Years", position: "2 Position", button: " Apply Now", icon: Time },
        { id: 16, title: "Laravel Developer", details: "Laravel,HTML,CSS,Java Script, MySql", years: "1-4 Years", position: "2 Position", button: " Apply Now", icon: Day },
        { id: 17, title: "Friendly Environment", details: " React ,JavaScript, Redux, MongoDB", years: "1-4 Years", position: "2 Position", button: " Apply Now", icon: Growth },
    ];

    const datawrap = [
        { id: 18, title: "ReactDeveloper", name: "Pankaj", deatails: "“I have been working here as a sr php developer for the last 5 years and it was a wonderful experience working with the Weapplinse family. Weapplinse has given me a better chance to learn new things in the last few years and for that I am very thankful to weapplinse !! If you want to get a worthwhile experience there is no alternative of C-J.”", },
        { id: 19, title: "ReactDeveloper", name: "Anshul", deatails: "“I have been working here as a sr php developer for the last 5 years and it was a wonderful experience working with the Weapplinse family. Weapplinse has given me a better chance to learn new things in the last few years and for that I am very thankful to weapplinse !! If you want to get a worthwhile experience there is no alternative of C-J.”", },
        { id: 20, title: "NexjsDeveloper", name: "Ajay", deatails: "“I have been working here as a sr php developer for the last 5 years and it was a wonderful experience working with the Weapplinse family. Weapplinse has given me a better chance to learn new things in the last few years and for that I am very thankful to weapplinse !! If you want to get a worthwhile experience there is no alternative of C-J.”", },
        { id: 21, title: "Android Developer", name: "Neha", deatails: "“I have been working here as a sr php developer for the last 5 years and it was a wonderful experience working with the Weapplinse family. Weapplinse has given me a better chance to learn new things in the last few years and for that I am very thankful to weapplinse !! If you want to get a worthwhile experience there is no alternative of C-J.”", },

    ]

    return (
        <Layout>
            <Wrap>

                <div className="banner">

                    <div className="headingwrap">Career</div>
                    <div className="heading">Home-Career</div>
                </div>

                <div className="offers">
                    <div className='wrapheading'>What We Offers</div>
                    <div className='wrapwork'>Work - Life Balance For Our<span> Prestigious Team!</span></div>

                    <div className='wrapicons'>
                        {data.map((item) => (
                            <div className='solutionitem' key={item.id}>
                                <div className='wrapimage'>{item.icon({ width: 70, height: 70 })}</div>
                                <div className='wraptitle'>{item.title}</div>
                            </div>
                        ))}
                    </div>

                    <div className='wrapheading'>Let's Work Together</div>
                    <div className='wrapwork'>We're Always Looking For
                        <br /><span>New FacesNew FacesAnd Fresh Ideas </span></div>
                    <div className='wrapiconsmain'>
                        {datamain.map((item) => (
                            <div className='solution-item' key={item.id}>
                                <div className='iconsolutionitem'>{item.icon({ width: 70, height: 70 })}</div>
                                <div className='titlesolutionitem'>{item.title}</div>
                                <div className='deatailssolutionitem'>{item.details}</div>
                                <div className='wrapyearposition'>
                                    <div className='yearssolutionitem'>{item.years}</div>
                                    <div className='positionsolutionitem'>{item.position}</div>
                                </div>
                                <button className='buttonsolutionitem'>{item.button}</button>
                            </div>
                        ))}
                    </div>
                    <div className='wrapmain'>

                        <div className='wrapemployeelistmain'>
                            <div className='wrapemployee1'>Employee Speak</div>
                            <div className='wrapemployee2'>Don’t take our word for it. See what our <span>Employees Say.</span></div>
                            <div className='wrapemployee3'>Every employee is an important asset to the company. C-J believes in employee satisfaction in terms of their needs and what Weapplinse is? Let's hear from their esteemed members.</div>
                            <button className='wrapbutton'>Join Now</button>
                        </div>

                        <div className='wrapemployeelist'>

                            {datawrap.map((item) => (
                                <div className='wrapmaindetails' key={item.id}>
                                    <div className='wrapmaindetail'>{item.deatails}</div>
                                    <div className='wrapmaintitle'>{item.title}</div>
                                    <div className='wrapmainname'>{item.name}</div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>
            </Wrap>
        </Layout>
    );
};
export default Career;