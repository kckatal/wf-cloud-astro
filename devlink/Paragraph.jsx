"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Paragraph.module.css";

export function Paragraph({
  as: _Component = _Builtin.DOM,
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  textClassTextXlTextXs = "text-md",
  maxWidth = "max-width: 40rem",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "text-wrapper")}
      id={_utils.cx(
        _styles,
        "w-node-_0adc29dc-22b0-263f-293b-31831d5d8ebe-1d5d8ebe"
      )}
      tag="div"
      style={maxWidth}
    >
      <_Builtin.Paragraph className={_utils.cx(_styles, "")}>
        {text}
      </_Builtin.Paragraph>
    </_Component>
  );
}
