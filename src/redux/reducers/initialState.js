// const state = {
//   navigation: {
//     options: ["layout", "image", "logo", "text", "colors", "download"],
//     active: "image",
//   },
//   text: {
//     content: "placeholder, click to edit",
//     activeFont: "sans-serif",
//     fonts: ["sane-serif", "serif"],
//   },
//   colors: {
//     activeTextColor: "",
//     activeFilterColor: "",
//     filterOpacity: "50",
//     activeBackgroundColor: "",
//     options: ["transparent", "#fff", "#000"], // array of pre-set options or colorpicker as input ?
//   },
//   layout: {
//     ratios: [
//       {
//         name: "1:1",
//         x: 100,
//         y: 100,
//       },
//       {
//         name: "3:2",
//         x: 100,
//         y: 66,
//       },
//       {
//         name: "2:3",
//         x: 66,
//         y: 100,
//       },
//     ],
//   },
//   image: {
//     upload: "",
//     position: {
//       x: 50,
//       y: 50,
//       size: 100,
//     },
//   },
//   logo: {
//     active: "",
//     position: [
//       "top-left",
//       "top-center",
//       "top-right",
//       "bottom-right",
//       "bottom-center",
//       "bottom-left",
//       "center",
//     ],
//     settings: {
//       position: "",
//       opacity: 100,
//       width: 33,
//     },
//   },
// };

const state = {
  navigation: {
    active: "image",
  },
  text: {
    content: "placeholder, click to edit",
    font: "",
  },
  colors: {
    text: "",
    filter: "",
    cackground: "",
    filterOpacity: "50",
  },
  layout: {
    name: "1:1",
    x: 100,
    y: 100,
    margin: 10,
  },
  image: {
    upload: "",
    x: 50,
    y: 50,
    size: 100,
  },
  logo: {
    active: "",
    position: "top-left",
    opacity: 100,
    width: 33,
  },
};

export default state;
