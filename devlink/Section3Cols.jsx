"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Section3Cols.module.css";

export function Section3Cols({
  as: _Component = _Builtin.Section,
  slotContent,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "cc-top-lg")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.NotSupported _atom="Slot" />
      </_Builtin.Block>
    </_Component>
  );
}
