import React, { useState, useEffect } from "react";
import { getFilters } from "services/api";
import { Select } from "baseui/select";
import { DatePicker } from "baseui/datepicker";
import { Input } from "baseui/input";

export default function PlaylistFilters() {
  const [filters, setFilters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState([new Date()]);
  const [value3, setValue3] = React.useState([new Date()]);

  const loadFilters = async () => {
    try {
      setLoading(true);
      const { data: filtersData } = await getFilters();
      if (Array.isArray(filtersData)) {
        setFilters(filtersData.filters);
      }
    } catch (e) {
      console.log(e);
      // TODO: Show error message on screen
    }
    setLoading(false);
  };

  useEffect(() => {
    loadFilters();
  }, []);

  const renderFilter = () => {};

  return (
    <div className="playlist-filters">
      <Select
        options={[
          { label: "AliceBlue", id: "#F0F8FF" },
          { label: "AntiqueWhite", id: "#FAEBD7" },
          { label: "Aqua", id: "#00FFFF" },
          { label: "Aquamarine", id: "#7FFFD4" },
          { label: "Azure", id: "#F0FFFF" },
          { label: "Beige", id: "#F5F5DC" },
        ]}
        value={value}
        placeholder="Select color"
        onChange={(params) => setValue(params.value)}
      />
      <DatePicker
        clearable
        formatString="yyyy-MM-dd HH:mm:ss" // dinamic
        timeSelectStart
        value={value2}
        onChange={({ date }) => setValue2(Array.isArray(date) ? date : [date])}
      />
      <Input
        value={value3}
        max={3}
        min={1}
        onChange={(e) => setValue3(e.target.value)}
        placeholder="Controlled Input"
        type="number"
        clearOnEscape
      />
    </div>
  );
}
