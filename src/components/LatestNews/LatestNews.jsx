import React, { use, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useParams } from 'react-router';

const categoryPromise = fetch("/news.json").then((res)=>res.json())

const LatestNews = () => {
    const categories = use(categoryPromise)
    
    const {id} = useParams()
    const [latesNews,setLatesNews] = useState([])

    useEffect(()=>{
        const filterLatestNews = categories.filter((latest)=>latest.others.is_today_pick== true)
        setLatesNews(filterLatestNews)
    },[])

    const singleNews = latesNews.map(news=> news.title)

    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                <p className='font-bold'>{singleNews} , </p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;