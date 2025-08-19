"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Section2Columns.module.css";

export function Section2Columns({
  as: _Component = _Builtin.Section,
  slotContent,
  slotContent2,
  sectionClassCcLgCcSm,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "grid-cols")} tag="div">
          <_Builtin.NotSupported _atom="Slot" />
          <_Builtin.NotSupported _atom="Slot" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
