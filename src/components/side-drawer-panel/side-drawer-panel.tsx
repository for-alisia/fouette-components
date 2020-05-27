import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
} from "@stencil/core/internal";

@Component({
  tag: "fouette-side-drawer-panel",
  styleUrl: "./side-drawer-panel.scss",
  shadow: true,
})
export class SideDrawerPanel {
  @Prop() panelTitle: string;

  @Event() openDrawer: EventEmitter;

  openHandler = () => {
    this.openDrawer.emit();
  };

  render() {
    return (
      <div class="side-drawer-panel">
        <div class="side-drawer-panel__logo">
          <fouette-logo></fouette-logo>
        </div>
        <div class="side-drawer-panel__title" onClick={this.openHandler}>
          <span>{this.panelTitle}</span>
          <svg
            width="13"
            height="20"
            viewBox="0 0 13 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 0L0 1.364L10 10L0 19L2 20L13 10L2 0Z" fill="#A79C8E" />
          </svg>
        </div>
      </div>
    );
  }
}
