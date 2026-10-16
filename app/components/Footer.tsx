import React from "react";
import GlobalContainer from "./GlobalContainer";
import FooterLinkCard from "./FooterLinkCard";
import cn from "../libs/utils";
import { class_names } from "../libs/classnames";
import { footerLinks } from "../libs/data";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { RiInstagramFill, RiLinkedinBoxFill, RiTwitterXFill, RiWhatsappFill } from "react-icons/ri";
import DistortedText from "./DistortedText";

type Props = {};

const Footer = (props: Props) => {
  return (
    <GlobalContainer className="bg-gradient-to-t from-[#780707]">
      <div className="flex justify-between w-full">
        <div className={cn("flex flex-col py-10", class_names.occupyOne)}>
          {footerLinks.map((link, index) => (
            <FooterLinkCard key={index} url={link.link} label={link.label} />
          ))}
        </div>
        <div className={cn("flex flex-col", class_names.occupyTwo)}>
          <div className={cn("grid md:grid-cols-3 ms-auto w-1/2 pt-10 border-t border-white/15")}>
            <div className="py-3 border-white/15 border-y flex justify-center items-center">
              <div className="group w-15 h-15 [perspective:1000px]">
                <div
                  className="
                    relative w-full h-full
                    transition-transform duration-700 ease-in-out
                    [transform-style:preserve-3d]
                    group-hover:[transform:rotateY(180deg)]
                "
                >
                  {/* FRONT */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorgray
                        flex items-center justify-center
                        text-2xl
                        [backface-visibility:hidden]
                        [transform:translateZ(6px)]
                    "
                  >
                    <FaFacebook />
                  </div>

                  {/* BACK */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorred
                        flex items-center justify-center
                        text-2xl
                        [backface-visibility:hidden]
                        [transform:rotateY(180deg)_translateZ(6px)]
                    "
                  >
                    <FaFacebook />
                  </div>

                  {/* CARD THICKNESS */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorred
                        [transform:translateZ(0)]
                    "
                  />
                </div>
              </div>
            </div>
            <div className="py-3 border-x border-white/15 border-y flex justify-center items-center">
              <div className="group w-15 h-15 [perspective:1000px]">
                <div
                  className="
                    relative w-full h-full
                    transition-transform duration-700 ease-in-out
                    [transform-style:preserve-3d]
                    group-hover:[transform:rotateY(180deg)]
                "
                >
                  {/* FRONT */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorgray
                        flex items-center justify-center
                        text-2xl
                        [backface-visibility:hidden]
                        [transform:translateZ(6px)]
                    "
                  >
                    <BsYoutube />
                  </div>

                  {/* BACK */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorred
                        flex items-center justify-center
                        text-2xl
                        [backface-visibility:hidden]
                        [transform:rotateY(180deg)_translateZ(6px)]
                    "
                  >
                    <BsYoutube />
                  </div>

                  {/* CARD THICKNESS */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorred
                        [transform:translateZ(0)]
                    "
                  />
                </div>
              </div>
            </div>
            <div className="py-3 border-white/15 border-y flex justify-center items-center">
              <div className="group w-15 h-15 [perspective:1000px]">
                <div
                  className="
                    relative w-full h-full
                    transition-transform duration-700 ease-in-out
                    [transform-style:preserve-3d]
                    group-hover:[transform:rotateY(180deg)]
                "
                >
                  {/* FRONT */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorgray
                        flex items-center justify-center
                        text-2xl
                        [backface-visibility:hidden]
                        [transform:translateZ(6px)]
                    "
                  >
                    <RiInstagramFill />
                  </div>

                  {/* BACK */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorred
                        flex items-center justify-center
                        text-2xl
                        [backface-visibility:hidden]
                        [transform:rotateY(180deg)_translateZ(6px)]
                    "
                  >
                    <RiInstagramFill />
                  </div>

                  {/* CARD THICKNESS */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorred
                        [transform:translateZ(0)]
                    "
                  />
                </div>
              </div>
            </div>
            <div className="py-3 border-white/15 border-b flex justify-center items-center">
              <div className="group w-15 h-15 [perspective:1000px]">
                <div
                  className="
                    relative w-full h-full
                    transition-transform duration-700 ease-in-out
                    [transform-style:preserve-3d]
                    group-hover:[transform:rotateY(180deg)]
                "
                >
                  {/* FRONT */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorgray
                        flex items-center justify-center
                        text-2xl
                        [backface-visibility:hidden]
                        [transform:translateZ(6px)]
                    "
                  >
                    <RiTwitterXFill />
                  </div>

                  {/* BACK */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorred
                        flex items-center justify-center
                        text-2xl
                        [backface-visibility:hidden]
                        [transform:rotateY(180deg)_translateZ(6px)]
                    "
                  >
                    <RiTwitterXFill />
                  </div>

                  {/* CARD THICKNESS */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorred
                        [transform:translateZ(0)]
                    "
                  />
                </div>
              </div>
            </div>
            <div className="py-3 border-white/15 border-b border-x flex justify-center items-center">
              <div className="group w-15 h-15 [perspective:1000px]">
                <div
                  className="
                    relative w-full h-full
                    transition-transform duration-700 ease-in-out
                    [transform-style:preserve-3d]
                    group-hover:[transform:rotateY(180deg)]
                "
                >
                  {/* FRONT */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorgray
                        flex items-center justify-center
                        text-2xl
                        [backface-visibility:hidden]
                        [transform:translateZ(6px)]
                    "
                  >
                    <RiLinkedinBoxFill />
                  </div>

                  {/* BACK */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorred
                        flex items-center justify-center
                        text-2xl
                        [backface-visibility:hidden]
                        [transform:rotateY(180deg)_translateZ(6px)]
                    "
                  >
                    <RiLinkedinBoxFill />
                  </div>

                  {/* CARD THICKNESS */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorred
                        [transform:translateZ(0)]
                    "
                  />
                </div>
              </div>
            </div>
            <div className="py-3 border-white/15 border-b flex justify-center items-center">
              <div className="group w-15 h-15 [perspective:1000px]">
                <div
                  className="
                    relative w-full h-full
                    transition-transform duration-700 ease-in-out
                    [transform-style:preserve-3d]
                    group-hover:[transform:rotateY(180deg)]
                "
                >
                  {/* FRONT */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorgray
                        flex items-center justify-center
                        text-2xl
                        [backface-visibility:hidden]
                        [transform:translateZ(6px)]
                    "
                  >
                    <RiWhatsappFill />
                  </div>

                  {/* BACK */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorred
                        flex items-center justify-center
                        text-2xl
                        [backface-visibility:hidden]
                        [transform:rotateY(180deg)_translateZ(6px)]
                    "
                  >
                    <RiWhatsappFill />
                  </div>

                  {/* CARD THICKNESS */}
                  <div
                    className="
                        absolute inset-0
                        bg-majorred
                        [transform:translateZ(0)]
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-majorgray/30">
            <div className="flex">
                <div className={cn("p-5 w-1/2 font-semibold border-y border-white/15")}>HOUSER@GMAIL.COM</div>
                <div className={cn("p-5 w-1/2 font-semibold border-b border-white/15")}>+2348125510572</div>
            </div>
            <div className="flex border-b border-white/15">
                <div className={cn("p-5 w-1/2 font-semibold")}>123 MAIN STREET, SUITE 200, AUSTIN, TX 78701</div>
            </div>
            <DistortedText />
          </div>
        </div>
      </div>
      <div className="border-t border-x border-white/15 flex">
      <div className={cn("p-5 text-sm", class_names.occupyOne)}>
        ©PROJECT BY MTA-DEV
      </div>
      </div>
    </GlobalContainer>
  );
};

export default Footer;
