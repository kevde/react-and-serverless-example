import { Button, Container, Grid, Typography } from "@mui/material";
import ComponentZero, { ComponentZeroContext } from '../src/components/ComponentZero';
import Head from "next/head";
import LeftPanel from "../src/components/LeftPanel";
import { useContext } from "react";
import MainContextProvider, { MainContext } from "../src/contexts/MainContext";
import ComponentOne from "../src/components/ComponentOne";
import ComponentTwo from "../src/components/ComponentTwo";
import ComponentThree from "../src/components/ComponentThree";
import ComponentFour from "../src/components/ComponentFour";

export default function Home() {
  const context = useContext(MainContext)
  return (
    <MainContextProvider>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Container>
            <Grid
              container
              direction="row"
              alignItems="center"
              spacing={2}>
              <Grid item xs={3}>
                <LeftPanel />
              </Grid>
              <Grid item xs>
                <ComponentZero>
                  <ComponentOne>
                    <ComponentTwo>
                      <ComponentThree>
                        <ComponentFour />
                      </ComponentThree>
                    </ComponentTwo>
                  </ComponentOne>
                </ComponentZero>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </MainContextProvider>
  );
}
