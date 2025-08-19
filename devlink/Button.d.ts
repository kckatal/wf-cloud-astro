import * as React from "react";
import * as Types from "./types";

declare function Button(props: {
  as?: React.ElementType;
  variant?: "Base" | "Secondary" | "Small" | "Small Secondary";
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  iconVisibility?: Types.Visibility.VisibilityConditions;
  icon?: Types.Asset.Image;
}): React.JSX.Element;
