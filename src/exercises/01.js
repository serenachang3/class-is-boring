import { Component } from "react";

class ClassComp01 extends Component {
    render() {
        const { imageSource } = this.props;
        return <img alt="zzzzzzzzzzzz" src={imageSource} />;
    }
}

const FunctionalComponent01 = (props) => {
    const url = props.imageSource;
    return <img alt="zzzzzzzzzzzz" src={url} />;
};

//destructured

// const FunctionalComponent01 = ({imageSource}) => {
//     return <img alt="zzzzzzzzzzzz" src={imageSource} />;
// };

export default FunctionalComponent01;