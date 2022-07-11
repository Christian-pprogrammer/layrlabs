import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BlueButton = styled(Button)(() => ({
  fontSize: "16px",
  fontWeight: 700,
  height: 45,
  borderRadius: "5px",
  color: "#ECFCFF",
  backgroundColor: "#1BA8C7",
  "&:hover": {
    backgroundColor: "rgba(27, 168, 199, 0.75)",
  },
}));

export default BlueButton