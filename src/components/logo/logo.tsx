import { Component, h, Prop, getAssetPath } from "@stencil/core/internal";

@Component({
  tag: "fouette-logo",
  styleUrl: "./logo.scss",
  shadow: true,
  assetsDirs: ["assets"],
})
export class Logo {
  @Prop() image = "logo.svg";
  @Prop() link: string;

  render() {
    return (
      <a href={this.link}>
        <figure>
          <img src={getAssetPath(`./assets/${this.image}`)} />
        </figure>
      </a>
    );
  }
}
