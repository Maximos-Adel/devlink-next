import React from "react";
import * as _Builtin from "./_Builtin";
import { Brands } from "./Brands";
import * as _utils from "./utils";
import _styles from "./SocialSection.module.css";

export function SocialSection({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "component-section-wrapper")}
      tag="div"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "component-heading")}
        tag="h2"
      >
        {"Social proof"}
      </_Builtin.Heading>
      <Brands />
      <_Builtin.Section className={_utils.cx(_styles, "section")} tag="section">
        <_Builtin.Container
          className={_utils.cx(_styles, "container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "testimonial-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "testimonial-logo")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/648b1855ad8c952feb4da0b6/648b1856ad8c952feb4da139_logo4.svg"
            />
            <_Builtin.Paragraph className={_utils.cx(_styles, "testimonial")}>
              {
                '"As a fast-growing tech company, finding top-tier development talent quickly is a must. The Visual Developers Job Board has been instrumental in this process, offering a seamless, efficient platform that connects us with highly skilled developers in no time. It\'s revolutionized our hiring process, helping us build our dream team while saving valuable time and resources."'
              }
            </_Builtin.Paragraph>
            <_Builtin.Block
              className={_utils.cx(_styles, "testomonial-image-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "testimonial-image")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/648b1855ad8c952feb4da0b6/648b1856ad8c952feb4da140_jake-nackos-IF9TK5Uy-KI-unsplash.jpg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "testimonial-meta")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Emily Anderson"}</_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "testimonial-bullet")}
                tag="div"
              >
                {"•"}
              </_Builtin.Block>
              <_Builtin.Block tag="div">{"CEO of Iceberg"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Container>
      </_Builtin.Section>
    </_Component>
  );
}
