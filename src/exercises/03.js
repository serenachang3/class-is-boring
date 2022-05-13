import { Component, useEffect, useState } from "react";

import { oneRandomActivity } from "../bored-api";

class ClassComp03 extends Component {
  constructor() {
    super();
    this.state = {
      doWhenImBored: null,
    };
  }
  async componentDidMount() {
    const anActivity = await oneRandomActivity();
    this.setState({ doWhenImBored: anActivity });
  }
  render() {
    if (this.state.doWhenImBored === null) {
      return <h2>Siiiiiiigh. Loading ...</h2>;
    } else {
      return <h1>{this.state.doWhenImBored}</h1>;
    }
  }
}

const FunctionalComponent03 = () => {
  const [doWhenImBored, setDoWhenImBored] = useState(null);

  // componentDidMount -- function + empty array
  // can't make the function you provide to useEffect an async function!
  useEffect(() => {
    const run = async () => {
        const anActivity = await oneRandomActivity();
        setDoWhenImBored(anActivity)
    }
    run();
    // empty dependency array makes it just render once
  }, []);

  if (doWhenImBored === null) {
    return <h2>Siiiiiiigh. Loading ...</h2>;
  } else {
    return <h1>{doWhenImBored}</h1>;
  }
};

export default FunctionalComponent03;
