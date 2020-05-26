import { Component, h, Prop, getAssetPath } from "@stencil/core/internal";

@Component({
  tag: "fouette-logo",
  styleUrl: "./logo.scss",
  shadow: true,
  assetsDirs: ["assets"],
})
export class Logo {
  @Prop() image = "logo.svg";

  render() {
    return (
      <div>
        <figure>
          <img src={getAssetPath(`./assets/${this.image}`)} />
        </figure>
      </div>
    );
  }
}
