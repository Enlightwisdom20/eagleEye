import Image from "next/image";

function Logo() {
  return (
    <div className="p-2 overflow-hidden flex-none absolute top-0">
      <Image src="/logo2.jpg" alt="the eagle eye logo" height={75} width={75} />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="h-screen w-full grid grid-cols-2 overflow-hidden">
      <div className="relative flex flex-col justify-center px-10">
        <Logo />
        <h1 className="text-4xl">
          The best Digital marketing solution for your company
        </h1>
      </div>
      <div className="rotate-6 -z-10">
        <Image
          src="/landingPage.jpg"
          alt="digital marketting related image"
          fill
        />
      </div>
    </div>
  );
}
