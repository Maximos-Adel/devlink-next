import React from "react";
import * as _Builtin from "./_Builtin";
import { Newnav } from "./Newnav";
import * as _utils from "./utils";
import _styles from "./NavBar.module.css";

export function NavBar({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "component-section-wrapper")}
      tag="div"
    >
      <Newnav
        brandLink={{
          href: "/",
        }}
        homeLink={{
          href: "/",
        }}
        aboutLink={{
          href: "/about",
        }}
        jobsLink={{
          href: "/jobs",
        }}
        postLink={{
          href: "/jobs",
        }}
      />
    </_Component>
  );
}
