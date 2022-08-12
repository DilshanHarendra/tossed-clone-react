import React, {useEffect, useState} from 'react';
import SingleProduct from '../../components/SingleProduct';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/pagination';
import {useSelector} from 'react-redux';
import LoadingCards from '../../components/LoadingCards';


function DealsSection(){
    const foods = useSelector(state => state.foods.foods);
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        var keys = Object.keys(foods);
        if (loading&&keys.length>0){
            fetchDeals();
        }
    },[foods]);

    function fetchDeals(){
        var keys = Object.keys(foods);
        setProducts(foods[keys[ keys.length * Math.random() << 0]]||[]);
        setLoading(false);

    }



    return<div  className="p-2 pt-0 mt-8">
        <h2 className="font-black text-xl text-gray-700">3 Meal Deals from £13.99</h2>
        <p className="text-gray-500 text-md mb-4">3 Meal Deals from £13.99</p>

        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                !loading&&products.map((product)=>(
                    <SwiperSlide key={product.dishId}>
                        <SingleProduct product={product} type={1}/>
                    </SwiperSlide>
                )
                )
            }
            {
                loading&&[1,2,3,4,5].map((item)=>(
                    <SwiperSlide key={item}>
                        <LoadingCards type={1}/>
                    </SwiperSlide>
                )
                )
            }
        </Swiper>

    </div>;
}export default DealsSection;
