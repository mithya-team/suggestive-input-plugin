# SuggestiveInput Component Documentation

## Introduction

`SuggestiveInput` is a React component designed to provide autocomplete functionality. It allows users to type in an input field and dynamically receive suggestions based on their input, improving user experience and efficiency.

## Features

- Debounced fetching of suggestions for efficient performance.
- Customizable suggestion fetching function.
- Keyboard navigation for selecting suggestions.
- Customizable styling via a classes object.
- Support for loading and "no match" states with custom render options.

## Usage

To use the `SuggestiveInput` component, you'll need to have a function ready to fetch suggestions, typically from an API or a local source. Here's a basic example:

```tsx
import React from "react";
import SuggestiveInput from "./SuggestiveInput";

const App = () => {
  const handleSelection = (value) => {
    console.log("User selected:", value);
  };

  const fetchSuggestions = async (input) => {
    // Replace with actual suggestion logic
    return ["apple", "banana", "cherry"].filter((item) => item.includes(input));
  };

  return (
    <SuggestiveInput
      fetchSuggestions={fetchSuggestions}
      onSelection={handleSelection}
      classes={{
        root: "suggestive-input-root",
        input: "suggestive-input-input",
        suggestionList: "suggestive-input-list",
        suggestionItem: "suggestive-input-item",
        highlighted: "suggestive-input-highlighted",
      }}
    />
  );
};

export default App;
```

## API

```ts
interface SuggestiveInputProps {
  fetchSuggestions: (input: string) => Promise<string[]> | string[];
  onSelection: (value: string) => void;
  debounceTime?: number;
  classes?: {
    root?: string;
    input?: string;
    suggestionList?: string;
    suggestionItem?: string;
    highlighted?: string; // For highlighting matching parts of suggestions
    noSuggestions?: string; // For styling the no suggestions message
    loading?: string; // For styling the loading message
  };
  loadingComponent?: React.ReactNode; // Custom component for loading state
  noSuggestionsComponent?: React.ReactNode; // Custom component when no suggestions found
}
```

## Styling

The component can be fully customized via the `classes` prop. Here's an example of CSS you might include to style the default classes:

```css
/* SuggestiveInput component styling */
.suggestive-input-root {
  /* Styles for the component container */
}
.suggestive-input-input {
  /* Styles for the input field */
}
.suggestive-input-list {
  /* Styles for the suggestion list */
}
.suggestive-input-item {
  /* Styles for a suggestion item */
}
.suggestive-input-highlighted {
  /* Styles for highlighted text */
}
```
