import React from "react";
import Image from "../../assets/images/spaceX-launch.webp";
import PropTypes from "prop-types";
import { StyledBaseImage } from "./BaseImage.styled";

const BaseImage = ({
  src,
  alt,
  width,
  height,
  imgClass,
  className,
  objectFit,
}) => {
  return (
    <StyledBaseImage className={className}>
      <img
        className={imgClass}
        src={src}
        loading="lazy"
        alt={alt}
        height={height}
        width={width}
        objectFit={objectFit}
      />
    </StyledBaseImage>
  );
};

BaseImage.propTypes = {
  /**
   * Image source
   */
  src: PropTypes.string,
  /**
   * Alt text for image that doesn't load (or for screen readers)
   */
  alt: PropTypes.string,
  /**
   * Width of the image (css value)
   */
  width: PropTypes.string,
  /**
   * Height of the image (css value)
   */
  height: PropTypes.string,
  /**
   * Image class
   */
  imgClass: PropTypes.string,
  /**
   * Scale image to fit its container
   */
  objectFit: PropTypes.oneOf(["fill", "cover", "contain", "scale-down, none"]),
};

BaseImage.defaultProps = {
  src: Image,
  alt: "Some image",
  objectFit: "none",
};

export default BaseImage;
