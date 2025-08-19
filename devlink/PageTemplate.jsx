"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalCode } from "./GlobalCode";
import * as _utils from "./utils";
import _styles from "./PageTemplate.module.css";

export function PageTemplate({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page")} tag="div">
      <GlobalCode />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "css")}
        value="%3Cstyle%3E%0A%2F*%20Styles%20specific%20elements%20in%20this%20page%20*%2F%0A%3C%2Fstyle%3E"
      />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "js")}
        value="%3Cscript%3E%0A%2F%2F%20wait%20for%20DOM%20and%20scripts%20to%20load%0Awindow.addEventListener('load'%2C%20()%3D%3E%20%7B%0A%09%2F%2F%20Do%20something%20for%20this%20page%0A%7D)%0A%3C%2Fscript%3E"
      />
      <_Builtin.Block className={_utils.cx(_styles, "main")} tag="main">
        <_Builtin.Section
          className={_utils.cx(_styles, "section", "cc-hero")}
          grid={{
            type: "section",
          }}
          tag="section"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "css")}
            value="%3Cstyle%3E%0A%2F*%20Styles%20specific%20elements%20in%20this%20section%20*%2F%0A%0A%3C%2Fstyle%3E"
          />
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "js")}
            value="%3Cscript%3E%0A%2F%2F%20wait%20for%20DOM%20and%20scripts%20to%20load%0Awindow.addEventListener('load'%2C%20()%3D%3E%20%7B%0A%09%2F%2F%20Do%20something%20for%20this%20section%0A%7D)%0A%3C%2Fscript%3E"
          />
          <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
            <_Builtin.Block tag="div" />
          </_Builtin.Block>
        </_Builtin.Section>
      </_Builtin.Block>
    </_Component>
  );
}
