import React from "react";

export class StepList extends React.Component {
  render() {
    const { activeStepIndex, handleChange } = this.props;
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isActive: index === activeStepIndex,
        handleChange: handleChange
      });
    });
    return children;
  }
}
