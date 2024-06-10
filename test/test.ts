export enum CardId {
    DEVICE = 'DEVICE',
    BASE_DEVICR = 'BASE_DEVICR', 
}
export enum Card2Id {
    DEVICE2 = 'DEVICE2',
}

export function register() {
    addCard([
        {
            rows: 2,
            cols: 4,
            scene: []
        },
    ])
}
function addCard(data: any) {

}