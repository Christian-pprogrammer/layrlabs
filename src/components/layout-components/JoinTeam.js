import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MainContainer from "components/shared-components/MainContainer";
import BlueButton from "components/shared-components/BlueButton";

export default function JoinTeam() {
  return (
    <Box component="section" sx={{ textAlign: "center", padding: "70px 0", backgroundColor: "#0A1017" }}>
      <MainContainer>
        <Typography variant="h3" sx={{ fontSize: "20px", fontWeight: 700 }}>
          Looking to join our team?
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            margin: "20px auto 0",
            maxWidth: 550,
          }}
        >
          Come work with us at LayrLabs to build the platforms for innovation
          and the next generation of features and applications on blockchains.
        </Typography>
        <BlueButton sx={{ width: 140, marginTop: "20px" }}>
          Apply Now
        </BlueButton>
      </MainContainer>
    </Box>
  );
}
