import { useEffect,useState } from 'react'
import Image from 'next/image';
import img from '../public/bg.jpg';

function getWindowDimensions(){
    const{innerWidth:width, innerHeight:height} = window;
    return{
        width,
        height,
    }
};

function BGImage() {
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();

    useEffect(() => {
        function handleResize(){
            const {width, height} = getWindowDimensions();

            setWidth(width);
            setHeight(height);
        }
    

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    },[]);
 
    if(width && height){
        return <Image src={img}
        width={width}
        height={height}/>
    }
    return null;

}
;

export default BGImage