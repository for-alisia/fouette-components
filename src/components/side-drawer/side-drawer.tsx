import { Component, h, Prop, getAssetPath } from "@stencil/core/internal";

@Component({
  tag: "fouette-side-drawer",
  styleUrl: "./side-drawer.scss",
  shadow: true,
  assetsDirs: ["assets"],
})
export class SideDrawer {
  @Prop({ reflectToAttr: true }) header: string;
  @Prop({ reflectToAttr: true }) footer: string;
  @Prop() icon: string;
  @Prop({ reflectToAttr: true, mutable: true }) open: boolean;

  onCloseDrawer = () => {
    this.open = false;
  };

  render() {
    return (
      <aside>
        <header>
          <h1>{this.header}</h1>
          <button onClick={this.onCloseDrawer}></button>
        </header>
        <main>
          <slot />
        </main>
        <footer>
          <p>
            <img src={getAssetPath(`./assets/${this.icon}`)} />
            <a href={`tel:${this.footer}`}>{this.footer}</a>
          </p>
        </footer>
      </aside>
    );
  }
}
