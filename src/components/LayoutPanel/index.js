import React, { useEffect, useState, useContext } from "react";
import { setLayout } from "../../redux/actions/layoutActions";
import RangeInput from "../RangeInput";
import EditorContext from "../../context";

const Menu = () => {
  const { store, dispatch } = useContext(EditorContext);
  const [margin, setMargin] = useState(50);
  useEffect(() => {
    // changeLayout({ ...layout, margin: parseInt(margin) });
  }, []);

  const updateLayout = (obj) => {
    // changeLayout(obj);
  };

  return (
    <>
      <div>
        <button
          onClick={() => updateLayout({ name: "1:1", x: 100, y: 100, margin })}
        >
          Square
        </button>
        <button
          onClick={() => updateLayout({ name: "3:2", x: 100, y: 66, margin })}
        >
          Landscape
        </button>
        <button
          onClick={() => updateLayout({ name: "2:3", x: 66, y: 100, margin })}
        >
          Portrait
        </button>
      </div>
      <div>
        <RangeInput
          // color={theme.primary}
          label='Margin'
          value={margin}
          setValue={setMargin}
          range={{ min: 0, max: 100 }}
        />
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     layout: state.layoutReducer,
//     theme: state.themeReducer,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeLayout: (layout) => dispatch(setLayout(layout)),
//   };
// };

export default Menu;
