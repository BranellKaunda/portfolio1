"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="footer-container">
        <div className="scroll-up" onClick={scrollToTop}>
          <Image
            src="/images/up.png"
            alt="scroll to top arrow"
            priority={true}
            width={40}
            height={40}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="images">
          <div className="img-div" style={{ width: "40px", height: "40px" }}>
            <Link href="https://www.instagram.com/braneldo">
              <Image
                src="/images/instagram.png"
                alt="react logo"
                priority={true}
                width={40}
                height={40}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>

          <div className="img-div" style={{ width: "40px", height: "40px" }}>
            <Link href="https://github.com/BranellKaunda">
              <Image
                src="/images/github.png"
                alt="react logo"
                priority={true}
                width={40}
                height={40}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>

          <div className="img-div" style={{ width: "40px", height: "40px" }}>
            <a
              href="mailto:branellk@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/email.png"
                alt="react logo"
                priority={true}
                width={40}
                height={40}
                style={{ objectFit: "cover" }}
              />
            </a>
          </div>
        </div>

        <p>Branell Kaunda ©2025</p>
      </div>
    </>
  );
};

export default Footer;
