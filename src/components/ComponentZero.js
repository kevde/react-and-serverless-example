import { Button, Grid, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { MainContext } from "../contexts/MainContext";
import { expensiveOperation } from '../utils/ExpensiveOperationUtil';
import * as axios from 'axios';
import { useWorker } from "@koale/useworker";

const NAMES = ['Smith', 'Taylor', 'Resco'];
const QUESTIONS = ['Question 1', 'Question 2', 'Question 3'];
const FIRST_QUESTION = 0;
const SECOND_QUESTION = 1;
const THIRD_QUESTION = 2;

export default function ComponentZero({ children }) {
  const context = useContext(MainContext)

  const [triggerExpensiveOperation] = useWorker(expensiveOperation)

  useEffect(() => {
    context.setNames(NAMES)
  }, [])

  const getLastNames = async () => {
    try {
      const response = await axios.get('http://localhost:4000/dev/last-names');
      return response?.data?.last_names || NAMES;
    } catch(error) {
      return NAMES;
    }
  }

  const handleOperationPanel = async () => {
    try {
      context.toggleOperationPanelLoading(true)
      const expensiveOperationResult = await triggerExpensiveOperation()
      context.setOperationResult(expensiveOperationResult)
    } finally {
      context.toggleOperationPanelLoading(false)
    }
  }

  const handleGetLastNames = async () => {
    try {
      context.toggleLeftPanelLoading(true)
      if (!context.isLeftPanelOpened) {
        const lastNames = await getLastNames();
        context.setNames(lastNames);
      }
    } finally {
      context.toggleLeftPanelLoading(false)
    }
  }

  const handleFirstnamePanel = async () => {
    try {
      if (context.isFirstnamePanelOpened) {
        return
      }

      context.toggleFirstnamePanelLoading(true)
      const lastNames = await getLastNames();
      context.setNames(lastNames);
    } finally {
      context.toggleFirstnamePanelLoading(false)
      context.toggleFirstnamePanel(!!!context.isFirstnamePanelOpened)
    }
  }

  const handleQuestionClicked = (questionIndex) => async () => {
    switch (questionIndex) {
      case FIRST_QUESTION: {
        await handleGetLastNames();
        context.toggleLeftPanel(!!!context.isLeftPanelOpened)
        break;
      }
      case SECOND_QUESTION: {
        await handleFirstnamePanel()
        break;
      }
      case THIRD_QUESTION: {
        await handleOperationPanel()
        break;
      }
    }
  }

  const createQuestions = () => {
    return <Grid container
      justifyContent="space-around"
      margin={2}
    >
      {QUESTIONS.map((question, questionIndex) => {
        return (
          <Grid item>
            <Button
              variant="filled"
              onClick={handleQuestionClicked(questionIndex)}
            >
              {question}
            </Button>
          </Grid>
        )
      })}
    </Grid>
  }

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      padding={2}
      minHeight={'100vh'}
      justifyContent="center"
      style={{ backgroundColor: 'rgb(255,0,0)' }}
    >
      <Grid item>
        <Typography variant="h4">
          Component 0
          </Typography>
      </Grid>
      <Grid item>
        {createQuestions()}
      </Grid>
      <Grid item>
        {children}
      </Grid>
    </Grid>
  );
}
