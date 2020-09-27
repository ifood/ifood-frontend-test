import { FilterContextProps } from "../../interfaces/Filter";
import { useContext } from "react";
import { FilterContext } from "../../providers/FiltersProvider";

export default function useFilters(): FilterContextProps {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('context not found. Remember, useFilters must be used within an FilterProvider.');
  }

  return context;
}
