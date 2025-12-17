import Image from "next/image";
import Startup from "@/components/Startup/Startup";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans dark:bg-black">
      <Startup />
    </div>
  );
}
