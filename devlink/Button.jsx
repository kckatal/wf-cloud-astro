"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Button.module.css";

export function Button({
  as: _Component = _Builtin.Link,
  variant = "Base",
  text = "Learn more",

  link = {
    href: "#",
  },

  iconVisibility = false,
  icon = "https://cdn.prod.website-files.com/68a3e51fa278a8d568933f0d/68a3e520a278a8d568933f5b_arrow-right.svg",
}) {
  const _styleVariantMap = {
    Base: "",
    Secondary: "w-variant-968441c1-b8dc-f118-b928-54fbfb1b4e29",
    Small: "w-variant-b20611df-9443-f4d0-74ac-d90a421984ed",
    "Small Secondary": "w-variant-34865302-caac-9222-4f80-34a743fd6c1d",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "button", _activeStyleVariant)}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "text-sm", _activeStyleVariant)}
        tag="div"
      >
        {text}
      </_Builtin.Block>
      {iconVisibility ? (
        <_Builtin.Image
          className={_utils.cx(_styles, "icon", _activeStyleVariant)}
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
