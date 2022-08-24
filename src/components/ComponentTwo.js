import { Grid, Typography } from "@mui/material";

export default function ComponentTwo({ children }) {
  return <Grid
  container
  direction="column"
  spacing={2}
  padding={2}
  style={{
    backgroundColor: 'rgb(255,100,100)',
    borderRadius: '1rem',
  }}
  direction="column">
    <Grid item>
      <Typography variant="h4">
        Component 2
          </Typography>
    </Grid>
    <Grid item>
      {children}
    </Grid>
  </Grid>
}