import localFont from "next/font/local";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});
export default function Home() {
  console.dir("I am a Server Component");
  return (
    <section className={`${spaceGrotesk.className}`}>
      Welcome to Stack Overflow Clone by using Next 16.1.1
    </section>
  );
}
