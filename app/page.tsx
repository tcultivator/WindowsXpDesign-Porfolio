import Image from "next/image";
import Loading_Screen from "@/components/loading-screen/loading_screen";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans dark:bg-black">
      <Loading_Screen />
    </div>
  );
}
