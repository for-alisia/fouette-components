import { Component, h, Prop } from "@stencil/core/internal";

@Component({
  tag: "fouette-card-simple",
  styleUrl: "./card-simple.scss",
  shadow: true,
})
export class CardSimple {
  @Prop() withPadding: string;

  render() {
    return (
      <div class={this.withPadding ? "fouette-card--padding" : null}>
        <slot />
      </div>
    );
  }
}
