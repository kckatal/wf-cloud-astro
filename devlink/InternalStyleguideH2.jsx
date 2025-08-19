"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InternalStyleguideH2.module.css";

export function InternalStyleguideH2({
  as: _Component = _Builtin.Block,
  text = "Base - Typography",
  paragraph = (
    <>
      {"Text elements and classes are used strictly for sizing, not styling."}
      <br />
      {"Usually these elements are wrapped with a "}
      {" or a "}
      {"to have access to frequently used modifiers as combo classes."}
    </>
  ),
}) {
  return (
    <_Component tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "title-wrapper")} tag="div">
        <_Builtin.Heading tag="h2">{text}</_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-wrapper", "cc-max-720")}
        tag="div"
      >
        <_Builtin.Paragraph>{paragraph}</_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
