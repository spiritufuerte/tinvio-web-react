import React from "react";
import classes from "../OrdersInfoSection.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import chickenLogo from "../../../../assets/image/image-logo-bottom-chicken@3x.png";
import joliebeanLogo from "../../../../assets/image/image-logo-bottom-joliebean@3x.png";
import bensLogo from "../../../../assets/image/image-logo-bottom-bens-cookies@3x.png";
import simplyLogo from "../../../../assets/image/image-logo-bottom-simply-wraps@3x.png";
import italianLogo from "../../../../assets/image/image-logo-bottom-italian-club@3x.png";

const viewportContext = React.createContext({});

 const ViewportProvider = ({ children }) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    );
};

const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
};

const MobileComponent = () => <div className={classes.swipable_images}>
    <Swiper
        spaceBetween={0}
        slidesPerView={3}
    >
        <SwiperSlide><img src={chickenLogo} alt="Lines" title="Lines"/></SwiperSlide>
        <SwiperSlide><img src={joliebeanLogo} alt="Lines" title="Lines"/></SwiperSlide>
        <SwiperSlide><img src={bensLogo} alt="Lines" title="Lines"/></SwiperSlide>
        <SwiperSlide><img src={simplyLogo} alt="Lines" title="Lines"/></SwiperSlide>
        <SwiperSlide><img src={italianLogo} alt="Lines" title="Lines"/></SwiperSlide>
    </Swiper>
</div>;
const DesktopComponent = () => <div className={classes.images_wrapper}>
    <img src={chickenLogo} alt="Lines" title="Lines"/>
    <img src={joliebeanLogo} alt="Lines" title="Lines"/>
    <img src={bensLogo} alt="Lines" title="Lines"/>
    <img src={simplyLogo} alt="Lines" title="Lines"/>
    <img src={italianLogo} alt="Lines" title="Lines"/>
</div>;

const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 768;

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function ImagesComponent() {
    return (
        <ViewportProvider>
            <MyComponent />
        </ViewportProvider>
    );
}

