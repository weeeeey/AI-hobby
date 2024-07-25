'use client';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
    useInView,
    motion,
    useScroll,
    useMotionValueEvent,
} from 'framer-motion';
import { useRouter } from 'next/navigation';

const lerp = (start: number, end: number, t: number) =>
    (end - start) * t + start;

const PracticeDashBoardPage = () => {
    const [isHover, setIsHoever] = useState(false);

    const animationRef = useRef<number | null>(null);
    const [point, setPoint] = useState({
        x: -100,
        y: -100,
    });
    const [lerpPoint, setLerpPoint] = useState({
        x: -100,
        y: -100,
    });

    const handleLerp = useCallback(() => {
        setLerpPoint((prev) => ({
            x: lerp(prev.x, point.x, 0.1),
            y: lerp(prev.y, point.y, 0.1),
        }));
        animationRef.current = window.requestAnimationFrame(handleLerp);
    }, [point]);

    useEffect(() => {
        animationRef.current = window.requestAnimationFrame(handleLerp);
        return () => {
            if (animationRef.current) {
                window.cancelAnimationFrame(animationRef.current);
            }
        };
    }, [handleLerp]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setPoint({
            x: e.clientX,
            y: e.clientY,
        });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    return (
        <div className="h-full">
            <div
                style={{
                    top: lerpPoint.y,
                    left: lerpPoint.x,
                    transform: 'translate(-50%, -50%)',
                    width: isHover ? '12vw' : '3vw',
                    height: isHover ? '12vw' : '3vw',
                    transition: 'width 0.3s, height 0.3s',
                }}
                className={`rounded-full bg-violet-300 fixed z-0  
                }`}
            />
            <div className="fixed inset-0 -z-10 ">
                <Image
                    fill
                    alt="background-img"
                    src="https://html5up.net/uploads/demos/spectral/images/banner.jpg"
                    className="brightness-50 "
                    objectFit="cover"
                />
            </div>
            <BoardSection setIsHoever={setIsHoever} />
            {/* <section className="h-full"></section> */}

            <MotionVideoSection />
            <FooterSection />
            <FlipSection />
            <TextSection />
        </div>
    );
};

const TextSection = () => {
    return (
        <div className="h-full grid place-content-center ">
            <div className="flex justify-around items-end bg-white  px-20 h-72 relative z-50">
                <div className="bar-wrapper ">
                    <div className="bar" />
                </div>
                <div className="bar-wrapper ">
                    <div className="bar" />
                </div>
                <div className="bar-wrapper ">
                    <div className="bar" />
                </div>
                <div className="bar-wrapper ">
                    <div className="bar" />
                </div>
                <div className="bar-wrapper ">
                    <div className="bar" />
                </div>
                <div className="bar-wrapper ">
                    <div className="bar" />
                </div>
                <div className="bar-wrapper ">
                    <div className="bar" />
                </div>
                <div className="bar-wrapper ">
                    <div className="bar" />
                </div>
                <div className="bar-wrapper ">
                    <div className="bar" />
                </div>
                <div className="bar-wrapper ">
                    <div className="bar" />
                </div>
            </div>
        </div>
    );
};

const FlipSection = () => {
    return (
        <section className="h-full flex justify-center items-center relative">
            <div className="card">
                <div className="letter relative bg-white w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center">
                    <div className="tt">
                        <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
                            Thank You
                        </p>
                        <p className="px-10 text-[10px] sm:text-[12px] text-gray-700">
                            It’s so nice that you had the time to view this idea
                        </p>
                        <p className="font-serif text-[10px] sm:text-[12px text-gray-700">
                            Wishing you a fantastic day ahead!
                        </p>
                        <p className="font-sans text-[10px] text-gray-700 pt-5">
                            SMOOKYDEV
                        </p>
                    </div>
                    <button className="seal bg-rose-500 text-red-800 size-10 rounded-full z-40 text-[10px]  font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
                        SMKY
                    </button>
                    <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
                    <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
                    <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
                    <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 bg-blue-300 w-full  grid place-items-center text-white font-bold text-[5vw]">
                <div className=" text ">Animate</div>
            </div>
        </section>
    );
};

const BoardSection = ({
    setIsHoever,
}: {
    setIsHoever: (b: boolean) => void;
}) => {
    return (
        <section
            className={`max-w-72 mx-auto h-[100vh] flex flex-col items-center justify-center space-y-5 *:z-20 text-center text-white transition-all  `}
        >
            <div
                onMouseEnter={() => setIsHoever(true)}
                onMouseLeave={() => setIsHoever(false)}
                className="mix-blend-difference"
            >
                <h1 className="font-bold text-[12vw] border-y-2 uppercase ">
                    {Array.from('special').map((a, idx) => (
                        <CharComponent text={a} key={`${a}-${idx}`} />
                    ))}
                </h1>
                <p className="text-lg py-2 px-4 max-w-[20rem]  mx-auto ">
                    ANOTHER FINE RESPONSIVE SITE TEMPLATE FREEBIE CRAFTED BY
                    HTML5 UP.
                </p>
            </div>
        </section>
    );
};

const MotionVideoSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const { scrollYProgress, scrollY } = useScroll({
        target: containerRef,
    });

    const updateAtScroll = () => {
        let video = videoRef.current;
        if (video && containerRef.current?.offsetTop! > 0) {
            video.pause();
            const p = scrollYProgress.get();

            const currentFrame = Math.round(p * video.duration * 1000) / 1000;
            video.currentTime = currentFrame;
        }
    };

    // useEffect(() => scrollY.onChange(throttle(updateAtScroll, 80)), []);

    useMotionValueEvent(scrollY, 'change', () => {
        updateAtScroll();
    });

    return (
        <section ref={containerRef} className=" relative w-full h-[300vh]">
            <div className="sticky top-0 left-0">
                <div className="videoContainer bg-black ">
                    <video
                        ref={videoRef}
                        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                        // autoPlay
                        muted
                        // frameBorder="0"

                        // loading="lazy"
                        // allowFullScreen
                        className="absolute w-full h-full z-20"
                    />
                </div>
            </div>
        </section>
    );
};

