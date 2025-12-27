import Image from "next/image";
import Startup from "@/components/Startup/Startup";

export default function Home() {
  return (
    <div className="flex h-[100dvh] md:h-screen items-center overflow-hidden justify-center bg-black font-sans">
      <Startup />
    </div>
  );
}
