import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>{data.name}</title>
      </Head>
      {/* This button should not go into production */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-5 right-5">
          <Link href="/edit">
            <Button type="primary">Edit Data</Button>
          </Link>
        </div>
      )}

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="mt-10 laptop:mt-20">
          <div className="flex flex-col justify-center mt-7">
            <h1
              ref={textOne}
              className="w-4/5 p-1 mb-4 font-serif text-4xl tablet:text-4xl laptop:text-4xl laptopl:text-7xl tablet:p-2 text-bold mob:w-full laptop:w-4/5 tablet:mb-3"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="w-full p-1 text-3xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl tablet:p-2 laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="w-full p-1 text-3xl tablet:text-3xl laptop:text-2xl laptopl:text-4xl tablet:p-2 laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="w-full p-1 text-3xl tablet:text-3xl laptop:text-2xl laptopl:text-4xl tablet:p-2 laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="p-2 mt-16 laptop:mt-30 laptop:p-0" ref={workRef}>
          <h1 className="text-3xl font-bold text-center">My Projects</h1>
          <div className="grid grid-cols-1 gap-4 mt-5 laptop:mt-10 tablet:grid-cols-2">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-center p-2 mt-10 laptop:mt-40 laptop:p-0" ref={aboutRef}>
          <h1 className="text-2xl tablet:m-10 ">About Me</h1>
          <p className="w-full mt-2 font-serif text-xl tablet:m-10 laptop:text-3xl laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
