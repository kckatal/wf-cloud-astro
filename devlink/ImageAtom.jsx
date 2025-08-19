"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImageAtom.module.css";

export function ImageAtom({
  as: _Component = _Builtin.Image,
  imageAltText = "__wf_reserved_inherit",
  image = "https://cdn.prod.website-files.com/68a3e51fa278a8d568933f0d/68a3e520a278a8d568933f67_saddle-pinata_md.webp",
  imageFitCcContain,
  variant = "Cover",
}) {
  const _styleVariantMap = {
    Cover: "",
    Contain: "w-variant-811f123b-9c68-7ce4-a59f-63ee67e00514",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "image", _activeStyleVariant)}
      loading="lazy"
      width="auto"
      height="auto"
      src={image}
    />
  );
}
