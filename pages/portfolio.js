import Layout from '@/Components/layout/Layout';
import React from 'react';
import styled from 'styled-components';


const Wrap = styled.div`
& .wrapworkdetail{padding:50px;justify-content:center;lign-items:center;
 & .wrapbuttonmain{display: flex;justify-content: center; align-items: center;flex-direction: row; column-gap: 38px;
button{ padding: 8px 24px;border-radius: 10px; border: none; background-color: aliceblue;
  }
}
& .wrapworkdeliver{display:flex; align-items:center;justify-content:center; font-size: 32px;line-height: 50px;    font-weight: 600;color: #294762;  }        
& .wrapwork{font-size:35px;border-radius: 10px; padding:10px;font-size: 22px;font-weight: 700; display:inline-block;  color: #1589F1;margin-bottom: 25px;background-color:#EBF5FF;}}}
& .wrapmainwork{padding:10px;row-gap:20px;align-items:center;justify-content:center; width:100%; display:flex;display: grid;grid-template-columns: repeat(3, 1fr);column-gap:80px;
& .wrapimagework{border-radius:20px;}
& .wrapworkdetailmain{border:1px solid whitesmoke;border-radius:20px;  display:flex;align-items:center;justify-content:center;flex-direction:column;row-gap:10px;
& .wrapdetailmainboth{display:flex;flex-direction:row;column-gap:20px;align-items:center;justify-content:center;}
& .wrapareabutton{padding: 10px;color: black;text-align: center; border-radius: 50%;display: inline-block; -webkit-transition: all 0.5s ease;transition: all 0.5s ease-in-out; border: 2px solid #294762; animation: at-ripple 0.6s linear infinite;overflow: hidden;
}
& .wraptitle{color: #6C8BA7;font-size: 15px; font-weight:600;}
& .wraparea{color: #294762;font-size: 22px; font-weight:700;}
}
}
 & .wrapimage { background-image: url('/images/portfolio.png'); width: 100%;display: flex;left: 20px; background-size: cover;min-height: 550px;
 & .wrapportfolioimage {color: white; font-size: 50px; display: flex; justify-content: center; align-items: center; }
  }
`;

const Portfolio = () => {
  const data = [
    { id: 1, image: "/images/project0.jpg", title: 'Team Kudo', area: "Entertainment",button:'>' },
    { id: 2, image: "/images/project1.jpg", title: 'Vision Board', area: "Health & Meditation",button:">" },
    { id: 3, image: "/images/project2.jpg", title: 'FitDog', area: "Reference",button:">" },
    { id: 4, image: "/images/project3.jpg", title: 'Jewish Dating', area: "Social Networking",button:">" },
    { id: 5, image: "/images/project4.jpg", title: 'Food Jumla', area: "Food & Drink",button:">" },
    { id: 6, image: "/images/project5.jpg", title: 'Skip Scooters', area: "Business",button:">" },
    { id: 7, image: "/images/project6.jpg", title: 'Magazine Cafe Store', area: "Magazines & Newspapers",button:">" },
    { id: 8, image: "/images/project7.jpg", title: 'Maximum Realty Group', area: "Finance",button:">" },
    { id: 9, image: "/images/project8.jpg", title: 'TruFit Adaptive Fitness', area: "Health & Fitness",button:">" },
    { id: 10, image: "/images/project9.jpg", title: 'Nettpage', area: "Social Networking",button:">" },
    { id: 11, image: "/images/project10.jpg", title: 'Nettpage', area: "Social Networking",button:">" },
    { id: 12, image: "/images/project11.jpg", title: 'Nettpage', area: "Social Networking",button:">" },

  ];

  return (
    <Layout>
      <Wrap>
        <div className='wrapportfolio'>
          <div className='wrapimage'>
            <div className='wrapportfolioimage'>Portfolio</div>
          </div>

          <div className='wrapworkdetail'>

            <div className='wrapwork'>Our Works</div>
            <div className='wrapworkdeliver'>Delivering The Great Service That Our Client Love</div>

            <div className='wrapbuttonmain'>
              <button>All</button>
              <button>IOS</button>
              <button>Android</button>
              <button>Flutter</button>
              <button>ReactNative</button>
              <button>Web</button>
              <button>UI/UX</button>
            </div>
          </div>

          <div className='wrapmainwork'>
            {data.map((item) => (
              <div className='wrapworkdetailmain' key={item.id}>
                <img className='wrapimagework' src={item.image} alt={item.title} style={{ width: "360px", height: '300px' }} />
                <div className='wraptitle'>{item.title}</div>
                <div className='wrapdetailmainboth'>
                <div className='wraparea'>{item.area}</div>
                <div className='wrapareabutton'>{item.button}</div>
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
