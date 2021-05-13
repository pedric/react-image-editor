import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import EditorMonitor from "./components/EditorMonitor";
import DebugMonitor from "./components/DebugMonitor";
import { connect } from "react-redux";
import * as actions from "./redux/actions/actionTypes";
import themes from "./themes";
import styled from "styled-components";

const StyledAppWrapper = styled.main`
  min-width: 100vw;
  min-height: 100vh;

  .App {
    width: 100%;
    max-width: 500px;
    margin: 20px auto 0;
  }
`;

function App({ dispatch, theme }) {
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
    background: `${theme.background}`,
    color: `${theme.primary}`,
  };

  return (
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
        <DebugMonitor />
        <EditorMonitor />
        <Menu />
      </div>
    </StyledAppWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer,
  };
};

export default connect(mapStateToProps)(App);
