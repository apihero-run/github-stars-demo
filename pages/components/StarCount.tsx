import { repos } from "@apihero/github";
import { createEndpoint } from "@apihero/react";
import Image from "next/image";
import { GithubLogo } from "./GithubLogo";

const useGetRepository = createEndpoint(repos.getRepo);

export function StarCount({ owner, repo }: { owner: string; repo: string }) {
  const { data, status, error } = useGetRepository({
    owner,
    repo,
  });

  return (
    <>
      <div className="flex h-full w-full flex-col text-2xl mb-5 items-center justify-top">
        {status === "loading" ? (
          <div className="relative w-96 h-96 animate-logo-fade">
            <GithubLogo />
            {/* <p className="flex absolute align-middle items-centre">
              "Loading..."
            </p> */}
          </div>
        ) : status === "error" ? (
          <span>Something went wrong: {error.message}</span>
        ) : (
          <>
            <p className="text-2xl font-mono text-slate-100 mb-2">
              {owner}/{repo}
            </p>
            <div className="relative w-full h-full mb-5">
              <Image
                className="animate-star-animation "
                src="/star-large.svg"
                alt="Star"
                layout="fill"
              />
            </div>
            <h2 className="text-3xl font-bold font-poppins text-slate-100 w-full">
              {Intl.NumberFormat("en-US").format(data.stargazers_count)} stars
            </h2>
          </>
        )}
      </div>
    </>
  );
}
