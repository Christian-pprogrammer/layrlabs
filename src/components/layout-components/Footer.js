import { useNavigate, Link as RouterLink } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MainContainer from "components/shared-components/MainContainer";
import LockIcon from "@mui/icons-material/Lock";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import IconButton from "@mui/material/IconButton";

const Link = styled(RouterLink)(() => ({
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
  color: "#D8F8FF",
  position: "relative",
  display: "flex",
  alignItems: "center",
  minHeight: "29px",
  "&:hover": {
    fontWeight: 700,
    color: "#ECFCFF",
  },
}));

export default function Footer() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121927",
        padding: "52px 0 85px",
        [theme.breakpoints.down("md")]: { paddingBottom: 0 },
      }}
    >
      <MainContainer>
        <Grid
          container
          sx={{
            maxWidth: "1200px",
            justifyContent: "space-between",
            [theme.breakpoints.down("sm")]: { display: "block" },
          }}
        >
          <Grid item>
            <Box sx={{ "& img": { width: 30 } }}>
              <Button
                onClick={() => navigate("/")}
                sx={{ padding: 0, minWidth: "unset" }}
              >
                <img src="/images/logo.svg" alt="Logo" />
              </Button>
            </Box>
            <Typography
              sx={{
                fontSize: "10px",
                lineHeight: 1.25,
                marginTop: "18px",
                "& span": { fontWeight: 700 },
              }}
            >
              Leveraging <span>trust.</span> <br />
              Enabling open <span>innovation.</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 600,
                marginTop: "50px",
                [theme.breakpoints.down("md")]: { display: "none" },
              }}
            >
              © 2022 LayrLabs, all rights reserved
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              [theme.breakpoints.down("sm")]: { marginTop: "30px" },
            }}
          >
            <Grid container>
              <Grid item>
                <Box>
                  <Typography>Navigation</Typography>
                  <Box
                    sx={{
                      width: 25,
                      height: 3,
                      borderRadius: "10px",
                      backgroundColor: "#1BA8C7",
                      margin: "14px 0 16px",
                    }}
                  />
                </Box>
                <Box>
                  <Link to="/">Home</Link>
                </Box>
                <Box>
                  <Link to="/solutions">Solutions</Link>
                </Box>
                <Box>
                  <Link to="/careers">Careers</Link>
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  marginLeft: "220px",
                  [theme.breakpoints.down("xl")]: { marginLeft: "140px" },
                  [theme.breakpoints.down("lg")]: { marginLeft: "80px" },
                  [theme.breakpoints.down("md")]: { marginLeft: "24px" },
                  [theme.breakpoints.down("sm")]: { marginLeft: "40px" },
                }}
              >
                <Box>
                  <Typography>Legal</Typography>
                </Box>
                <Box
                  sx={{
                    width: 25,
                    height: 3,
                    borderRadius: "10px",
                    backgroundColor: "#1BA8C7",
                    margin: "14px 0 16px",
                  }}
                />
                <Box>
                  <Link to="/privacy">
                    <LockIcon sx={{ width: 18, marginRight: "12px" }} />
                    Privacy Policy
                  </Link>
                </Box>
                <Box>
                  <Link to="/terms">
                    <MenuIcon sx={{ width: 18, marginRight: "12px" }} />
                    Terms & Conditions
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ [theme.breakpoints.down("sm")]: { marginTop: "30px" } }}
          >
            <Grid container>
              <Grid item>
                <IconButton
                  sx={{
                    width: 30,
                    hegiht: 30,
                    minWidth: 30,
                    minHeight: 30,
                    padding: 0,
                  }}
                >
                  <TwitterIcon sx={{ width: 19 }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{
                    width: 30,
                    hegiht: 30,
                    minWidth: 30,
                    minHeight: 30,
                    padding: 0,
                  }}
                >
                  <GoogleIcon sx={{ width: 16 }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{
                    width: 30,
                    hegiht: 30,
                    minWidth: 30,
                    minHeight: 30,
                    padding: 0,
                    "& img": { width: 9 },
                  }}
                >
                  <img src="/icons/f.svg" alt="f" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MainContainer>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "10px",
          fontWeight: 600,
          padding: "50px 0",
          [theme.breakpoints.up("md")]: { display: "none" },
        }}
      >
        © 2022 LayrLabs, all rights reserved
      </Typography>
    </Box>
  );
}
