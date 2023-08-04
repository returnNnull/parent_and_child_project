import {Icons} from "../../../../public/ic/Icons";

export class ButtonStyle {

    constructor(options) {
        this.backgroundColor = options.backgroundColor || "#ffffff"
        this.borderColor = options.borderColor || "rgba(0,0,0,0)"
        this.startIcon = options.startIcon || Icons.DEFAULT
        this.endIcon = options.endIcon || Icons.DEFAULT
        this.radius = options.radius || 0.0
        this.textColor = options.textColor || "#000000"
        this.iconColor = options.iconColor || "#000000"
    }
}