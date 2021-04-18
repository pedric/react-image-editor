import React, { useContext } from "react";
import { connect } from "react-redux";
import { toggleMenu } from "../../redux/actions/menuActions";
import WorkArea from "../WorkArea";
import { Nav, Button } from "./styles";
import MenuContext from "../../MenuContext";

const Menu = ({ toggleMenu, active, theme }) => {
  const toggle = (panel) => {
    toggleMenu(panel);
  };

  const styles = {
    color: `${theme.primary}`,
  };

  const menuItems = useContext(MenuContext);

  return (
    <>
      <Nav>
        {menuItems.length > 0
          ? menuItems.map((option) => (
              <Button
                style={styles}
                className={active === option ? "active" : ""}
                key={option}
                onClick={() => toggle(option)}
              >
                {option}
              </Button>
            ))
          : null}
      </Nav>
      <WorkArea activeTab={active} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    active: state.menuReducer.active,
    theme: state.themeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (panel) => dispatch(toggleMenu(panel)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
