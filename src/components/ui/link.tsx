import NextLink from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

type LinkProps = {
  children: string;
  href: string;
};

export const Link = ({ children, href }: LinkProps) => {
  const isInternalLink = href.startsWith("/");
  return (
    <>
      <NextLink
        href={href}
        target={isInternalLink ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className="inline-flex items-baseline font-bold text-primary underline hover:opacity-90"
      >
        {children}
        {!isInternalLink && <ArrowUpRightIcon className="size-4" />}
      </NextLink>
    </>
  );
};
