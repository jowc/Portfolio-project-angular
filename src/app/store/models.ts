export interface projectModel {
    link: string,
    img: string,
    stacks: string[],
    description: string,
}

export interface galleryModel {
    url: string
}

export class cForm {
    constructor(
        private fullName: string,
        private email: string,
        private message: string
    ) { }
}