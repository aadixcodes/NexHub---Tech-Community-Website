import Image from "next/image";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionAndVision";
import GoalsObjectives from "@/components/GoalsAndObjective";

export default function Home() {
  return (
    <>
    <Hero />
    <MissionVision />
    <GoalsObjectives />
    </>
  );
}
