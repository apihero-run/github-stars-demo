import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { StarCount } from "./components/StarCount";
import { GetStarsInput } from "./GetStarsInput";

const Home: NextPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#020922]  to-[#2a273f]">
      <Head>
        <title>Github Star Demo</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap" />
      </Head>

      <div className="w-full overflow-hidden absolute h-screen top-0">
        <Image
          className="animate-pulse"
          src="/github-star-field.svg"
          alt="Star field large"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full overflow-hidden absolute top-0 h-screen">
        <Image
          className="animate-pulse"
          src="/github-star-field-small.svg"
          alt="Star field small"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <main className="flex w-full flex-1 flex-col items-center justify-top p-20 text-center">
        <StarCount />
        <h1 className="text-6xl font-bold font-poppins text-slate-100">
          Look to the stars!
        </h1>

        <p className="mt-3 text-2xl font-poppins text-slate-400">
          Enter the name of a <b>Github repo</b> to see how many stars it has.
        </p>
        <GetStarsInput />
      </main>

      <footer className="flex z-30 h-10 w-full items-center justify-center bg-gradient-to-r from-[#4669E5] via-[#2B52DE] to-[#644DF5]">
        <a
          className="flex items-center text-sm justify-center gap-2 text-slate-50"
          href="https://apihero.run"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image
            src="/logo-light.svg"
            alt="API Hero Logo"
            width={100}
            height={26}
          />
        </a>
      </footer>
    </div>
  );
};

export default Home;
