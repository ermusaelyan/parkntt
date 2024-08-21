import Image from "next/image";
import s from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import Workflow from "@/components/Workflow/Workflow";

export default function Home() {
  return (
    <main className={s.main}>
      <Hero />
        <div className={s.container}>
            <Workflow />
        </div>
    </main>
  );
}
