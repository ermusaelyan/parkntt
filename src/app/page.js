import Image from "next/image";
import s from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import Workflow from "@/components/Workflow/Workflow";
import Features from "@/components/Features/Features";
import Presentation from "@/components/Presentation/Presentation";

export default function Home() {
  return (
    <main className={s.main}>
      <Hero />
        <div className={s.container}>
            <Workflow />
            <Features />
            <Presentation />
        </div>
    </main>
  );
}
