import Link from 'next/link';
import React, { FC, useEffect, useRef } from 'react';
import Asset from '../../assets/services.json';
import HorizontalScroll from '../Containers/HorizontalScroll';
import { H2, H4, P } from '../Typography';

const ServicesSection: FC = () => {
    const servicesData = Asset.page_services;
    const [servieContainerHeight, setServiceContainerHeight] = React.useState(700);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (headerRef.current) {
            const headerHeight = headerRef.current.offsetHeight;
            const vh = window.innerHeight;
            const dynamicHeight = vh - headerHeight - 40;
            setServiceContainerHeight(dynamicHeight);
        }
    }, []);

    return (
        <section className='relative w-full min-h-screen'>
            <HorizontalScroll ref={headerRef}>
                <div className='relative h-full pl-40 p-0 flex justify-center items-center' style={{flexFlow: 'row nowrap'}}>
                    {
                        servicesData.map(service => (
                            <div className='relative mr-20 shrink-0 theme-scroll w-[700px]' key={service.title} style={{height: `${servieContainerHeight}px`, backgroundImage: `url(${service.image})`}}>
                                <H4 className={null} text={service.title} />
                                <P className={'col-span-2'} text={service.description} />
                                <Link href={service.link}>
                                    <a className='text-blue-500 self-end mt-auto font-body p-1
                                    border-1 border-guardsmanred hover:bg-guardsmanred hover:text-white transition  duration-200'>
                                        Les mer</a>
                                </Link>
                            </div>
                        ))
                    }
                    {/* <div className='relative w-[700px] bg-stratos mr-20 shrink-0' style={{height: `${servieContainerHeight}px`}}></div>
                    <div className='relative w-[700px] bg-stratos mr-20 shrink-0' style={{height: `${servieContainerHeight}px`}}></div>
                    <div className='relative w-[700px] bg-stratos mr-20 shrink-0' style={{height: `${servieContainerHeight}px`}}></div> */}
                </div>
            </HorizontalScroll>
            {/* <div className='grid grid-cols-2 gap-4'>
                {servicesData.map(service => (
                    <div key={service.title} className='flex flex-col p-4 hover:shadow-lg transition duration-200'>
                        <H4 className={null} text={service.title} />
                        <P className={'col-span-2'} text={service.description} />
                        <Link href={service.link}>
                            <a className='text-blue-500 self-end mt-auto font-body p-1
                            border-1 border-guardsmanred hover:bg-guardsmanred hover:text-white transition  duration-200'>
                                Les mer</a>
                        </Link>
                    </div>
                ))}
            </div> */}
        </section>
    )
}

export default ServicesSection;
