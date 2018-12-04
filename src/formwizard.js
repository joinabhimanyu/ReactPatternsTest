import React from "react";
import { Form } from "semantic-ui-react";

export class FormWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStepIndex: 0,
      name: "",
      billingAddress: "",
      mailingAddress: ""
    };
  }

  getTotalSteps = children => {
    let totalSteps = 0;
    for (let child of children) {
      if (child.type.name === "StepList") {
        totalSteps = child.props.children.length - 1;
      }
    }
    this.setState({ totalSteps: totalSteps });
  };

  submitHandler = () => {
    debugger;
    const { name, billingAddress, mailingAddress } = this.state;
    alert(`data: ${name} ${billingAddress} ${mailingAddress}`);
  };

  componentDidMount() {
    this.getTotalSteps(this.props.children);
  }

  handleChange(evt, arg) {
    debugger;
    switch (arg) {
      case "RegistrationFields":
        this.setState({ name: evt });
        break;
      case "BillingFields":
        this.setState({ billingAddress: evt });
        break;
      case "MailingFields":
        this.setState({ mailingAddress: evt });
        break;
      default:
        break;
    }
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      if (child.type.name === "StepList") {
        return React.cloneElement(child, {
          activeStepIndex: this.state.activeStepIndex,
          handleChange: (evt, arg) => this.handleChange(evt, arg)
        });
      } else if (child.type.name === "ButtonList") {
        return React.cloneElement(child, {
          activeStepIndex: this.state.activeStepIndex,
          totalSteps: this.state.totalSteps,
          handleSubmit: () => this.submitHandler(),
          onNextStep: () => {
            this.setState({
              activeStepIndex: this.state.activeStepIndex + 1
            });
          },
          onPreviousStep: () => {
            this.setState({
              activeStepIndex: this.state.activeStepIndex - 1
            });
          }
        });
      } else {
        return child;
      }
    });

    return <Form>{children}</Form>;
  }
}
