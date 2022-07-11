import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import BlueButton from "components/shared-components/BlueButton";
import MainContainer from "components/shared-components/MainContainer";
import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Table from '../../components/Table';
import Block from "components/Block";

export default function Home() {
  const theme = useTheme();
  
  const data = [
    
  ]
  for(let i = 2; i <= 20; i+=0.1) {
    data.push({
      value: 11.9 + Math.random(),
      hour: i
    })
  }

  console.log(data);
  
  return (
    <>
      <Box component="section">
        <MainContainer>
          <Box>
            <Block />
            <Grid container>
              <Grid item md={7} xs={12} sx = {{
              }}>
                <Table />
              </Grid>
              <Grid item md={5} xs={12}>
                <Box sx={{
                  background: "#121927",
                  paddingRight: "10px",
                  marginLeft: "40px"
                }}>
                  <Typography sx={{
                    paddingX: "45px",
                    fontSize: "30px"
                  }} > 
                    Today
                  </Typography>
                  <Box>
                    <Typography sx={{
                      paddingX: "45px",
                      fontSize: "15px"
                    }}>
                      Commitment rate
                    </Typography>
                    <ResponsiveContainer width="100%" height={150}>
                      <AreaChart data={data}>
                        <Area dataKey="value" stroke="#1BA8C7" fill='transparent' />

                        <XAxis 
                          dataKey="hour" 
                          stroke="#435372" 
                          axisLine={true} 
                          tickLine={false} 
                          padding="10"
                          tickFormatter={(num)=>{
                            if(Math.trunc(num) % 5 == 0) {
                              return `${Math.trunc(num)}`
                            }else{
                              return ``
                            }
                          }}
                          
                          label = {
                            <CustomLabel />
                          }

                          />

                        <YAxis dataKey="value" axisLine={false} tickLine={false} tickCount="5" />

                        <Tooltip content={<CustomTooltip label="date" />} />

                        {/* <CartesianGrid opacity={0.1} vertical={false}  /> */}
                    </AreaChart>
                  </ResponsiveContainer>
                  </Box>
                  <Box>
                    <Typography sx={{
                      paddingX: "45px",
                      fontSize: "15px"
                    }}>
                      Node Bandwidth
                    </Typography>
                    <ResponsiveContainer width="100%" height={150}>
                      <AreaChart data={data}>
                        <Area dataKey="value" stroke="#FFD76F" fill='transparent' />

                        <XAxis 
                          dataKey="hour" 
                          stroke="#435372" 
                          axisLine={true} 
                          tickLine={false} 
                          padding="10"
                          tickFormatter={(num)=>{
                            if(Math.trunc(num) % 5 == 0) {
                              return `${Math.trunc(num)}`
                            }else{
                              return ``
                            }
                          }}
                          
                          label = {
                            <CustomLabel />
                          }

                          />

                        <YAxis dataKey="value" axisLine={false} tickLine={false} tickCount="5" />

                        <Tooltip content={<CustomTooltip label="date" />} />

                        {/* <CartesianGrid opacity={0.1} vertical={false}  /> */}
                    </AreaChart>
                  </ResponsiveContainer>
                  </Box>
                  <Box>
                    <Typography sx={{
                      paddingX: "45px",
                      fontSize: "15px"
                    }}>
                      Gas per byte
                    </Typography>
                    <ResponsiveContainer width="100%" height={150}>
                      <AreaChart data={data}>
                        <Area dataKey="value" stroke="#F19CFF" fill='transparent' />

                        <XAxis 
                          dataKey="hour" 
                          stroke="#435372" 
                          axisLine={true} 
                          tickLine={false} 
                          padding="10"
                          tickFormatter={(num)=>{
                            if(Math.trunc(num) % 5 == 0) {
                              return `${Math.trunc(num)}`
                            }else{
                              return ``
                            }
                          }}
                          
                          label = {
                            <CustomLabel />
                          }

                          />

                        <YAxis dataKey="value" axisLine={false} tickLine={false} tickCount="5" />

                        <Tooltip content={<CustomTooltip label="date" />} />

                        {/* <CartesianGrid opacity={0.1} vertical={false}  /> */}
                    </AreaChart>
                  </ResponsiveContainer>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </MainContainer>
      </Box>
    </>
  );
}
function CustomTooltip({active, payload, label}) {
  if(active) {
    return <div >
      <h4>{label}</h4>
    </div>
  }else{
    return null;
  }
}

function CustomLabel() {
  return <h4 style={{
    color: "#fff"
  }}>
    MB/s
  </h4>
}