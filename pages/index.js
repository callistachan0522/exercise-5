
import styles from "@/styles/Home.module.css";
import HorizontalChart from "@/components/HorizontalBar";
import VerticalBar from "@/components/VerticalBar";
import PieChart from "@/components/PieChart";


export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <HorizontalChart />
        <VerticalBar />
        <PieChart />
      </main>
    </>
  );
}
