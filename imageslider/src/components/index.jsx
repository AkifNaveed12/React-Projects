import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
const ImageSlider = ({url, limit=5, page=1}) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if(data){
                setImages(data)
                setLoading(false)
            }
        }catch (e) {
            setErrorMsg(e.message);
            setLoading(false)
        }
    }
    useEffect(() =>{
        if(url !== "" ) fetchImages(url);
    }, [url])
    console.log(images)

    if(loading){
        <div>loading data! please wait</div>
    }

    if(errorMsg !== null){
        <div>Error Occured! {errorMsg}</div>
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide -1)
    }
    function handleNext(){
        setCurrentSlide(currentSlide === images.length -1 ? 0 : currentSlide + 1)
    }
    return (
        <div className='container'>
            <BsArrowLeftCircleFill className="arrow arrow-left"
            onClick={handlePrevious}/>
            {
                images && images.length ?
                images.map((ImageItem, index) => (
                    <img key={ImageItem.id} 
                    alt={ImageItem.download_url}
                    src={ImageItem.download_url}
                    className={
                        currentSlide === index 
                        ? "current-image" 
                        : "current-image hide-current-image"}/>
                ))
                : null}
                <BsArrowRightCircleFill className='arrow arrow-right'
                onClick={handleNext}/>
                <span className='circle-indicators'>
                    {
                        images && images.length ?
                        images.map((_,index) => <button
                            key={index}
                            className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                            onClick={() => setCurrentSlide(index)}>
                        </button>)
                        : null
                    }

                </span>
        </div>
    );
}

export default ImageSlider;
