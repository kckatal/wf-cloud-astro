import * as React from "react";
import * as Types from "./types";

declare function Spacer(props: {
  as?: React.ElementType;
  desktop?: Types.Builtin.Text;
  tablet?: Types.Builtin.Text;
  landscapeMobile?: Types.Builtin.Text;
  mobile?: Types.Builtin.Text;
}): React.JSX.Element;
