import Button from "@design/Button/Button";
import "./SpritesView.css";
import ListItem from "@design/List/Item/ListItem";
import List from "@design/List/List";
import { useState } from "react";
import isEmptyText from "@core/utils/isEmptyText";

const getLabelForSpriteKey = (key) => {
  switch (key) {
    case "back_default":
      return "Back default";
    case "back_female":
      return "Back female";
    case "back_shiny":
      return "Back shiny";
    case "back_shiny_female":
      return "Back shiny female";
    case "front_default":
      return "Front default";
    case "front_female":
      return "Front female";
    case "front_shiny":
      return "Front shiny";
    case "front_shiny_female":
      return "Front shiny female";
    default:
      return key;
  }
};

const SpritesView = ({ sprites, alt = "" }) => {
  const [spriteKey, setSpriteKey] = useState("front_default");

  return (
    <div className="sprites-view">
      <img src={sprites[spriteKey]} alt={alt} />
      <List className="sprites-view__buttons">
        {Object.keys(sprites)
          .filter((key) => !isEmptyText(sprites[key]) && typeof sprites[key] === "string")
          .map((key) => (
            <ListItem key={key}>
              <Button color="secondary" size="sm" key={key} onClick={() => setSpriteKey(key)}>
                {getLabelForSpriteKey(key)}
              </Button>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default SpritesView;
