import React from "react";
import * as _Builtin from "./_Builtin";
import { Hero } from "./Hero";
import * as _utils from "./utils";
import _styles from "./HeroSection.module.css";

export function HeroSection({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "component-section-wrapper")}
      tag="div"
    >
      <Hero />
    </_Component>
  );
}
