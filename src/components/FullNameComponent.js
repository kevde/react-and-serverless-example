import { Grid, Typography } from "@mui/material";


export default function FullNameComponent({ firstnames, lastnames }) {
  const getFullNames = (firstnames, lastnames) => {
    return lastnames.map((lastname, index) => `${firstnames[index]} ${lastname}`)
  }

  const fullnames = getFullNames(firstnames, lastnames);

  return (<Grid container direction="column">
    {fullnames.map((fullname) => (
      <Typography variant="subtitle1">
        {fullname}
      </Typography>))
    }
  </Grid>);
} 