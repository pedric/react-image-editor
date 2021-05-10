import { useState, useEffect, useMemo, useReducer } from "react";
import Menu from "./components/Menu";
import EditorMonitor from "./components/EditorMonitor";
import DebugMonitor from "./components/DebugMonitor";
import { connect } from "react-redux";
import * as actions from "./redux/actions/actionTypes";
import themes from "./themes";
import styled from "styled-components";
import EditorContext from "./context";
import initialState from "./context/initialState";

const StyledAppWrapper = styled.main`
  min-width: 100vw;
  min-height: 100vh;

  .App {
    width: 100%;
    max-width: 500px;
    margin: 20px auto 0;
  }
`;

const reducer = (state, action) => {
  console.log({ state });
  console.log({ action });
  return initialState;
};

const App = () => {
  const [store, dispatch] = useReducer(reducer, {});

  const contextValue = useMemo(() => {
    return { store, dispatch };
  }, [store, dispatch]);

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    let style = darkMode ? { ...themes.dark } : { ...themes.light };
    toggleTheme(style);
    // eslint-disable-next-line
  }, [darkMode]);

  const toggleTheme = (style) => {
    dispatch({ type: actions.SET_THEME, payload: style });
  };

  const styles = {
    background: "#fff",
    color: "#000",
  };

  // const styles = {
  //   background: `${theme.background}`,
  //   color: `${theme.primary}`,
  // };

  return (
    <EditorContext.Provider value={contextValue}>
      <StyledAppWrapper style={styles}>
        <div style={{ width: "100%", maxWidth: "500px", margin: "2px auto 0" }}>
          <label htmlFor='darkmode'>
            <input
              name='darkmode'
              type='checkbox'
              value={darkMode}
              onChange={() => setDarkMode((darkMode) => !darkMode)}
            />
            Toggle dark/light mode
          </label>
        </div>
        <div className='App'>
          <DebugMonitor hidden />
          <EditorMonitor />
          <Menu />
        </div>
      </StyledAppWrapper>
    </EditorContext.Provider>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     theme: state.themeReducer,
//   };
// };

export default App;
