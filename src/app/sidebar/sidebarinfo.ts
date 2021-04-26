export class SidebarInfoModel {
    constructor(public profileName: string, public profileImageURL: string, public sections: SidebarSectionModel[]) {
    }
}

export class SidebarSectionModel {
    constructor(public name: string, public route: string, public img: string, public col: number, public row: number) {
    }
}