import React from 'react';
import {openCloseProductModel} from '../store/actions/siteSettingsAction';
import proDuctDefaultImage from '../assets/images/product-default.jpg';

// eslint-disable-next-line react/prop-types
function SingleProduct({type,product}){


    function onError({currentTarget}){
        currentTarget.onerror=null;
        currentTarget.src=proDuctDefaultImage;
    }
    switch (type){
    case 1:
        return (<div onClick={()=>openCloseProductModel(product)} className="bg-white shadow hover:shadow-lg  cursor-pointer" style={{minHeight:'360px'}}>
            <img className="w-full  object-cover rounded-t-sm h-56" src={product.imageUrl||proDuctDefaultImage} onError={onError}  alt={product.dishName}/>
            <div className="border-t-4 py-3 px-4 border-red-500">
                <h4 className="font-semibold truncate">{product.dishName}</h4>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2 cursor-pointer">{product.description}</p>
                <div className="mt-2">
                    {product.displayPricing&&<span className="mr-2">{product.displayPricing} {product.currency}</span>}
                    {product.rating.isPopular==1&&<span className="text-red-500">Popular</span>}
                </div>
            </div>
        </div>);
    default:
        return (<div onClick={()=>openCloseProductModel(product)} className="bg-white shadow hover:shadow-lg p-4 flex items-start justify-between cursor-pointer">
            <div className="w-3/4 pr-3">
                <p className="font-semibold truncate">{product.dishName}</p>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2 cursor-pointer">{product.description}</p>
                <div className="mt-2">
                    {product.displayPricing&&<span className="mr-2">{product.displayPricing} {product.currency}</span>}
                    {product.rating.isPopular==1&&<span className="text-red-500">Popular</span>}
                </div>
            </div>
            <img className="w-1/4 h-24 object-cover" onError={onError} src={product.imageUrl||proDuctDefaultImage}   alt={product.dishName}/>
        </div>
        );
    }

}export default SingleProduct;
