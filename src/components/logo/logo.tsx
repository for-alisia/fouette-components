import { Component, h, Prop } from "@stencil/core/internal";

@Component({
  tag: "fouette-logo",
  styleUrl: "./logo.scss",
  shadow: true,
  assetsDirs: ["assets"],
})
export class Logo {
  @Prop() image: string;
  @Prop() link: string;

  render() {
    return (
      <a href={this.link}>
        <figure>
          <img src={this.image} />
        </figure>
      </a>
    );
  }
}
