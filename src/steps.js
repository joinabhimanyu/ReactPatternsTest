import React from "react";
import { Form } from "semantic-ui-react";

export const Step = props => {
  if (props.isActive) {
    return <React.Fragment>{props.render(props)}</React.Fragment>;
  }

  return null;
};

export const RegistrationFields = props => {
  return (
    <React.Fragment>
      <Form.Input
        label="What is your name?"
        placeholder="Name"
        onChange={(_, node) =>
          props.handleChange(node.value, "RegistrationFields")
        }
      />
    </React.Fragment>
  );
};

export const BillingFields = props => {
  return (
    <React.Fragment>
      <Form.Input
        label="What is your billing address?"
        placeholder="Billing address"
        onChange={(_, node) => props.handleChange(node.value, "BillingFields")}
      />
    </React.Fragment>
  );
};

export const MailingFields = props => {
  return (
    <React.Fragment>
      <Form.Input
        label="What is your mailing address?"
        placeholder="Mailing address"
        onChange={(_, node) => props.handleChange(node.value, "MailingFields")}
      />
    </React.Fragment>
  );
};
