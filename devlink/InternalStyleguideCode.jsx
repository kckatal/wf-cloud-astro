"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InternalStyleguideCode.module.css";

export function InternalStyleguideCode({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "u-hide")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "css")}
        value="%3Cstyle%3E%0A%2F*%20these%20styles%20are%20only%20used%20on%20this%20page%20to%20avoid%20adding%20them%20to%20the%20global%20css%20*%2F%0Abody%2C%20.sg-nav%2C%20.sg-side_nav%20%7B%0A%20%20transition-property%3A%20color%2C%20background-color%2C%20border-color%3B%0A%20%20transition-duration%3A%20200ms%3B%0A%20%20transition-timing-function%3A%20ease%3B%0A%7D%0A%0A%23structure-sections%20.section%2C%0A%23structure-containers%20.container%20%7B%0A%09position%3Arelative%3B%0A%20%20outline%3A%201px%20solid%20var(--colors--stroke)%3B%0A%20%20border-radius%3A%20var(--rounded--cards)%3B%0A%20%20overflow%3A%20hidden%0A%7D%0A%0A%23structure-spacers%20%5Bclass%5E%3D%22spacer-%22%5D%20%7B%0A%09background-color%3A%20rgba(62%2C%20108%2C%20255%2C%200.12)%3B%0A%7D%0A%0A%5Bstroke%5D%20%7B%0A%09border%3A%201px%20solid%20var(--colors--stroke)%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
      />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "js")}
        value="%3Cscript%3E%0A%2F**%0A*%20Light%2FDark%20mode%0A*%2F%0A%2F%2F%20check%20if%20the%20theme%20exists%20in%20local%20storage%0Aif%20(localStorage.getItem('theme')%20%3D%3D%3D%20'light')%20%7B%0A%20%20%2F%2F%20remove%20attribute%20from%20body%20element%0A%20%20document.body.classList.remove('u-bg-dark')%0A%7D%0A%0Awindow.addEventListener('load'%2C%20()%20%3D%3E%20%7B%0A%20%20%2F%2F%20if%20toggle%20is%20clicked%2C%20toggle%20the%20theme%20and%20store%20it%20in%20local%20storage%0A%20%20document.querySelectorAll('%5Btheme-switch%5D').forEach(btn%20%3D%3E%20%7B%0A%20%20%20%20btn.addEventListener('click'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(document.body.classList.contains('u-bg-dark'))%20%7B%0A%20%20%20%20%20%20%20%20document.body.classList.remove('u-bg-dark')%0A%20%20%20%20%20%20%20%20localStorage.setItem('theme'%2C%20'light')%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20document.body.classList.add('u-bg-dark')%0A%20%20%20%20%20%20%20%20localStorage.setItem('theme'%2C%20'dark')%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%20%2F*%20end%20of%20click%20listener%20*%2F%0A%20%20%20%20%2F*%20click%20on%20keyboard%20%22enter%22%20-%20accessibility%20*%2F%0A%20%20%20%20btn.addEventListener('keypress'%2C%20(event)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%2F%2F%20If%20the%20user%20presses%20the%20%22Enter%22%20key%20on%20the%20keyboard%0A%20%20%20%20%20%20if%20(event.key%20%3D%3D%3D%20%22Enter%22)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20Trigger%20the%20button%20element%20with%20a%20click%0A%20%20%20%20%20%20%20%20btn.click()%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%20%2F*%20end%20of%20keypress%20listener%20*%2F%0A%20%20%7D)%20%2F*%20end%20of%20forEach%20loop%20*%2F%0A%7D)%2F*%20end%20of%20load%20listener%20*%2F%0A%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
