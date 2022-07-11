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
          <Box>
            <Grid container>
              <Grid item md={6} xs={12}>
                <Box>
                          
                </Box>
              </Grid>
            </Grid>
          </Box>
        </MainContainer>
      </Box>
    </>
  );
}
