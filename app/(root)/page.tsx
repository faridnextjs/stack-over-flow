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
      Welcome to Stack Overflow Clone by using Next.js 16.1.6 with React Server
      Components 19.2.4 and NextAuth.js for authentication. This project is a
      full-stack application that mimics the functionality of Stack Overflow,
      allowing users to ask questions, provide answers, and engage in
      discussions. The application is built using Next.js, which enables
      server-side rendering and static site generation for optimal performance.
      NextAuth.js is integrated to handle user authentication, providing a
      secure and seamless login experience. Whether you&#39;re looking to ask a
      question or share your knowledge, this Stack Overflow Clone offers a
      robust platform for developers to connect and collaborate.
      <Session />
    </section>
  );
};
export default Home;
