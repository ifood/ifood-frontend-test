import { Filter } from "../Filter";
import { Dispatch, SetStateAction } from "react";

export interface FilterContextProps {
  getFilters: () =>  Promise<Filter[]>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>
}
