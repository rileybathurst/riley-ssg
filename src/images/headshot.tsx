import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useHeadshot } from "../hooks/use-headshot";

const Headshot = () => {

  const { image } = useHeadshot()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={image.alternativeText}
      className="headshot"
    />
  );
};

export default Headshot;
