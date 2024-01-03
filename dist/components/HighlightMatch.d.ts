import React from "react";
export interface IHighlightMatchProps {
    pattern: string;
    text: string;
    classes?: {
        highlighted?: string;
    };
}
declare const HighlightMatch: React.FC<IHighlightMatchProps>;
export default HighlightMatch;
