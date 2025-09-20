import "./App.css";
import { useRef } from "react";
import ImageSwap from "./Components/ImageSwap";
// import ImageSwap2 from "./Components/ImageSwap2";
import { useIntersection } from "./hooks/useIntersection";
import { useEffect } from "react";
import ConfettiStars from "./Components/ConfettiStars";
import { ConfettiButton } from "./Components/ConfettiButton";
import { ConfettiSideCannons } from "./Components/ConfettiSideCannons";
import { ShapesButton } from "./Components/ShapesButton";
import { FireWorksButton } from "./Components/FireWorksButton";

function App() {
  const starsSectionRef = useRef(null);
  const cakeSectionRef = useRef(null);
  const flowerSectionRef = useRef(null);
  const bunnySectionRef = useRef(null);
  const endCardRef = useRef(null);

  const starsButtonRef = useRef(null);
  const confettiButtonRef = useRef(null);
  const confettiButtonRef2 = useRef(null);
  const sideCannonsRef = useRef(null);
  const shapesButtonRef = useRef(null);
  const fireWorksButtonRef = useRef(null);

  const isStarSectionVisible = useIntersection(starsSectionRef, "0px");
  const isCakeSectionVisible = useIntersection(cakeSectionRef, "0px");
  const isFlowerSectionRefVisble = useIntersection(flowerSectionRef, "0px");
  const isBunnySectionRefVisible = useIntersection(bunnySectionRef, "0px");
  const isEndCardRefVisible = useIntersection(endCardRef, "0px");

  const handleStarsClick = () => {
    starsButtonRef.current.click();
  };

  const handleconfettiClick = () => {
    confettiButtonRef.current.click();
    confettiButtonRef2.current.click();
  };

  const handleSideCannonClick = () => {
    sideCannonsRef.current.click();
  };

  const handleShapesClick = () => {
    shapesButtonRef.current.click();
  };

  const handleFireWorksClick = () => {
    fireWorksButtonRef.current.click();
  };

  useEffect(() => {
    if (isStarSectionVisible) {
      handleStarsClick();
      // console.log(starsButtonRef.current.click())
    }

    if (isCakeSectionVisible) {
      handleconfettiClick();
    }

    if (isFlowerSectionRefVisble) {
      handleSideCannonClick();
    }

    if (isBunnySectionRefVisible) {
      handleShapesClick();
    }

    if (isEndCardRefVisible) {
      handleFireWorksClick();
    }
  }, [
    isStarSectionVisible,
    isCakeSectionVisible,
    isFlowerSectionRefVisble,
    isBunnySectionRefVisible,
    isEndCardRefVisible,
  ]);

  return (
    <>
      {/* STARS HERE!! */}
      <section className="hero-1" ref={starsSectionRef}>
        <ImageSwap src="/images/IMG-20230911-WA0002.jpg" src2={'/images/IMG-20240219-WA0029.jpg'} />
        <div className="hero-content typewriter">
          <h1 className="animate-character">Happy Birthday MERI-JAAN!</h1>
        </div>
        <ConfettiStars ref={starsButtonRef}></ConfettiStars>
      </section>

      <section className="hero-2">
          <iframe src="https://drive.google.com/file/d/1sEu_SMBsCTdp6MoJMHQLqhla1oyq2RH6/preview" width="400" height="480" allow="autoplay"></iframe>
      </section>

      {/* REGULAR CONFETTI HERE */}
      <section className="cake-flower" ref={cakeSectionRef}>
        <ConfettiButton ref={confettiButtonRef}>Buttercup</ConfettiButton>
        <iframe
          src="https://my.spline.design/bdaycake1-PzWJWjLbpHdDzqoPCiHuVR1X/"
          frameborder="0"
          width="80%"
          height="80%"
        ></iframe>
        <ConfettiButton ref={confettiButtonRef2}>Buttercup</ConfettiButton>
      </section>

      <section className="hero-3">
        <div className="hero-content typewriter">
          <div className="heading-wrapper-2">
            <h1 className="text_shadows">Happy Birthday Buttercup!</h1>
          </div>
        </div>
      </section>

      {/* SIDE CANNON CONFETTI HERE */}

      <section className="cake-flower" ref={flowerSectionRef}>
        <ConfettiSideCannons ref={sideCannonsRef}>Beautiful</ConfettiSideCannons>
        <iframe
          src="https://my.spline.design/beeflyingflowerwebheroglbanimation-EphVIzzY79Cj1jCjdebyCwKC/"
          frameborder="0"
          width="80%"
          height="80%"
        ></iframe>
      </section>

      <section className="neon-4">
        <div className="neon-text-container">
          <div className="heading-wrapper-4">
            <h1 className="neon-text">HAPPY BIRTHDAY!</h1>
          </div>
          <ImageSwap src="/images/IMG-20231127-WA0001.jpg" src2="public/images/IMG-20240219-WA0030.jpg"/>
        </div>
      </section>

      {/* CUSTOM SHAPES HERE */}

      <section className="cake-flower" ref={bunnySectionRef}>
        <ShapesButton ref={shapesButtonRef}>You are so Beautiful!</ShapesButton>
        <iframe
          src="https://my.spline.design/bunnycake-1WIFhAFPYB0cKWXSGxONOndp/"
          frameborder="0"
          width="80%"
          height="80%"
        ></iframe>
      </section>

      <section className="cube">
        <div className="cube-content">
          <div className="cube-wrapper">
            <div className="box">
              <div className="inner">
                <span>Happy Birthday!</span>
              </div>
              <div className="inner">
                <span>Beautiful Buttercup!</span>
              </div>
            </div>
          </div>
          <iframe src="https://drive.google.com/file/d/1YttEaz0iECrt8kS3FmnV-5rxWdyFjzqq/preview" width="400" height="480" allow="autoplay"></iframe>
          <FireWorksButton ref={fireWorksButtonRef}>My Everything</FireWorksButton>
        </div>
      </section>

      {/* FIREWORS HERE!!!*/}
      <section className="end-card" ref={endCardRef}>
        <iframe
          src="https://my.spline.design/happybirthdaymom-7jnC0k4KeOUVSyQfaNHdrYo8/"
          frameborder="0"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}

export default App;
