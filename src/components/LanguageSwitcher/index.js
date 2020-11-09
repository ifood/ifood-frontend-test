import React, { useEffect } from "react";
import { ButtonGroup, SIZE, MODE, SHAPE } from "baseui/button-group";
import { Button } from "baseui/button";

export default function LanguageSwitcher({
  initialLanguage,
  languages,
  onChange,
}) {
  const [selected, setSelected] = React.useState();

  useEffect(() => {
    languages.forEach((language, index) => {
      if (language === initialLanguage) {
        return setSelected(index);
      }
    });
  }, []);

  return (
    <div className="language-switcher">
      <ButtonGroup
        selected={selected}
        onClick={(event, index) => {
          setSelected(index);
          onChange(languages[index]);
        }}
        mode={MODE.radio}
        size={SIZE.mini}
        shape={SHAPE.pill}
      >
        {languages.map((language) => (
          <Button key={language}>{language}</Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
