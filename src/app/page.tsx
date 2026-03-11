import { FeatureSection } from "@/components/home/feature";
import { Footer } from "@/components/home/footer";
import { HeroSection } from "@/components/home/hero";
import { HomeFile } from "@/components/home/homef";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <HomeFile></HomeFile>
      <Footer></Footer>
    </div>
  );
}
