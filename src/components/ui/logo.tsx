import Image from "next/image";
import { Montserrat } from "next/font/google";
import { PT_Serif } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function Logo() {
  return (
    <div className="flex gap-1 mt-auto">
      <Image
        src={`/logo/2.png`}
        alt="Eagle Eye Logo"
        width={500}
        height={500}
        className="size-10 xs:size-12 sm:size-14 lg:size-16 flex-shrink-0"
      />
      <div className="flex flex-col gap-1 justify-end min-w-0">
        <p
          className={`${ptSerif.className} font-normal text-lg xs:text-xl sm:text-2xl lg:text-3xl truncate`}
        >
          The Eagle Eye
        </p>
        <p
          className={`${montserrat.className} font-light tracking-[0.17rem] text-[0.35rem] xs:text-[0.4rem] sm:text-[0.45rem] lg:text-[0.5rem] truncate`}
        >
          A CLEAR VISION FOR YOUR BRAND
        </p>
      </div>
    </div>
  );
}
