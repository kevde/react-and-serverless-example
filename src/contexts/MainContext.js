import { createContext, useState } from "react";

export const MainContext = createContext({});

export default function MainContextProvider({ children }) {
  const [isLeftPanelOpened, toggleLeftPanel] = useState(true)
  const [isLeftPanelLoading, toggleLeftPanelLoading] = useState(false)
  const [isFirstnamePanelOpened, toggleFirstnamePanel] = useState(false)
  const [isFirstnamePanelLoading, toggleFirstnamePanelLoading] = useState(false)
  const [isOperationPanelLoading, toggleOperationPanelLoading] = useState(false)
  const [names, setNames] = useState([])
  const [firstnames, setFirstnames] = useState([])
  const [operationResult, setOperationResult] = useState()

  return (
    <MainContext.Provider
      value={{
        names,
        operationResult,
        firstnames,
        isFirstnamePanelOpened,
        isFirstnamePanelLoading,
        isLeftPanelOpened,
        isLeftPanelLoading,
        isOperationPanelLoading,
        setNames,
        setFirstnames,
        setOperationResult,
        toggleLeftPanel,
        toggleLeftPanelLoading,
        toggleFirstnamePanel,
        toggleFirstnamePanelLoading,
        toggleOperationPanelLoading,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
