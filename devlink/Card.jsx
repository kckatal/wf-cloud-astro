"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Card.module.css";

export function Card({ as: _Component = _Builtin.Block, slotContent }) {
  return (
    <_Component className={_utils.cx(_styles, "card")} tag="div">
      <_Builtin.NotSupported _atom="Slot" />
    </_Component>
  );
}
