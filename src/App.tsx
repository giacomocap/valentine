import { useEffect, useRef, useState } from "react";
import Snowfall from "react-snowfall";
import './App.css'
import { gsap } from "gsap";
import birdie from "/birdie.png"
import mona from "/mona.png"

const snowflake1 = document.createElement('img')
snowflake1.src = 'https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif'
const snowflake2 = document.createElement('img')
snowflake2.src = 'https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif'
const snowflake3 = document.createElement('img')
snowflake3.src = birdie
const snowflake4 = document.createElement('img')
snowflake4.src = mona
const texts = [
  "Hello, my dear",
  "I've asked you before, but it seemed too ordinary",
  "So I thought of doing something simple",
  "But a bit unique, because you're special to me",
  "I'm very fortunate to have you in my life",
  "I hope you'll say yes"
];
const images = [snowflake1, snowflake2, snowflake3, snowflake4]
const phrases = [
  "No",
  "Sei sicura?",
  "Davvero sicura?",
  "Ripensaci!",
  "Ultima possibilità!",
  "Sicuramente no?",
  "Potresti pentirtene",
  "Ripensaci ancoraaa",
  "Sei assolutamente certa?",
  "Stai commentendo sicuramente un errore",
  "Hai un cuore di pietra",
  "Anzi, non sembra che tu ce l'abbia",
  "Sicura sicura?",
  "Non vorresti ripensarci?",
  "Risposta finale??",
  "Mi stai spezzando il cuore ;("
];

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Check if it's the last text, then show the component after animation
      if (currentTextIndex === texts.length - 1) {
        gsap.to(textRef.current, {
          opacity: 0,
          duration: 1,
          onComplete: () => setShowComponent(true),
        });
        clearInterval(interval);
      } else {
        // Animate text change
        gsap.to(textRef.current, {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            setCurrentTextIndex((prevIndex) => prevIndex + 1);
            gsap.to(textRef.current, { opacity: 1, duration: 1 });
          },
        });
      }
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [currentTextIndex]);


  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="container">
      <Snowfall
        // Applied to the canvas element
        // style={{ background: '#fff' }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={40}
        // Pass in the images to be used
        images={images}
        radius={[30, 50]}

      />
      <div className="message" ref={textRef} style={{ opacity: showComponent ? 0 : 1 }}>
        {texts[currentTextIndex]}
      </div>
      {/* <TextAnimation ref={textAnimationRef} texts={texts} duration={3} onComplete={handleAnimationComplete} /> */}
      {showComponent && (yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="message">Beloooooooooooooooooooooooo</div>
        </>
      ) : (
        <>
          <h1 className="title">Will you be my Valentine?</h1>
          <div className="button-container">
            <button
              className="button button-yes"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Si
            </button>
            <button
              onClick={handleNoClick}
              className="button button-no"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      ))}
    </div>
  );
}