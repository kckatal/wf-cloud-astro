"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RichTextContent.module.css";

export function RichTextContent({
  as: _Component = _Builtin.RichText,
  content = "",
}) {
  return (
    <_Component className={_utils.cx(_styles, "rich-text")} tag="div" slot="">
      {content}
    </_Component>
  );
}
