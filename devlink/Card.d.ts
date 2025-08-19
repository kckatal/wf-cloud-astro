import * as React from "react";
import * as Types from "./types";

declare function Card(props: {
  as?: React.ElementType;
  slotContent?: Types.Slots.SlotContent;
}): React.JSX.Element;
