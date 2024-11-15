import Image from "next/image";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionAndVision";
import GoalsObjectives from "@/components/GoalsAndObjective";
import OurTeam from "@/components/OurTeam";
import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <>
    <Hero />
    <MissionVision />
    <GoalsObjectives />
    <OurTeam />
    <EventCard />
    </>
  );
}
