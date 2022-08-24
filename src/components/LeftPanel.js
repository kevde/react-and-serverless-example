import { Button, CircularProgress, Grid } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";


export default function LeftPanel() {
  const context = useContext(MainContext)
  return <Grid container
    direction="column"
    spacing={2}
    padding={2}
    minHeight={'100vh'}
    alignItems="center"
    justifyContent="center"
    style={{
      backgroundColor: 'rgb(200,200,200)'
    }}
  >
    {context.isLeftPanelLoading && (<CircularProgress />)}
    {context.isLeftPanelOpened && context.names.map((name) => {
      return (
        <Grid item>
          <Button>
            {name}
          </Button>
        </Grid>
      )
    })}
  </Grid>
}
