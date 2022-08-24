import { CircularProgress, Grid, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { MainContext } from "../contexts/MainContext";
import FullNameComponent from "./FullNameComponent";

const FIRST_NAMES = ['Kevin', 'Kevin', 'Kevin']

export default function ComponentFour({ children }) {
  const context = useContext(MainContext);

  useEffect(() => {
    context.setFirstnames(FIRST_NAMES)
  })

  return <Grid
    container
    direction="column"
    spacing={2}
    padding={2}
    style={{
      backgroundColor: 'rgb(255,200,200)',
      borderRadius: '1rem',
    }}
    direction="column">
    <Grid item>
      <Typography variant="h4">
        Component 4
      </Typography>
    </Grid>
    <Grid item>
      {children}
    </Grid>
    <Grid item xs={12} container direction="row" alignContent="center" justifyItems="center">
      <Grid item>
        {context.isFirstnamePanelLoading && <CircularProgress />}
      </Grid>
      <Grid item>
        <Typography variant="body2">
          {!context.isFirstnamePanelLoading && context.isFirstnamePanelOpened &&
            <FullNameComponent
              firstnames={context.firstnames}
              lastnames={context.names}
            />
          }
        </Typography>
      </Grid>
    </Grid>
    <Grid item xs={12} container direction="row" justifyContent="center" justifyItems="center">
      <Grid item>
        {context.isOperationPanelLoading && <CircularProgress />}
      </Grid>
      <Grid item>
        {!context.isOperationPanelLoading && context.operationResult && (
          <Typography variant="body2">Result: {context.operationResult}</Typography>
        )}
      </Grid>
    </Grid>
  </Grid>
}