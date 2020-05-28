import { Component, h, Prop } from "@stencil/core/internal";

@Component({
  tag: "fouette-avatar",
  styleUrl: "./avatar.scss",
  shadow: true,
})
export class Avatar {
  @Prop({ reflectToAttr: true }) imgUrl: string;
  @Prop({ reflectToAttr: true }) imgUrl2x: string;
  @Prop() avatarLink: string;
  @Prop() avatarType: string;
  @Prop() imgAlt: string;

  render() {
    const classes = ["fouette-avatar"];

    if (this.avatarType === "backdrop") {
      classes.push("fouette-avatar--backdrop");
    }

    let imgContent = this.imgUrl2x
      ? `${this.imgUrl} 1x, ${this.imgUrl2x} 2x`
      : `${this.imgUrl} 1x`;

    return (
      <a href={this.avatarLink}>
        <picture class={classes.join(" ")}>
          <div>
            <img srcSet={imgContent} src={this.imgUrl} alt={this.imgAlt} />
          </div>
        </picture>
      </a>
    );
  }
}
