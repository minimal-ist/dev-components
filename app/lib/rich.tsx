import { Fragment } from "react";

/**
 * Renders `**bold**` spans inside a string of client copy.
 *
 * The client's briefs bold the terms they want a buyer to catch — grade
 * names, process names — and that emphasis is part of the copy, not styling
 * we chose. Keeping the marker in the data means the text stays a plain
 * string in app/data/ rather than becoming JSX, and the emphasis survives
 * being edited by anyone who can type two asterisks.
 *
 * Deliberately only `**bold**`. This is not a Markdown renderer, and nothing
 * here is dangerouslySetInnerHTML — the segments are plain text nodes.
 */
export function rich(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((segment, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-ink">
        {segment}
      </strong>
    ) : (
      <Fragment key={index}>{segment}</Fragment>
    ),
  );
}
