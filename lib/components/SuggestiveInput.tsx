import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import HighlightMatch from "./HighlightMatch";
import "./SuggestiveInput.css";

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
    highlighted?: string; // For highlighting matching parts of suggestions
    noSuggestions?: string; // For styling the no suggestions message
    loading?: string; // For styling the loading message
  };
  loadingComponent?: React.ReactNode; // Custom component for loading state
  noSuggestionsComponent?: React.ReactNode; // Custom component when no suggestions found
  allowStrictSelection?: boolean; // allow output to strictly match any option from suggestions
}

const SuggestiveInput: React.FC<SuggestiveInputProps> = ({
  fetchSuggestions,
  onSelection,
  debounceTime = 300,
  classes,
  defaultValue = "",
  loadingComponent = <span>Loading...</span>,
  noSuggestionsComponent = <span>No matches found</span>,
  allowStrictSelection = true,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);
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
      if (allowStrictSelection || activeSuggestionIndex > -1)
        selectSuggestion(suggestions[activeSuggestionIndex]);
      else selectSuggestion(inputValue);
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
    setActiveSuggestionIndex(-1);
  };

  const shouldShowSuggestion =
    showSuggestions &&
    ((isLoading && loadingComponent) ||
      (!isLoading && suggestions.length === 0 && noSuggestionsComponent) ||
      (!isLoading && suggestions.length > 0));

  return (
    <div className={`suggestive-input--root ${classes?.root}`}>
      <input
        type="text"
        ref={inputRef}
        className={`suggestive-input--input ${classes?.input}`}
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
          className={`suggestive-input--list ${classes?.suggestionList}`}
          onMouseLeave={() => setActiveSuggestionIndex(-1)}
        >
          {isLoading && (
            <li className={`suggestive-input--loading ${classes?.loading}`}>
              {loadingComponent}
            </li>
          )}
          {!isLoading && suggestions.length === 0 && (
            <li
              className={`suggestive-input--no-suggestion ${classes?.noSuggestions}`}
            >
              {noSuggestionsComponent}
            </li>
          )}
          {!isLoading &&
            suggestions.map((suggestion, index) => (
              <li
                style={{ listStyle: "none" }}
                key={suggestion}
                id={`suggestion-${index}`}
                role="option"
                aria-selected={index === activeSuggestionIndex}
                className={`suggestive-input--item ${classes?.suggestionItem} ${
                  index === activeSuggestionIndex
                    ? `suggestive-input-item--active ${classes?.activeSuggestion}`
                    : ""
                }`}
                onMouseDown={() => handleSuggestionClick(index)} // Use onMouseDown to ensure the click is registered before the input blurs
                onMouseEnter={() => setActiveSuggestionIndex(index)}
              >
                <HighlightMatch
                  pattern={inputValue}
                  text={suggestion}
                  classes={{
                    highlighted: `suggestive-input--highlighted ${classes?.highlighted}`,
                  }}
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SuggestiveInput;
