import { useRouter } from "next/router";

// ----------------------------------------------------------------------

type ReturnType = {
  active: boolean;
  isExternalLink: boolean;
};

export default function useActiveLink(path: string, deep = true): ReturnType {
  const { asPath } = useRouter();

  const normalActive = path ? asPath === path : false;

  const deepActive = path ? asPath.startsWith(path) : false;

  return {
    active: deep ? deepActive : normalActive,
    isExternalLink: path.includes("http"),
  };
}
