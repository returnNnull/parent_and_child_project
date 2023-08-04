import {ButtonStyle} from "@/components/inputs/buttons/ButtonStyle";

export class ButtonStyleFactory {


    static #primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color")
    static #white = getComputedStyle(document.documentElement).getPropertyValue("--vt-c-white")
    static #black = getComputedStyle(document.documentElement).getPropertyValue("--vt-c-black")
    static #transparent = getComputedStyle(document.documentElement).getPropertyValue("--transparent")

    static createPrimary() {

        return new ButtonStyle({
                backgroundColor: this.#primaryColor,
                borderColor: this.#primaryColor,
                textColor: this.#white,
                iconColor: this.#white,
                radius: "100px"
            }
        )
    }

    static createSecondary() {
        return new ButtonStyle({
                backgroundColor: this.#transparent,
                borderColor: this.#primaryColor,
                textColor: this.#primaryColor,
                iconColor: this.#primaryColor,
                radius: "100px"
            }
        )
    }

    static createTextButton(){
        return new ButtonStyle({
            backgroundColor : this.#transparent,
            textColor : this.#primaryColor
        })
    }

}