import Image from "next/image";
import Link from "next/link";
import { ButtonClick } from "./ButtonClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hero = () => {
  return (
    <div className="hero md:pt-5 md:mt-5 mt-3 md:container mx-auto md:mb-40 mb-20">
      <Image
        src={"/images/hero-layer.svg"}
        className="md:block hidden absolute top-0 right-0 z-55 w-10/12"
        width={500}
        height={500}
      />
      <Image
        src={"/images/nav-layer.svg"}
        className="md:hidden blcok absolute top-0 right-0 z-55 w-screen"
        width={500}
        height={500}
      />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <Image
            className="max-w-sm rounded-xl shadow-2xl glass-morph"
            src={"/images/hannn2.jpg"}
            width={275}
            height={275}
          />
        </div>
        <div className="md:w-3/5">
          <h1 className="md:text-5xl font-bold">Reihan Setya Abida</h1>
          <h3 className="pt-3 font-bold ">Front End Developer</h3>
          <p className="py-6">
            Hi! it's Reihan, I graduated from Mercu Buana University majoring in
            informatics engineering, I am eager to embark on my journey in the
            tech industry.
          </p>
          <div className="md:text-left text-center">
            <ButtonClick
              className={"btn-secondary text-white"}
              href={`https://drive.google.com/file/d/1ehgOkrscjOU0un6550__ZAK17wWOCEre/view?usp=sharing`}
              target={"_blank"}
            >
              <FontAwesomeIcon icon="fa-solid fa-download" />
              Download CV
            </ButtonClick>
          </div>
        </div>
      </div>
    </div>
  );
};
