# SuggestiveInput Plugin

## Introduction

`SuggestiveInput` is a React component designed to provide autocomplete functionality. It allows users to type in an input field and dynamically receive suggestions based on their input, improving user experience and efficiency.

## Features

- Debounced fetching of suggestions for efficient performance.
- Customizable suggestion fetching function.
- Keyboard navigation for selecting suggestions.
- Customizable styling via a classes object.
- Support for loading and "no match" states with custom render options.

## Installation

Install the package via npm or yarn:

```bash
npm install suggestive-input-plugin
```

or

```bash
yarn add suggestive-input-plugin
```

## Usage

To use the `SuggestiveInput` component, you'll need to have a function ready to fetch suggestions, typically from an API or a local source. Here's a basic example:

```tsx
import React from "react";
import SuggestiveInput from "suggestive-input-plugin";

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

### With React Hook Form:

```tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { SuggestiveInput } from "suggestive-input-plugin"; // ensure this is the correct path to your component

const mockFetchSuggestions = async (input: string): Promise<string[]> => {
  const allSuggestions = ["apple", "banana", "cherry", "date", "eggfruit"];
  return allSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(input.toLowerCase())
  );
};

export const ReactFormExample: React.FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      suggestiveInput: "", // Ensure this default value is aligned with the name given to the Controller
    },
  });

  const onSubmit = (data: Record<string, unknown>) => {
    console.log("Form Data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="suggestiveInput" // Ensure this name matches the key in defaultValues
        control={control}
        render={({ field }) => (
          <SuggestiveInput
            fetchSuggestions={mockFetchSuggestions}
            onSelection={field.onChange} // Directly using field.onChange for selection
            debounceTime={300}
            defaultValue={field.value} // Using field.value for overriding components default value
            classes={{
              root: "suggestive-input-root",
              input: "suggestive-input-input",
              suggestionList: "suggestive-input-list",
              suggestionItem: "suggestive-input-item",
              highlighted: "suggestive-input-highlighted",
              activeSuggestion: "suggestive-input-item-active",
            }}
            allowStrictSelection={false}
          />
        )}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ReactFormExample;
```

## API

```ts
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
```

## Styling

### Using CSS

Here are CSS rules you might want to override for the default classes:

```css
/* Root of the component */
.suggestive-input--root {
  position: relative;
  width: 300px; /* Adjust the width as needed */
}

/* Input field styling */
.suggestive-input--input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Suggestion list styling */
.suggestive-input--list {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-top: none; /* Make it look connected to the input */
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  max-height: 200px; /* Adjust based on your need */
  overflow-y: auto; /* Enable scroll if list is too long */
  z-index: 1000; /* Ensure it's above other elements */
}

.suggestive-input--loading {
}

.suggestive-input--no-suggestion {
}

/* Individual suggestion item */
.suggestive-input--item {
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid #eee; /* subtle separator */
}

/* Highlighted text within suggestions */
.suggestive-input--highlighted {
  background-color: yellow; /* Highlight color */
  font-weight: bold; /* Make it bold */
}

/* Suggestion item - Hover and Active States */
.suggestive-input--item:hover,
.suggestive-input--item:active,
.suggestive-input--item.active {
  /* class for active suggestion */
  background-color: #f0f0f0; /* Slightly darker on hover */
}

.suggestive-input-item--active {
  background-color: #f0f0f0; /* Highlight color */
}
```

### Using Tailwind

The component can be fully customized via the `classes` prop.

```tsx
<SuggestiveInput
  ...
  ...
  classes={{
    root: "suggestive-input-root",
    input: "suggestive-input-input",
    suggestionList: "suggestive-input-list",
    suggestionItem: "suggestive-input-item",
    highlighted: "suggestive-input-highlighted",
    activeSuggestion: "suggestive-input-item-active",
  }}
  ...
/>
```

Checkout the [playground code]() for implementation

## Issues and Pull Requests

Contributions are always welcome! If you encounter any issues or would like to contribute, please file an issue or submit a PR:

Issues: GitHub Issues
Pull Requests: GitHub Pull Requests
