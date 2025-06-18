import { Choose } from "@/widgets/choose/Choose";
import { Construction } from "@/widgets/construction/Construction";
import { Hero } from "@/widgets/hero/Hero";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Construction/>
      <Choose/>
    </main>
  );
}
