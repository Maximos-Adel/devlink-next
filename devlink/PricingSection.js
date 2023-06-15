import React from "react";
import * as _Builtin from "./_Builtin";
import { Pricing } from "./Pricing";
import { PricingGrid } from "./PricingGrid";
import * as _utils from "./utils";
import _styles from "./PricingSection.module.css";

export function PricingSection({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "component-section-wrapper")}
      tag="div"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "component-heading")}
        tag="h2"
      >
        {"Pricing"}
      </_Builtin.Heading>
      <Pricing />
      <PricingGrid />
    </_Component>
  );
}
