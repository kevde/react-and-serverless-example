import { Grid, Typography } from "@mui/material";

export default function ComponentThree({ children }) {
  return <Grid container
    direction="column"
    spacing={2}
    padding={2}
    style={{
      backgroundColor: 'rgb(255,150,150)',
      borderRadius: '1rem',
    }}
    direction="column">
    <Grid item>
      <Typography variant="h4">
        Component 3
          </Typography>
    </Grid>
    <Grid item style={{
      padding: '1rem'
    }}>
      {children}
    </Grid>
  </Grid>
}