"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

export function Nav({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarContainer
        className={_utils.cx(_styles, "container")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "nav-wrapper")} tag="div">
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "nav-logo")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/68a3e51fa278a8d568933f0d/68a3e5ab13fb3b0411ac2422_Aura-white.svg"
            />
          </_Builtin.NavbarBrand>
          <_Builtin.NavbarMenu tag="nav" role="navigation">
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-link")}
              options={{
                href: "#",
              }}
            >
              {"Home"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-link")}
              options={{
                href: "#",
              }}
            >
              {"About"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-link")}
              options={{
                href: "#",
              }}
            >
              {"Contact"}
            </_Builtin.NavbarLink>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarButton tag="div">
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
