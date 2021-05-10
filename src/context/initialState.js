const state = {
  navigation: {
    active: "image",
  },
  uploads: {
    image: "",
    logo: "",
  },
  text: {
    content: "",
    font: "",
    top: 0,
    right: null,
    bottom: null,
    left: 0,
    size: 14,
    align: "",
  },
  color: {
    text: "",
    filter: "",
    background: "",
    filterOpacity: 0,
  },
  layout: {
    name: "1:1",
    x: 100,
    y: 100,
    margin: 10,
  },
  image: {
    x: 50,
    y: 50,
    size: 100,
  },
  logo: {
    top: 0,
    right: null,
    bottom: null,
    left: 0,
    opacity: 100,
    width: 33,
  },
  theme: {
    background: "",
    primary: "",
    secondary: "",
  },
};

export default state;
