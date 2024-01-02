import React from "react";

export interface IHighlightMatchProps {
  pattern: string;
  text: string;
  classes?: {
    highlighted?: string;
  };
}

const HighlightMatch: React.FC<IHighlightMatchProps> = ({
  pattern,
  text,
  classes,
}) => {
  if (!pattern) return text; // If no input value, return the whole text

  // Find the index of match and split the text into parts
  const matchStart = text.toLowerCase().indexOf(pattern.toLowerCase());
  const matchEnd = matchStart + pattern.length;
  if (matchStart === -1) return text; // If no match found, return the whole text

  // Break text into parts: before match, match, and after match
  const beforeMatch = text.slice(0, matchStart);
  const matchText = text.slice(matchStart, matchEnd);
  const afterMatch = text.slice(matchEnd);

  return (
    <>
      {beforeMatch}
      <span className={classes?.highlighted}>{matchText}</span>
      {afterMatch}
    </>
  );
};

export default HighlightMatch;
