import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Routes from "@/constants/routes";
import LocalSearch from "@/components/search/localSearch";

// import Session from "@/lib/actions/session";

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

const questions = [
  {
    _id: "1",
    title: "How to learn React19?",
    description: "learning React19 is not hard",
    tags: [{ id: "1", name: "React19" }],
    author: [{ id: 1, name: "Farid" }],
    upvotes: 11,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn HTML5?",
    description: "learning HTML5 is not hard",
    tags: [{ id: "2", name: "HTML5" }],
    author: [{ id: 1, name: "Farid" }],
    upvotes: 11,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "How to learn Next16?",
    description: "learning Next16 is not hard",
    tags: [{ id: "3", name: "Next 16" }],
    author: [{ id: 1, name: "Farid" }],
    upvotes: 11,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "4",
    title: "How to learn TailwindCSS?",
    description: "learning TailwindCSS is not hard",
    tags: [{ id: "4", name: "TailwindCSS" }],
    author: [{ id: 1, name: "Farid" }],
    upvotes: 11,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;
  const filteredQuestions = questions.filter((questions) =>
    questions.title.toLowerCase().includes(query?.toLowerCase()),
  );

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
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search Questions"
          otherClasses="flex-1"
          iconPosition="left"
        />
      </section>
      {/*Home Filter*/}
      <div className="flex flex-col mt-10 gap-6 w-full">
        {filteredQuestions.map((questions) => (
          <h1 key={questions._id}> {questions.title}</h1>
        ))}
      </div>
    </>
  );
};
export default Home;
