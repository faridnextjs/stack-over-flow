import localFont from "next/font/local";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

const Home = () => {
  console.log("Page rendered as a  Server Component");
  return (
    <section className={`${spaceGrotesk.className}`}>
      Welcome to Stack Overflow Clone by using Next 16.1.1
    </section>
  );
};
export default Home;
