import React, { memo } from "react";
import {
  AdvancedSearchTitle,
  SidebarContainer,
  SidebarLogo,
  SidebarLogoContainer
} from "./styles";
import useFilters from "../../hooks/useFilters";
import { makeStyles } from "@material-ui/core/styles";
import FilterInput from "../FilterInput";
import brand from "../../assets/img/svg/spotifood_logo_aside_red.svg";
import { usePlaylists } from "../../hooks/usePlaylists";

type Props = {
  isOpen: boolean;
}

const useStyles = makeStyles(() => ({
  input: {
    margin: '20px 0'
  }
}))

const Sidebar: React.FC<Props> = ({ isOpen }) => {

  const classes = useStyles();

  const { locales, countries, timestamp, quantity, page } = useFilters();

  const { filter, setFilter } = usePlaylists();

  const handleChange = (id: string, value: string | number) => {
    if (setFilter) {

      const newFilter = {
        ...filter,
        [id]: value,
      };

      setFilter(newFilter);
    }
  };

  const buildFilters = () => {
    const filters = [
      locales,
      countries,
      timestamp,
      quantity,
      page
    ];

    return filters.map((filter, index) => (
      <div
        className={ classes.input }
        key={ index }
      >
        <FilterInput
          { ...filter }
          onChange={ (value) => handleChange(filter.id!, value) }
        />
      </div>
    ));
  }

  return (
    <SidebarContainer isOpen={ isOpen }>
      { isOpen && (
        <SidebarLogoContainer>
          <SidebarLogo src={ brand } alt='logo aside'/>
        </SidebarLogoContainer>
      ) }
      <AdvancedSearchTitle>Advanced search</AdvancedSearchTitle>
      { buildFilters() }
    </SidebarContainer>
  );
}

export default memo(Sidebar);
