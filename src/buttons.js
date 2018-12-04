import React from "react";
import { Button } from "semantic-ui-react";

export const Previous = props => {
  if (props.isPreviousActive) {
    return (
      <Button onClick={() => props.goToPreviousStep()} color="red" size="large">
        Previous
      </Button>
    );
  }

  return null;
};

export const Next = props => {
  if (props.isNextActive) {
    return (
      <Button onClick={() => props.goToNextStep()} color="green" size="large">
        Next
      </Button>
    );
  }
  return null;
};

export const Submit = props => {
  if (props.isLastStep) {
    return (
      <Button onClick={() => props.handleSubmit()} size="large">
        Submit
      </Button>
    );
  }
  return null;
};
