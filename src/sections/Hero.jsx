"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";

export default function Hero() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://www.chainlaw.com/wp-content/uploads/2024/07/personal-injury-lawyers-in-front-of-judge--1024x683.jpg",
    "https://law.wub.edu.bd/assets/images/law-department.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNT48Y47F0LpYRW19WBRzk9gScD3rzznVgi2FA5QHLDU-SG8Ql4ap-NlE&s=10",
  ];

  const updateUserRole = async () => {
    const data = {
      userRole: localStorage.getItem("selectedRole"),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/update-role/${user.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
  };

  if (session && !user?.role) {
    updateUserRole();
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[90vh] min-h-150 overflow-hidden bg-[#2a1f12]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <img
            src={slide}
            alt={`Hero background ${index + 1}`}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#43311c]/95 via-[#43311c]/60 to-transparent"></div>
        </div>
      ))}

      <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl w-full mx-auto">
          <div className="max-w-2xl">
            <SubHeading text="Premier Legal Representation" />
            <Heading
              isHero="true"
              texts={["Find & Hire", "Expert Legal Counsel"]}
            />
            <Button text="Browse Lawyers" link="/lawyers?page=1" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 h-1 rounded-none ${
                currentSlide === index
                  ? "w-16 bg-[#c5a880]"
                  : "w-6 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Skip to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
