import Image from "next/image";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionAndVision";
import GoalsObjectives from "@/components/GoalsAndObjective";
import EventCard from "@/components/EventCard";
import Faqs from "@/components/FAQs";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
    <Hero />
    <MissionVision />
    <GoalsObjectives />
    <EventCard />
    <Faqs />
    <ContactForm />
    </>
  );
}
