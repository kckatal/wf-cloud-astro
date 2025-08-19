"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Link.module.css";

export function Link({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },

  text = "Learn more",
  icon = "https://cdn.prod.website-files.com/68a3e51fa278a8d568933f0d/68a3e520a278a8d568933f5c_arrow-right_black.svg",
  iconVisibility = false,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "link")}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
      {iconVisibility ? (
        <_Builtin.Image
          className={_utils.cx(_styles, "icon")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={icon}
        />
      ) : null}
    </_Component>
  );
}
