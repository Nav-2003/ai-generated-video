import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex">
        <div className="relative w-[60%] h-screen">
          <Image
            src="/landing-img.png"
            alt="Landing"
            fill // This makes image fill the parent div
            className="object-cover" // Optional: cover, contain, etc.
          />
        </div>
        <div className="flex h-screen justify-center items-center ml-20">
        <SignIn/>
        </div>
      </div>
    </>
  );
}
