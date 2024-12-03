import Link from 'next/link'; // Import Link for routing
import CoreFeatures from "@/components/CoreFeatures";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Customer from "@/components/Customer";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <Features />
      <Services />
      <CoreFeatures />
      <Team />
      <br/>
      <br/>
      <br/>
      <br/>
      <Customer />
      <Work />
  
    </div>
  );
}