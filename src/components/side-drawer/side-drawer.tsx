import { Component, h, Prop, Listen } from "@stencil/core/internal";

@Component({
  tag: "fouette-side-drawer",
  styleUrl: "./side-drawer.scss",
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflectToAttr: true }) header: string;
  @Prop({ reflectToAttr: true }) footer: string;
  @Prop({ reflectToAttr: true }) phone: string;
  @Prop({ reflectToAttr: true }) email: string;
  @Prop({ reflectToAttr: true }) extra: string;
  @Prop() linkToHome: string;
  @Prop({ reflectToAttr: true }) logoUrl: string;
  @Prop({ reflectToAttr: true, mutable: true }) opened: boolean;

  @Listen("close")
  closeHandler() {
    this.onCloseDrawer();
  }

  @Listen("openDrawer", { target: "body" })
  openHandler() {
    this.opened = true;
  }

  onCloseDrawer = () => {
    this.opened = false;
  };

  render() {
    return [
      <div class="backdrop" onClick={this.onCloseDrawer}></div>,
      <aside>
        <header>
          <fouette-logo image={this.logoUrl} link={this.linkToHome} />
          <fouette-close-button close={this.closeHandler} />
        </header>
        <main>
          <slot />
        </main>
        <footer>
          {this.phone && (
            <p>
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.8437 0H1.15627C0.599127 0 0.143127 0.455571 0.143127 1.01314V13.9864C0.143127 14.544 0.599127 15 1.15627 15H7.8437C8.40084 15 8.85684 14.5449 8.85684 13.9869V1.01314C8.85684 0.455571 8.40084 0 7.8437 0ZM3.43027 0.730286H5.5697C5.63741 0.730286 5.69227 0.785143 5.69227 0.853286C5.69227 0.921 5.63741 0.975857 5.5697 0.975857H3.43027C3.36256 0.975857 3.3077 0.921 3.3077 0.853286C3.3077 0.785143 3.36256 0.730286 3.43027 0.730286ZM4.49998 14.4934C4.22013 14.4934 3.99341 14.2667 3.99341 13.9864C3.99341 13.7061 4.22013 13.4799 4.49998 13.4799C4.77984 13.4799 5.00656 13.7061 5.00656 13.9864C5.00656 14.2667 4.77984 14.4934 4.49998 14.4934ZM8.15184 13.125H0.848127V1.60671H8.15184V13.125Z"
                  fill="#3C3735"
                />
              </svg>
              <a href={`tel:${this.phone}`}>{this.phone}</a>
            </p>
          )}
          {this.email && (
            <p>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12H9V10.8H6C3.396 10.8 1.2 8.604 1.2 6C1.2 3.396 3.396 1.2 6 1.2C8.604 1.2 10.8 3.396 10.8 6V6.858C10.8 7.332 10.374 7.8 9.9 7.8C9.426 7.8 9 7.332 9 6.858V6C9 4.344 7.656 3 6 3C4.344 3 3 4.344 3 6C3 7.656 4.344 9 6 9C6.828 9 7.584 8.664 8.124 8.118C8.514 8.652 9.186 9 9.9 9C11.082 9 12 8.04 12 6.858V6C12 2.688 9.312 0 6 0ZM6 7.8C5.004 7.8 4.2 6.996 4.2 6C4.2 5.004 5.004 4.2 6 4.2C6.996 4.2 7.8 5.004 7.8 6C7.8 6.996 6.996 7.8 6 7.8Z"
                  fill="#3C3735"
                />
              </svg>
              <a href={`mailto:${this.email}`}>{this.email}</a>
            </p>
          )}
          {this.extra && <p>{this.extra}</p>}
        </footer>
      </aside>,
    ];
  }
}
