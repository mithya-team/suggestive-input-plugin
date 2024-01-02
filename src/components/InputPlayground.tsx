import React, { useState } from "react";
import { SuggestiveInput } from "../../lib/index";

// Mock function to simulate fetching suggestions
const mockFetchSuggestions = async (input: string): Promise<string[]> => {
  // This is a mock function. Replace it with actual API call or logic.
  const allSuggestions = ["apple", "banana", "cherry", "date", "eggfruit"];

  // Simulate network or processing delay
  const delay = 500; // delay in milliseconds (500ms)

  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredSuggestions = allSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(input.toLowerCase())
      );
      resolve(filteredSuggestions);
    }, delay);
  });
};

const Playground: React.FC = () => {
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  const handleSelection = (value: string) => {
    setSelectedSuggestion(value);
  };

  return (
    <div>
      <div>
        <p>Type to see suggestions:</p>
        <SuggestiveInput
          fetchSuggestions={mockFetchSuggestions}
          onSelection={handleSelection}
          classes={{
            root: "suggestive-input-root",
            input: "suggestive-input-input",
            suggestionList: "suggestive-input-list",
            suggestionItem: "suggestive-input-item",
            highlighted: "suggestive-input-highlighted",
            activeSuggestion: "suggestive-input-item-active",
          }}
          noSuggestionsComponent={null}
        />
      </div>
      <div>
        <p>Selected Suggestion: {selectedSuggestion}</p>
      </div>
    </div>
  );
};

export default Playground;
