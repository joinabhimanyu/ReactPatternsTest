import React from "react";

export class ButtonList extends React.Component {
  render() {
    const { activeStepIndex, totalSteps } = this.props;
    const children = React.Children.map(this.props.children, (child, index) => {
      if (child.type.name === "Previous") {
        return React.cloneElement(child, {
          isPreviousActive: activeStepIndex > 0 ? true : false,
          goToPreviousStep: () => this.props.onPreviousStep()
        });
      } else if (child.type.name === "Next") {
        return React.cloneElement(child, {
          isNextActive: activeStepIndex < totalSteps ? true : false,
          goToNextStep: () => this.props.onNextStep()
        });
      } else if (child.type.name === "Submit") {
        return React.cloneElement(child, {
          isLastStep: activeStepIndex == totalSteps,
          handleSubmit: () => this.props.handleSubmit()
        });
      }
    });
    return children;
  }
}
