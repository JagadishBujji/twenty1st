import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const Image = styled("img")({
  width: "100%",
});

function SkeletonChildrenDemo(props) {
  const { isLoading, imageSrc } = props;

  return (
    <div>
      {isLoading ? (
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: "57%" }} />
        </Skeleton>
      ) : (
        <Image
          src={imageSrc}
          //   src={`https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512`}
          alt=""
        />
      )}
    </div>
  );
}

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function SkeletonChildren({ img, isLoading }) {
  console.log("skeleton:", img);
  return (
    <Grid container spacing={8}>
      {/* <Grid item xs>
        <SkeletonChildrenDemo loading />
      </Grid> */}
      <Grid item xs>
        <SkeletonChildrenDemo imageSrc={img} isLoading={isLoading} />
      </Grid>
    </Grid>
  );
}
