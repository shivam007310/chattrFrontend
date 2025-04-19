import { styled } from "@mui/material";
import { Link as LinkComponent} from "react-router-dom";

export const VisuallyHiddenInput = styled("input")({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  border: "0",
  whiteSpace: "nowrap",
});

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding:1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;