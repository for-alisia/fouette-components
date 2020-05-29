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
  @Prop() logoUrl: string;
  @Prop() linkToHome: string;
  @Prop() panelTitle: string;

  @Event() openDrawer: EventEmitter;

  openHandler = () => {
    this.openDrawer.emit();
  };

  render() {
    return (
      <div class="side-drawer-panel">
        <div class="side-drawer-panel__burger" onClick={this.openHandler}>
          <svg
            width="32"
            height="22"
            viewBox="0 0 32 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H31C31.5523 2 32 1.55228 32 1C32 0.447715 31.5523 0 31 0H1Z"
              fill="#685E59"
            />
            <path
              d="M0 11C0 10.4477 0.447715 10 1 10H31C31.5523 10 32 10.4477 32 11C32 11.5523 31.5523 12 31 12H1C0.447715 12 0 11.5523 0 11Z"
              fill="#685E59"
            />
            <path
              d="M0 21C0 20.4477 0.447715 20 1 20H31C31.5523 20 32 20.4477 32 21C32 21.5523 31.5523 22 31 22H1C0.447715 22 0 21.5523 0 21Z"
              fill="#685E59"
            />
          </svg>
        </div>
        <div class="side-drawer-panel__logo">
          <fouette-logo
            image={this.logoUrl}
            link={this.linkToHome}
          ></fouette-logo>
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
