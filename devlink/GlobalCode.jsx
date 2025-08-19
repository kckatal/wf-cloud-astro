"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GlobalCode.module.css";

export function GlobalCode({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "u-hide")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "css")}
        value="%3Cstyle%3E%0A%2F*%20normalize%20fonts%20*%2F%0Abody%20%7B%0A%20%20font-smoothing%3A%20antialiased%3B%0A%20%20text-rendering%3A%20optimizeLegibility%3B%0A%20%20-webkit-font-smoothing%3A%20antialiased%3B%0A%20%20-moz-osx-font-smoothing%3A%20grayscale%3B%0A%7D%0A%2F*%20remove%20blue%20highlight%20on%20mobile%20tap%20*%2F%0A*%20%7B%20-webkit-tap-highlight-color%3A%20transparent%3B%20%7D%0A%0A%2F*%20fluid%20typography%20*%2F%0Ahtml%20%7B%20font-size%3A%20calc(0.625rem%20%2B%200.42vw)%3B%20%7D%0A%40media%20screen%20and%20(max-width%3A991px)%20%7B%20html%20%7B%20font-size%3A%201rem%20%7D%20%7D%0A%40media%20screen%20and%20(min-width%3A1440px)%20%7B%20html%20%7B%20font-size%3A%201rem%20%7D%20%7D%0A%0A%0A%2F*%20setup%20*%2F%0Aimg%2C%0Asvg%2C%0Avideo%2C%0Acanvas%2C%0Aaudio%2C%0Aiframe%2C%0Aembed%2C%0Aobject%20%7B%0A%20%20display%3A%20block%3B%0A%20%20vertical-align%3A%20middle%3B%0A%7D%0Aimg%2C%0Avideo%20%7B%0A%20%20height%3A%20auto%3B%0A%7D%0Aselect%20%7B%0A%20%20-webkit-appearance%3A%20none%3B%0A%20%20-moz-appearance%3A%20none%3B%0A%20%20appearance%3A%20none%3B%0A%7D%0Abutton%20%7B%0A%09border%3A%20none%3B%0A%20%20padding%3A%200%3B%0A%20%20background-color%3A%20unset%3B%0A%7D%0A%0A.spacer%20*%20%7B%20padding%3A%200%20%7D%0A%0A.w-richtext%20%3E%20%3Afirst-child%20%7Bmargin-top%3A%200%7D%0A.w-richtext%20%3E%20%3Alast-child%20%7Bmargin-bottom%3A%200%7D%0A%0A%2F*%20%0A*%20Custom%20styles%20%0A*%2F%0A%0A%2F*%20utilities%20*%2F%0A%5Bhide%5D%2C%20.css%2C%20.js%20%7B%0A%09display%3A%20none%3B%0A%7D%0A%5Bpointer%3D%22off%22%5D%20%7B%0A%09pointer-events%3A%20none%3B%0A%7D%0A%5Bpointer%3D%22on%22%5D%20%7B%0A%09pointer-events%3A%20auto%3B%0A%7D%0A%5Bcolor-inherit%5D%20%7B%0A%09color%3A%20inherit%3B%0A%7D%0A%5Binline-flex%5D%20%7B%0A%09display%3A%20inline-flex%3B%0A%7D%0A%2F*%20elements%20only%20detectable%20by%20screen%20readers%20*%2F%0A.sr-only%20%7B%0A%20%20position%3A%20absolute%3B%0A%20%20width%3A%201px%3B%0A%20%20height%3A%201px%3B%0A%20%20padding%3A%200%3B%0A%20%20margin%3A%20-1px%3B%0A%20%20overflow%3A%20hidden%3B%0A%20%20clip%3A%20rect(0%2C%200%2C%200%2C%200)%3B%0A%20%20white-space%3A%20nowrap%3B%0A%20%20border-width%3A%200%3B%0A%7D%0A%0A%2F*%20gradients%20*%2F%0A%2F*%20make%20sure%20to%20use%20background-image%20*%2F%0A%5Bgradient%3D%221%22%5D%20%7B%0A%20%20background-image%3A%20linear-gradient(135deg%2C%20var(--_themes---gradient-1--start-color)%200%25%2C%20var(--_themes---gradient-1--end-color)%20100%25)%3B%0A%7D%0A%5Bgradient%3D%222%22%5D%20%7B%0A%09background-image%3A%20linear-gradient(135deg%2C%20var(--_themes---gradient-2--start-color)%200%25%2C%20var(--_themes---gradient-2--end-color)%20100%25)%3B%0A%7D%0A%0A%0A%2F*%20shadows%20*%2F%0A%5Bshadow%5D%20%7B%20%0A%09box-shadow%3A%200%2010px%2015px%20-3px%20rgb(0%200%200%20%2F%200.1)%2C%200%204px%206px%20-4px%20rgb(0%200%200%20%2F%200.1)%3B%0A%7D%0A%5Bshadow%3D%22lg%22%5D%20%7B%20%0A%09box-shadow%3A%200%2020px%2025px%20-5px%20rgb(0%200%200%20%2F%200.1)%2C%200%208px%2010px%20-6px%20rgb(0%200%200%20%2F%200.1)%3B%0A%7D%0A%5Bshadow%3D%22xl%22%5D%20%7B%20%0A%09box-shadow%3A%200%2025px%2050px%20-12px%20rgb(0%200%200%20%2F%200.25)%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "js")}
        value="%3Cscript%3E%0Awindow.addEventListener('load'%2C%20()%20%3D%3E%20%7B%0A%09%2F%2F%20js%0A%7D)%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
