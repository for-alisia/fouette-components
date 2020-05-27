import { Component, h, Event, EventEmitter } from "@stencil/core/internal";

@Component({
  tag: "fouette-close-button",
  styleUrl: "./close-button.scss",
  shadow: true,
})
export class CloseButton {
  @Event() close: EventEmitter;

  closeHandler = () => {
    this.close.emit();
  };

  render() {
    return <button onClick={this.closeHandler}></button>;
  }
}
