export class People {

    childs = new Set()

    constructor(options) {
        this.id = options.id
        this.name = options.name
        this.age = options.age
        this.childs = options.childs
    }


}