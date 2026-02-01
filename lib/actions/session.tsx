import { Suspense } from "react";
import Image from "next/image";
import { auth } from "@/auth";
import SignOut from "@/lib/actions/signOut";

const Session = () => {
  return (
    <Suspense fallback={<p className="p-5 text-center">Loading session...</p>}>
      <GetSession />
    </Suspense>
  );
};
export default Session;

const GetSession = async () => {
  const session = await auth();
  if (!session?.user) return null;
  console.log("session", session);
  return (
    <section className="grid place-content-center gap-5 place-items-center h-dvh">
      <h1>
        {" "}
        Welcome{" "}
        <strong className="text-violet-500">{session?.user?.name}</strong>
      </h1>
      {session?.user?.image ? (
        <Image
          src={session.user.image as string}
          alt="User Profile Image"
          width={100}
          height={100}
          className="rounded-full"
        />
      ) : (
        "No Image"
      )}
      <p>
        Email:{" "}
        <strong className="text-green-400">{session?.user?.email}</strong>
      </p>
      <p>
        Expires: <strong className="text-red-500">{session?.expires}</strong>
      </p>
      {session?.expires ? <SignOut /> : "Not signed in"}
    </section>
  );
};
