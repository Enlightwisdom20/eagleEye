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
        className="size-16"
      />
      <div className="flex flex-col gap-1 justify-end">
        <p className={`${ptSerif.className} font-normal text-3xl`}>
          The Eagle Eye
        </p>
        <p
          className={`${montserrat.className} font-light tracking-[0.17rem] text-[0.5rem]`}
        >
          A CLEAR VISION FOR YOUR BRAND
        </p>
      </div>
    </div>
  );
}
