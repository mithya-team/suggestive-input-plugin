import React from "react";
export interface SuggestiveInputProps {
    fetchSuggestions: (input: string) => Promise<string[]> | string[];
    onSelection: (value: string) => void;
    debounceTime?: number;
    defaultValue?: string;
    classes?: {
        root?: string;
        input?: string;
        suggestionList?: string;
        suggestionItem?: string;
        activeSuggestion?: string;
        highlighted?: string;
        noSuggestions?: string;
        loading?: string;
    };
    loadingComponent?: React.ReactNode;
    noSuggestionsComponent?: React.ReactNode;
    allowStrictSelection?: boolean;
}
declare const SuggestiveInput: React.FC<SuggestiveInputProps>;
export default SuggestiveInput;
