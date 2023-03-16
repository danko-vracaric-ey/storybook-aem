import React from "react";
import Image from "../../assets/images/spaceX-launch.webp";
import PropTypes from "prop-types";
import { StyledBaseImage } from "./BaseImage.styled";

// const BlockImage = ({
//     src,
//     alt,
//     width,
//     height,
//     imageClass,
//     wrapperClass,
//     objectFitClass,
//   }) => {
//     if (!src) src = ''
//     if (!srcset) srcset = ''
//     if (!alt) alt = ''
//     if (!width) width = ''
//     if (!height) height = ''
//     if (!imageClass) imageClass = ''
//     if (!objectFitClass) objectFitClass = ''

//     return `<div${wrapperClass ? ` class="${wrapperClass}"` : ''}>${
//       src
//         ? `<img class="BaseImage ${imageClass} ${objectFitClass} lazyload" data-src="${src}" data-srcset="${srcset}" alt="${alt}" width="${width}" height="${height}" loading="lazy" />`
//         : ''
//     }</div>`
//   }

// export default BlockImage

const BaseImage = ({
  src,
  alt,
  width,
  height,
  imgClass,
  wrapperClass,
  objectFit,
}) => {
  return (
    <StyledBaseImage className={wrapperClass}>
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
   * Wrapper class
   */
  wrapperClass: PropTypes.string,
  /**
   * Scale image to fit its container
   */
  objectFit: PropTypes.oneOf(["fill", "cover", "contain", "scale-down"]),
};

BaseImage.defaultProps = {
  src: Image,
  alt: "Some image",
  objectFit: "none",
};

export default BaseImage;
