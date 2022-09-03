import { useCallback, useState } from "react";
import { GithubLogo } from "./GithubLogo";
import { StarCount } from "./StarCount";

type OwnerRepo = {
  owner: string;
  repo: string;
};

export function Main() {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState<string | null>(null);
  const [orgRepo, setOrgRepo] = useState<OwnerRepo | null>(null);
  const nextjs = "vercel/next.js";
  const prisma = "prisma/prisma";
  const freeCodeCamp = "freeCodeCamp/freeCodeCamp";

  const handleClick = useCallback((value: string) => {
    setInputValue(value);
    const [owner, repo] = value.split("/");
    if (!owner || !repo) {
      setOrgRepo(null);
      setInputError("Invalid input");
      return;
    }
    setOrgRepo({ owner, repo });
    setInputError(null);
  }, []);

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-top p-20 pb-0 text-center z-10">
      <div className="flex flex-col items-center justify-top w-full h-96  mb-10 pt-10">
        {orgRepo ? (
          <StarCount repo={orgRepo.repo} owner={orgRepo.owner} />
        ) : (
          <GithubLogo />
        )}
      </div>
      <h1 className="text-6xl font-bold font-poppins text-slate-100 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600">
        Look to the stars!
      </h1>

      <h2 className="mt-3 text-2xl font-poppins text-slate-400">
        Enter the name of a <b>Github repo</b> to see how many stars it has.
      </h2>
      <div className="relative flex items-center justify-center w-full mt-8">
        <input
          className="bg-slate-100 p-2 w-72 pl-3 font-mono rounded-l placeholder:text-slate-400 focus:shadow-[0_0px_60px_15px_rgba(255,255,255,0.3)] transition focus:outline-none"
          type="text"
          placeholder="Enter a repo (org/repo)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-500 transition hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={() => {
            handleClick(inputValue);
          }}
        >
          Get Stars
        </button>

        {inputError && (
          <div className="absolute bottom-0 left-0 right-0">
            <div className="left-[calc(50%-165px)] animate-bounce absolute top-16 bg-rose-50 px-2 py-1 text-white p-2 rounded">
              <div className="h-2 w-2 bg-rose-50 absolute -top-1 left-[calc(50%-6px)] rotate-45" />
              <p className="text-rose-500">Oops, {inputError}</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-grow flex-col items-center justify-center w-full">
        <p className="text-slate-400 text-base mb-4">
          Or check out one of these examples:
        </p>
        <div className="flex gap-2">
          <button
            className="bg-blue-500 transition hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              handleClick(nextjs);
            }}
          >
            {nextjs}
          </button>
          <button
            className="bg-blue-500 transition hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              handleClick(freeCodeCamp);
            }}
          >
            {freeCodeCamp}
          </button>
          <button
            className="bg-blue-500 transition hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              handleClick(prisma);
            }}
          >
            {prisma}
          </button>
        </div>
      </div>
    </main>
  );
}
