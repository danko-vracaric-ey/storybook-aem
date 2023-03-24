import React from "react";
import Image from "../../assets/images/spaceX-launch.webp";
import BaseButton from "../Button/Button";
import { StyledBlockTeaser } from "./BlockTeaser.styled";

const BlockTeaser = ({
  image,
  label,
  heading,
  introduction,
  buttonText,
  btnWidth,
  link,
}) => {
  const labelTop = label ? <h3>{label}</h3> : "";

  return (
    <StyledBlockTeaser image={image}>
      <div className="teaser teaser-card">
        <div>
          {labelTop}
          <h2>{heading}</h2>
          <p>{introduction}</p>
          <BaseButton label={buttonText} width={btnWidth} />
        </div>
      </div>
      <div className="teaser teaser-image"></div>
    </StyledBlockTeaser>
  );
};

BlockTeaser.defaultProps = {
  image: {
    size: "half",
    link: Image,
  },
  label: "YA BOI",
  heading: "Look away from here",
  introduction:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque saepe optio veniam assumenda, nulla nihil quos sunt. Consectetur voluptates voluptatum ea modi provident aperiam odio dolores consequuntur autem perspiciatis!",
  btnWidth: "60%",
  buttonText: "Hey you",
};

export default BlockTeaser;
