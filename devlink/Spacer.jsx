"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Spacer.module.css";

export function Spacer({
  as: _Component = _Builtin.DOM,
  desktop = "height: 2rem",
  tablet = "height: 2rem",
  landscapeMobile = "height: 2rem",
  mobile = "height: 2rem",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "spacer")}
      tag="div"
      editable={false}
    >
      <_Builtin.DOM
        className={_utils.cx(_styles, "spacer-desktop")}
        tag="div"
        style={desktop}
      />
      <_Builtin.DOM
        className={_utils.cx(_styles, "spacer-tablet")}
        tag="div"
        style={tablet}
      />
      <_Builtin.DOM
        className={_utils.cx(_styles, "spacer-landscape")}
        tag="div"
        style={landscapeMobile}
      />
      <_Builtin.DOM
        className={_utils.cx(_styles, "spacer-mobile")}
        tag="div"
        style={mobile}
      />
    </_Component>
  );
}
