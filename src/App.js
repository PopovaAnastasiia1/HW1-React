import React from "react";
import Button from "./components/Button.js";
import Modal from "./components/Modal.js";
import "./App.scss";

export default class App extends React.Component {
  state = {
    isFirstModalOpen: false,
    isSecondModalOpen: false,
  };

  openFirstModal = () => {
    this.setState({ isFirstModalOpen: true });
  };

  openSecondModal = () => {
    this.setState({ isSecondModalOpen: true });
  };

  closeModal = () => {
    this.setState({
      isFirstModalOpen: false,
      isSecondModalOpen: false,
    });
  };

  handleOutsideClick = (event) => {
    if (event.currentTarget === event.target) {
      this.setState({
        isFirstModalOpen: false,
        isSecondModalOpen: false,
      });
    }
  };

  render() {
    return (
      <div className="btn-wrapper">
        <Button
          optionalСlassName="btn-first"
          backgroundColor="darkblue"
          text="Open first modal"
          onClick={this.openFirstModal}
        />
        <Button
          optionalСlassName="btn-second"
          backgroundColor="blue"
          text="Open second modal"
          onClick={this.openSecondModal}
        />

        {this.state.isFirstModalOpen && (
          <Modal
            header="Do you want to delete this file?"
            closeButton={true}
            closeModal={this.closeModal}
            handleOutsideClick={this.handleOutsideClick}
            text="Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?"
            actions={
              <div className="button-container">
                <Button optionalСlassName="btn-modal"  onClick={this.closeModal} text="Ok" />
                <Button
                  optionalСlassName="btn-modal"
                  onClick={this.closeModal}
                  text="Cancel"
                />
              </div>
            }
          />
        )}

        {this.state.isSecondModalOpen && (
          <Modal
            header="Do you want to send this file?"
            closeButton={true}
            closeModal={this.closeModal}
            handleOutsideClick={this.handleOutsideClick}
            text="Select where the file will be sent."
            actions={
              <div className="button-container">
                <Button
                  optionalСlassName="btn-modal"
                  backgroundColor="lightsalmon"
                  onClick={this.closeModal}
                  text="Email"
                />
                <Button
                  optionalСlassName="btn-modal"
                  backgroundColor="salmon"
                  onClick={this.closeModal}
                  text="GitHub"
                />
                <Button
                  optionalСlassName="btn-modal"
                  backgroundColor="lightcoral"
                  onClick={this.closeModal}
                  text="GitLab"
                />
              </div>
            }
          />
        )}
      </div>
    );
  }
}
