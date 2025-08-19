"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { InternalStyleguideH2 } from "./InternalStyleguideH2";
import * as _utils from "./utils";
import _styles from "./InternalStyleguideStartingBlock.module.css";

export function InternalStyleguideStartingBlock({
  as: _Component = _Builtin.Block,
}) {
  return (
    <_Component tag="div">
      <InternalStyleguideH2 text="Base - Colors" />
      <_Builtin.Section
        className={_utils.cx(_styles, "section")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "grid-cols")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "title-wrapper", "cc-lg")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "title-wrapper")}
                tag="div"
              >
                <_Builtin.Heading tag="h3">{"Colors."}</_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-wrapper", "cc-max-720")}
                tag="div"
              >
                <_Builtin.Paragraph>
                  {
                    "This area is not to set specific classes, but rather a checkpoint to add your project's colors to the global swatches and describe how they're used."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sg-element")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "css-selectors-wrap")}
              tag="div"
            >
              <_Builtin.Heading tag="h4">{"Primary."}</_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "sg-square")}
                tag="div"
              >
                <_Builtin.Block tag="div" />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "sg-details-box")}
              id={_utils.cx(
                _styles,
                "w-node-_1d33ed88-e6a9-9165-43b5-cc4a1b7d6ffd-1b7d6fea"
              )}
              tag="div"
            >
              <_Builtin.Paragraph>
                {"Hex: #3e6cff"}
                <br />
                <br />
                {"Highlighting(paired with secondary font)"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sg-element")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "css-selectors-wrap")}
              tag="div"
            >
              <_Builtin.Heading tag="h4">{"Secondary."}</_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "sg-square")}
                tag="div"
              >
                <_Builtin.Block tag="div" />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "sg-details-box")}
              id={_utils.cx(
                _styles,
                "w-node-_1d33ed88-e6a9-9165-43b5-cc4a1b7d700a-1b7d6fea"
              )}
              tag="div"
            >
              <_Builtin.Paragraph>
                {"Hex: #000"}
                <br />
                <br />
                {"- The secondary color doesn't always need to be fun:)"}
                <br />
                {"- Hover states"}
                <br />
                {"- Text"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sg-element")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "css-selectors-wrap")}
              tag="div"
            >
              <_Builtin.Heading tag="h4">{"Grey."}</_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "sg-square")}
                tag="div"
              >
                <_Builtin.Block tag="div" />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "sg-details-box")}
              id={_utils.cx(
                _styles,
                "w-node-_1d33ed88-e6a9-9165-43b5-cc4a1b7d701b-1b7d6fea"
              )}
              tag="div"
            >
              <_Builtin.Paragraph>
                {"Hex: #dbdbdb"}
                <br />
                <br />
                {"- Disabled state"}
                <br />
                {"- Some Borders"}
                <br />
                {"- Text on dark background"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sg-element")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "css-selectors-wrap")}
              tag="div"
            >
              <_Builtin.Heading tag="h4">{"Dark."}</_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "sg-square")}
                tag="div"
              >
                <_Builtin.Block tag="div" />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "sg-details-box")}
              id={_utils.cx(
                _styles,
                "w-node-_1d33ed88-e6a9-9165-43b5-cc4a1b7d702c-1b7d6fea"
              )}
              tag="div"
            >
              <_Builtin.Paragraph>
                {"Hex: #2a2a2a"}
                <br />
                <br />
                {"- Slightly lighter text"}
                <br />
                {"- Some backgrounds"}
                <br />
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sg-element")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "css-selectors-wrap")}
              tag="div"
            >
              <_Builtin.Heading tag="h4">{"Light."}</_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "sg-square")}
                tag="div"
              >
                <_Builtin.Block tag="div" />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "sg-details-box")}
              id={_utils.cx(
                _styles,
                "w-node-_1d33ed88-e6a9-9165-43b5-cc4a1b7d703c-1b7d6fea"
              )}
              tag="div"
            >
              <_Builtin.Paragraph>
                {"Hex: #f9f6f1"}
                <br />
                <br />
                {"Main background"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
    </_Component>
  );
}
