import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import HighlightMatch from "./HighlightMatch";

export interface SuggestiveInputProps {
  fetchSuggestions: (input: string) => Promise<string[]> | string[];
  onSelection: (value: string) => void;
  debounceTime?: number;
  classes?: {
    root?: string;
    input?: string;
    suggestionList?: string;
    suggestionItem?: string;
    activeSuggestion?: string;
    highlighted?: string; // For highlighting matching parts of suggestions
    noSuggestions?: string; // For styling the no suggestions message
    loading?: string; // For styling the loading message
  };
  loadingComponent?: React.ReactNode; // Custom component for loading state
  noSuggestionsComponent?: React.ReactNode; // Custom component when no suggestions found
}

const SuggestiveInput: React.FC<SuggestiveInputProps> = ({
  fetchSuggestions,
  onSelection,
  debounceTime = 300,
  classes,
  loadingComponent = <span>Loading...</span>, // Default loading component
  noSuggestionsComponent = <span>No matches found</span>,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetching suggestions with debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue && shouldFetch) {
        setIsLoading(true); // Show loading
        const fetchAsyncSuggestions = async () => {
          const fetchedSuggestions = await fetchSuggestions(inputValue);
          setSuggestions(fetchedSuggestions);
          setIsLoading(false); // Hide loading
        };
        fetchAsyncSuggestions();
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, debounceTime);

    return () => {
      clearTimeout(handler);
      setShouldFetch(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, fetchSuggestions, debounceTime]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "ArrowDown" &&
      activeSuggestionIndex < suggestions.length - 1
    ) {
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    } else if (event.key === "ArrowUp" && activeSuggestionIndex > 0) {
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      selectSuggestion(suggestions[activeSuggestionIndex]);
    }
  };

  const handleSuggestionClick = (index: number) => {
    selectSuggestion(suggestions[index]);
  };

  const selectSuggestion = (suggestion: string) => {
    onSelection(suggestion);
    setInputValue(suggestion);
    setShouldFetch(false);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const shouldShowSuggestion =
    showSuggestions &&
    ((isLoading && loadingComponent) ||
      (!isLoading && suggestions.length === 0 && noSuggestionsComponent) ||
      (!isLoading && suggestions.length > 0));

  return (
    <div className={classes?.root}>
      <input
        type="text"
        ref={inputRef}
        className={classes?.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-autocomplete="list"
        aria-controls="suggestions" // Referring to the id of the suggestion list
        aria-activedescendant={`suggestion-${activeSuggestionIndex}`} // Referring to the id of the active suggestion
      />
      {/* Using ul and li, over datalist and options since it offers more styling control */}
      {shouldShowSuggestion && (
        <ul
          id="suggestions"
          role="listbox"
          className={classes?.suggestionList}
          onMouseLeave={() => setActiveSuggestionIndex(-1)}
        >
          {isLoading && (
            <li className={classes?.loading}>{loadingComponent}</li>
          )}
          {!isLoading && suggestions.length === 0 && (
            <li className={classes?.noSuggestions}>{noSuggestionsComponent}</li>
          )}
          {!isLoading &&
            suggestions.map((suggestion, index) => (
              <li
                style={{ listStyle: "none" }}
                key={suggestion}
                id={`suggestion-${index}`}
                role="option"
                aria-selected={index === activeSuggestionIndex}
                className={`${classes?.suggestionItem} ${
                  index === activeSuggestionIndex
                    ? classes?.activeSuggestion
                    : ""
                }`}
                onMouseDown={() => handleSuggestionClick(index)} // Use onMouseDown to ensure the click is registered before the input blurs
                onMouseEnter={() => setActiveSuggestionIndex(index)}
              >
                <HighlightMatch
                  pattern={inputValue}
                  text={suggestion}
                  classes={{ highlighted: classes?.highlighted }}
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SuggestiveInput;