const CharComponent = ({ text }: { text: string }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <span
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={` ${isHover && 'mix-blend-difference'}`}
        >
            {text}
        </span>
    );
};

const FooterSection = () => {
    return (
        <section className="h-full flex flex-col space-y-10  justify-center   ">
            <div className=" bg-white flex items-center  py-2 overflow-x-hidden  whitespace-nowrap">
                <Dummy />
                <Dummy a=" mx-10 " />
            </div>
            <div className="  bg-white flex items-center  py-2 overflow-x-hidden  whitespace-nowrap  ">
                <Dummy aa />
                <Dummy aa a=" mx-10 " />
            </div>
        </section>
    );
};

const Dummy = ({ a, aa }: { a?: string; aa?: boolean }) => {
    return (
        <div
            data-direction={aa && 'reverse'}
            className={`dummy  flex items-center space-x-10 justify-center  ${a}  `}
        >
            <div className="border bg-red-600 text-white px-4 py-2 rounded-md ">
                가가가
            </div>
            <div className="border bg-black text-white px-4 py-2 rounded-md">
                라마바
            </div>
            <div className="border bg-black text-white px-4 py-2 rounded-md">
                사자차
            </div>
            <div className="border bg-black text-white px-4 py-2 rounded-md">
                아카타
            </div>
            <div className="border bg-black text-white px-4 py-2 rounded-md">
                아카타
            </div>
            <div className="border bg-black text-white px-4 py-2 rounded-md">
                아카타
            </div>
            <div className="border bg-black text-white px-4 py-2 rounded-md">
                아카타
            </div>
            <div className="border bg-black text-white px-4 py-2 rounded-md">
                아카타
            </div>
            <div className="border bg-black text-white px-4 py-2 rounded-md">
                아카타
            </div>
            <div className="border bg-black text-white px-4 py-2 rounded-md">
                아카타
            </div>
            <div className="border bg-blue-600 text-white px-4 py-2 rounded-md">
                나나나
            </div>
            <div className="border bg-blue-600 text-white px-4 py-2 rounded-md">
                나나나
            </div>
            <div className="border bg-blue-600 text-white px-4 py-2 rounded-md">
                나나나
            </div>
            <div className="border bg-blue-600 text-white px-4 py-2 rounded-md">
                나나나
            </div>
        </div>
    );
};

export default PracticeDashBoardPage;
