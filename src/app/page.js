"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import Image from "next/image";

export default function Home() {
  const generateRows = () => {
    const rows = [];

    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <img src={`/img-${2 * i - 1}.jpg`} alt="image slide" />
          </div>
          <div className="card card-right">
            <img src={`/img-${2 * i}.jpg`} alt="image slide" />
          </div>
        </div>
      );
    }

    return rows;
  };

  return (
    <>
      <ReactLenis root>
        <section className="hero">
          <div className="img">
            <Image src="/logo.png" alt="logo" width={300} height={180} />
          </div>
        </section>

        <section className="main">
          <div className="main-content">
            <div className="logo">
              <Image src="/logo.png" alt="logo" width={300} height={180} />
            </div>

            <div className="copy">
              <div className="line">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="line">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="line">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="btn">
              <button>Get More</button>
            </div>
          </div>

          {generateRows()}
        </section>

        <section className="footer">
          <Link href="#">Link in Description</Link>
        </section>
      </ReactLenis>
    </>
  );
}
