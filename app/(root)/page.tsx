import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Routes from "@/constants/routes";
// import Session from "@/lib/actions/session";

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

const Home = () => {
  return (
    <>
      <section
        className={`${spaceGrotesk.className} flex flex-col-reverse w-full justify-between gap-4 sm:flex-row sm:items-center`}
      >
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-11.5 px-4 py-3 text-light-900!"
          asChild
        >
          <Link href={Routes.ASK_QUESTION}>Ask a Question</Link>
        </Button>
        {/*<Session />*/}
      </section>
      <section className="pt-11">Local Search</section>
      Home Filter
      <div className="flex flex-col mt-10 gap-6 w-full">
        <p>Question 1</p>
        <p>Question 2</p>
        <p>Question 3</p>
        <p>Question 4</p>
      </div>
    </>
  );
};
export default Home;
