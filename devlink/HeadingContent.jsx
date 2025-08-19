"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeadingContent.module.css";

export function HeadingContent({
  as: _Component = _Builtin.Block,
  text = "Lorem Ipsum",
  bottomMarginCcSmCcLgCcXl,
  headingLevel = "h3",
  headingStyleClass,
}) {
  return (
    <_Component className={_utils.cx(_styles, "title-wrapper")} tag="div">
      <_Builtin.Heading className={_utils.cx(_styles, "")} tag={headingLevel}>
        {text}
      </_Builtin.Heading>
    </_Component>
  );
}
