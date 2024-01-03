import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { SuggestiveInput } from "../../lib/index"; // ensure this is the correct path to your component

const mockFetchSuggestions = async (input: string): Promise<string[]> => {
  // Simulate a fetch call with filtering from a list of strings

  const allSuggestions = ["apple", "banana", "cherry", "date", "eggfruit"];
  return allSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(input.toLowerCase())
  );
};

export const ReactFormExample: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const { control, handleSubmit } = useForm({
    defaultValues: {
      suggestiveInput: "o",
    },
  });

  const onSubmit = (data: { suggestiveInput: string }) => {
    console.log("Form Data: ", data);
    setValue(data.suggestiveInput);
  };

  return (
    <>
      <p>Click on submit to see suggestion</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="suggestiveInput"
          control={control}
          render={({ field }) => (
            <SuggestiveInput
              fetchSuggestions={mockFetchSuggestions}
              onSelection={field.onChange}
              debounceTime={300}
              defaultValue={field.value}
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
      <div>
        <p>Selected Suggestion: {value}</p>
      </div>
    </>
  );
};

export default ReactFormExample;
