import * as React from "react";
import * as Types from "./types";

declare function ImageContent(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  imageAltText?: Types.Basic.AltText;
  imageFitCcContain?: Types.Builtin.Text;
  aspectRatio?: "Default" | "1x1" | "16x9" | "4x3";
  imageFit?: "Cover" | "Contain";
}): React.JSX.Element;
