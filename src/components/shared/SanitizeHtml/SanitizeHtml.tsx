import { HTMLAttributes, createElement } from "react";
import sanitize from "sanitize-html";

type SanitizeHtmlProps = {
  children: string;
  tag: string;
} & HTMLAttributes<HTMLElement>;

export const SanitizeHtml = ({ tag, children, ...rest }: SanitizeHtmlProps) => {
  const sanitizedHtml = sanitize(children, {
    allowedTags: ["b", "i", "em", "strong"],
  });
  return createElement(
    tag,
    {
      ...rest,
    },
    sanitizedHtml
  );
};
