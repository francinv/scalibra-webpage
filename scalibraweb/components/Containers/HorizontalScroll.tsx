import React, { Dispatch, FC, forwardRef, HTMLProps, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { H2 } from "../Typography";

const calcDynamicHeight = (objectWidth: number) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh + 150;
  };
  
const handleDynamicHeight = (ref: RefObject<HTMLDivElement>, setDynamicHeight: Dispatch<SetStateAction<any>>) => {
    if (ref.current) {
        const objectWidth = ref.current.scrollWidth;
        const dynamicHeight = calcDynamicHeight(objectWidth);
        setDynamicHeight(dynamicHeight);
    }
};

const applyScrollListener = (ref: RefObject<HTMLDivElement>, setTranslateX: Dispatch<SetStateAction<number>>) => {
    window.addEventListener("scroll", () => {
        if (ref.current) {
            const offsetTop = -ref.current.offsetTop;
            setTranslateX(offsetTop);
        }
    });
};

type HorizontalScrollProps = HTMLProps<HTMLDivElement>;

const HorizontalScroll = forwardRef<HTMLDivElement, HorizontalScrollProps>((props, ref) => {
    const [dynamicHeight, setDynamicHeight] = useState(null);
    const [translateX, setTranslateX] = useState(0);

    const containerRef = useRef(null);
    const objectRef = useRef(null);

    const resizeHandler = () => {
        handleDynamicHeight(objectRef, setDynamicHeight);
    };
    
    useEffect(() => {
        handleDynamicHeight(objectRef, setDynamicHeight);
        window.addEventListener("resize", resizeHandler);
        applyScrollListener(containerRef, setTranslateX);
    }, []);
    
    return (
        <div className="relative w-full" style={{height: `${dynamicHeight}px`}}>
            <div className='sticky top-0 h-screen w-full overflow-x-hidden' ref={containerRef}>
                <H2 className='text-center mt-4 mb-5' text="Våre tjenester" ref={ref} />
                <div className="absolute will-change-transform" style={{transform: `translateX(${translateX}px)`}} ref={objectRef}>
                    {props.children}
                </div>
            </div>
        </div>
    );
});

export default HorizontalScroll;