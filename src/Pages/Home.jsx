import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Home() {
    
    let navigate = useNavigate();

    var temp_news_data = [
        {
            id: 0,
            title: 'UC Santa Cruz breaks records with increased applications for Fall 2024',
            date: 'FEATURED STORY',
            description: 'The University of California, Santa Cruz has once again received a record number of applications highlighting the desirability of the educational experience the campus provides. Leading at the intersection of innovation and social justice, UC Santa Cruz is actively fostering a community of forward-thinkers committed to driving positive change. The campus draws a diverse and accomplished applicant pool, comprising scholars poised to catalyze positive change worldwide.',
            imageURL: 'https://news.ucsc.edu/2024/03/images/10-18-23-kresge-acad-3201-classroom-cl-005.jpg'
        },
        {
            id: 1,
            title: 'Ph.D. student takes gut-wrenching research to the stage',
            date: 'April 5, 2024',
            description: 'Natalie Pedicino, a Ph.D. student in Molecular, Cell, and Developmental Biology, will bolt up to San Francisco on May 3 to distill her past three years of research into a three-minute lightning talk that will test her stage presence and science-communication skills.',
            imageURL: 'https://news.ucsc.edu/2024/04/images/natalie-pedicino-thumb.jpeg'
        },
        {
            id: 2,
            title: 'What is time?',
            date: 'April 5, 2024',
            description: 'The UC Santa Cruz Emeriti Association proudly presents the second annual Nauenberg History of Science Lecture on April 18. This exciting event features guest speaker, Peter Galison, the Joseph Pellegrino University Professor in history of science and physics at Harvard University, who is considered one of the foremost scholars in this field.',
            imageURL: 'https://news.ucsc.edu/2024/04/images/galison-2019.png'
        },
        {
            id: 3,
            title: 'First results from DESI make the most precise measurement of our expanding universe',
            date: 'April 4, 2024',
            description: 'We now have the largest 3-D map of our cosmos ever created, thanks to DESI—a powerful instrument mounted atop a telescope in Arizona with a robotic array of 5,000 fiber-optic “eyes” that look into the night sky.',
            imageURL: 'https://news.ucsc.edu/2024/04/images/desi-noirlab-thumb.jpg'
        },
    ]

    return (
        <div className="home-container">
            <div className="banner">
                <div className="logo">
                    <img src="https://www.altsystems.com/wp-content/uploads/2021/08/UCSC-Logo-1-768x212.png" alt="slug"></img>
                </div>
            </div>

            <div className="home-cards">
                <div className="announcements">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                    enabled: true,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {temp_news_data.map((item => {
                        return (
                            <SwiperSlide>
                                <div className="info-card" style={{display:'flex', maxWidth:'none', height:'95%', margin:'0', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}}>
                                    <div className="text">
                                        <h1> <a style={{border:'none', outline:'none', textDecoration:'none', color:'rgb(40, 100, 150)'}}href="#"> {item.title} </a></h1>
                                        <p> {item.date} </p>
                                        <hr></hr>

                                        <p style={{color:'black'}}>
                                            {item.description}
                                        </p>                                     
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }))}
                </Swiper>
                </div>
            </div>
        </div>
    )
}