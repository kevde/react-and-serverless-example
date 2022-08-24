import { Grid, Typography } from "@mui/material";

export default function ComponentOne({ children }) {
  return <Grid
    container
    direction="column"
    spacing={2}
    padding={2}
    style={{
      backgroundColor: 'rgb(255,50,50)',
      borderRadius: '1rem',
    } }>
    <Grid item>
      <Typography variant="h4">
        Component 1
          </Typography>
    </Grid>
    <Grid item>
      {children}
    </Grid>
  </Grid>
}