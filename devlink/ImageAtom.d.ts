import * as React from "react";
import * as Types from "./types";

declare function ImageAtom(props: {
  as?: React.ElementType;
  imageAltText?: Types.Basic.AltText;
  image?: Types.Asset.Image;
  imageFitCcContain?: Types.Builtin.Text;
  variant?: "Cover" | "Contain";
}): React.JSX.Element;
