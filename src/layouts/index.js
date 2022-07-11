import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "components/layout-components/Header";
import Footer from "components/layout-components/Footer";
import JoinTeam from "components/layout-components/JoinTeam";

function DashboardLayout() {
  const theme = useTheme();
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Box
        component="main"
        sx={{
          paddingTop: "249px",
          [theme.breakpoints.down("xl")]: {
            paddingTop: "200px",
          },
          [theme.breakpoints.down("md")]: {
            paddingTop: "150px",
          },
          [theme.breakpoints.down("sm")]: {
            paddingTop: "100px",
          },
        }}
      >
        <Outlet />
      </Box>
      <JoinTeam />
      <Footer />
    </Box>
  );
}

DashboardLayout.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayout;
