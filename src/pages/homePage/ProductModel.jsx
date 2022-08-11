import React from "react";
import {modelAnimation} from "../../helper/animations";
import {openCloseProductModel} from "../../store/actions/siteSettingsAction"
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import proDuctDefaultImage from "../../assets/images/product-default.jpg";

function ProductModel(){

    const data = useSelector(state => state.siteSettings.productModel);
    function onError({currentTarget}){
        currentTarget.onerror=null;
        currentTarget.src=proDuctDefaultImage;
    }
    return(<motion.div
        variants={modelAnimation}
        initial="init"
        animate="animate"
        exit="exit"
        className="z-50 bg-white w-10/12 md:w-2/5 2xl:w-1/3  shadow "
        style={{maxHeight:'90vh'}}
    >

        <div className="relative h-full" style={{minHeight:'90vh'}}>
            <button onClick={()=>openCloseProductModel(false)} className="absolute top-2 right-5 p-2 bg-white rounded-full text-primary" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="w-full   h-full overflow-y-auto " style={{maxHeight:'calc(90vh - 8rem)'}}>

                <img className="w-full h-72 object-cover" onError={onError} src={data.imageUrl||proDuctDefaultImage} alt={data.dishName}/>

                <div className="px-4 mt-5">
                    <h2 className="font-black text-3xl">{data.dishName}</h2>

                    <p className="mt-2">{data.description}</p>

                    <h4 className="mt-3 font-semibold">Choose your protein</h4>


                    <div className="mt-5">
                        <label className="flex items-center block mb-4" htmlFor="1">
                            <input type="radio" id="1" className="form-radio mr-2 text-primary"/>
                            <span>Double Grilled Chicken Thigh</span>
                        </label>
                        <label className="flex items-center block mb-4" htmlFor="2">
                            <input type="radio" id="2" className="form-radio mr-2 text-primary"/>
                            <span>Grilled Chicken Thigh</span>
                        </label>
                        <label className="flex items-center block mb-4" htmlFor="3">
                            <input type="radio" id="3" className="form-radio mr-2 text-primary"/>
                            <span>Chicken Breast</span>
                        </label>
                        <label className="flex items-center block mb-4" htmlFor="4">
                            <input type="radio" id="4" className="form-radio mr-2 text-primary"/>
                            <span>Falafel</span>
                        </label>
                        <label className="flex items-center block mb-4" htmlFor="5">
                            <input type="radio" id="5" className="form-radio mr-2 text-primary"/>
                            <span>Vegan Falafel</span>
                        </label>
                    </div>
                </div>
                <div className="w-full bg-white absolute bottom-0 left-0 right-0 border-t py-5 px-5">
                    <div className="flex justify-center items-center">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <span className="px-16 font-semibold text-lg">1</span>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>

                    <button className="w-full py-2 text-center rounded-sm bg-gray-200 mt-4">
                        Add for $10
                    </button>

                </div>

            </div>

        </div>

    </motion.div>)
}export default  ProductModel

