import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setLayout } from "../../redux/actions/layoutActions";
import RangeInput from "../RangeInput";
import * as actions from "../../redux/actions/actionTypes";

const Menu = ({ changeLayout, layout, state, ...props }) => {
  const [margin, setMargin] = useState(50);
  useEffect(() => {
    console.log("margin", margin);
    changeLayout({ ...layout, margin });
  }, [margin]);

  const updateLayout = () => {
    // dispatch({
    //   type: actions.SET_LAYOUT,
    //   payload: { name: "2:3", x: 100, y: 66 },
    // });
    changeLayout({ name: "2:3", x: 100, y: 66, margin });
  };

  return (
    <>
      <h2>layout workarea template</h2>
      <button onClick={() => updateLayout()}>byt ratio</button>
      <RangeInput value={margin} setValue={setMargin} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.layoutReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLayout: (layout) => dispatch(setLayout(layout)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
