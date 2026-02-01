import localFont from "next/font/local";
import Session from "@/lib/actions/session";

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

const Home = () => {
  console.log("Page rendered as a  Server Component");
  return (
    <section className={`${spaceGrotesk.className}`}>
      Welcome to Stack Overflow Clone by using Next 16.1.6
      <Session />
    </section>
  );
};
export default Home;
