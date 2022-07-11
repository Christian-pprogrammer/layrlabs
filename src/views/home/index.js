import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import BlueButton from "components/shared-components/BlueButton";
import MainContainer from "components/shared-components/MainContainer";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Box component="section">
        <MainContainer>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "48px",
                    lineHeight: 1.25,
                    fontWeight: 400,
                    marginTop: "100px",
                    "& span": {
                      fontWeight: 700,
                    },
                    [theme.breakpoints.down("xl")]: {
                      fontSize: "40px",
                      marginTop: "70px",
                    },
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "36px",
                      marginTop: "20px",
                    },
                    [theme.breakpoints.down("sm")]: { fontSize: "28px" },
                  }}
                >
                  Leveraging <span>trust.</span>
                  <br />
                  Enabling open <span>innovation.</span>
                </Typography>
              </Box>
              <Box sx={{ margin: "10px 0 35px" }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    [theme.breakpoints.down("lg")]: { fontSize: "18px" },
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
              <Box>
                <BlueButton sx={{ width: 154, position: "relative", zIndex: 2 }}>Learn More</BlueButton>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  "& img": {
                    width: 554,
                    [theme.breakpoints.down("xl")]: {
                      width: 420,
                      marginLeft: "30px",
                    },
                    [theme.breakpoints.down("lg")]: { width: 360 },
                    [theme.breakpoints.down("md")]: { width: 240 },
                    [theme.breakpoints.down("sm")]: { width: 200 },
                  },
                  [theme.breakpoints.down("md")]: {
                    textAlign: "right",
                    transform: "translateY(-40px)",
                  },
                  [theme.breakpoints.down("sm")]: {
                    transform: "translateY(-70px)",
                  },
                }}
              >
                <img src="/images/home-mv.svg" alt="Background" />
              </Box>
            </Grid>
          </Grid>
        </MainContainer>
      </Box>
      <Box
        component="section"
        sx={{
          marginTop: "226px",
          paddingBottom: "105px",
          [theme.breakpoints.down("xl")]: {
            marginTop: "200px",
          },
          [theme.breakpoints.down("lg")]: {
            marginTop: "170px",
          },
          [theme.breakpoints.down("md")]: {
            marginTop: "30px",
          },
          [theme.breakpoints.down("sm")]: {
            marginTop: "10px",
          },
        }}
      >
        <MainContainer>
          <Typography
            variant="h3"
            sx={{
              fontSize: "28px",
              fontWeight: 400,
              textAlign: "center",
              "& span": { fontWeight: 700 },
            }}
          >
            Explore the <span>Solutions</span>
          </Typography>
          <Typography
            sx={{ textAlign: "center", marginTop: "28px", fontWeight: 600 }}
          >
            Our products provide cryptoeconomic security for services and
            companies in modular blockchain layers.
          </Typography>
          <Box
            sx={{
              maxWidth: 1170,
              margin: "58px auto 0",
              "& .my-card": {
                backgroundColor: "#121927",
                borderRadius: "5px",
                padding: "36px 56px 84px",
                height: "100%",
                [theme.breakpoints.down("lg")]: {
                  padding: "36px 36px 64px",
                },
              },
              "& h4": {
                fontSize: "28px",
                fontWeight: 400,
                lineHeight: 2.1,
                "& span": { fontWeight: 700 },
                position: "relative",
                "&:after": {
                  content: "''",
                  display: "block",
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: 25,
                  height: 3,
                  borderRadius: "10px",
                },
              },
              "& p": {
                fontWeight: 600,
                lineHeight: 1.875,
                marginTop: "25px",
              },
            }}
          >
            <Grid container spacing={2.5}>
              <Grid item md={6} xs={12}>
                <Paper
                  className="my-card"
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      background:
                        "linear-gradient(180deg, rgba(18, 25, 39, 0) 0%, rgba(18, 25, 39, 0.25) 54.69%, rgba(206, 137, 33, 0.5) 100%)",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ "&:after": { backgroundColor: "#CE8921" } }}
                  >
                    <span>Eigen</span>Layr
                  </Typography>
                  <Typography>
                    A platform to leverage Ethereum security through the
                    innovative method of restaking.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item md={6} xs={12}>
                <Paper
                  className="my-card"
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      background:
                        "linear-gradient(180deg, rgba(18, 25, 39, 0) 0%, rgba(18, 25, 39, 0.25) 54.69%, rgba(44, 138, 98, 0.5) 100%)",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ "&:after": { backgroundColor: "#2C8A62" } }}
                  >
                    <span>Data</span>Layr
                  </Typography>
                  <Typography>
                    A highly customizable and hyperscaling data availability
                    service on EigenLayr, designed for OPptimistic and ZK
                    rollups.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </MainContainer>
      </Box>
    </>
  );
}
