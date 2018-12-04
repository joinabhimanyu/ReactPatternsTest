import React from "react";
import ReactDOM from "react-dom";
import { FormWizard } from "./formwizard";
import { StepList } from "./steplist";
import { ButtonList } from "./buttonlist";
import {
  Step,
  RegistrationFields,
  BillingFields,
  MailingFields
} from "./steps";
import { Previous, Next, Submit } from "./buttons";

class Demo extends React.Component {
  render() {
    return (
      <div>
        <FormWizard>
          <StepList>
            <Step render={props => RegistrationFields(props)} />
            <Step render={props => BillingFields(props)} />
            <Step render={props => MailingFields(props)} />
          </StepList>
          <ButtonList>
            <Previous />
            <Next />
            <Submit />
          </ButtonList>
        </FormWizard>
      </div>
    );
  }
}

export default Demo;

ReactDOM.render(<Demo />, document.getElementById("root"));
