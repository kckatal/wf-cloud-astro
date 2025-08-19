"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ImageAtom } from "./ImageAtom";
import * as _utils from "./utils";
import _styles from "./ImageContent.module.css";

export function ImageContent({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/68a3e51fa278a8d568933f0d/68a3e520a278a8d568933f67_saddle-pinata_md.webp",
  imageAltText = "__wf_reserved_inherit",
  imageFitCcContain,
  aspectRatio = "Default",
  imageFit = "Default",
}) {
  const _styleVariantMap = {
    Default: "",
    "1x1": "w-variant-9d46a72f-725a-49ae-cd91-bb8768f6a31a",
    "16x9": "w-variant-77e2a0da-5692-0156-c269-25ad1717b39e",
    "4x3": "w-variant-6d1e7904-8222-95b7-64c1-8ca4f914201d",
  };

  const _activeStyleVariant = _styleVariantMap[aspectRatio];

  return (
    <_Component
      className={_utils.cx(_styles, "image-wrapper", _activeStyleVariant)}
      id={_utils.cx(
        _styles,
        "w-node-_8731218b-9367-d7f5-98e5-0f9cdb9f3e98-db9f3e98"
      )}
      tag="div"
    >
      <ImageAtom
        imageAltText={imageAltText}
        image={image}
        imageFitCcContain={imageFitCcContain}
        variant={imageFit}
      />
    </_Component>
  );
}
