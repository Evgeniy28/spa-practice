const initialState = {
    items: [
        {
            id: 1,
            name: 'Rihanna - Diamonds',
            youtube: 'lWA2pjMjpBs'
        },
        {
            id: 2,
            name: 'Eminem - Love The Way You Lie ft. Rihanna',
            youtube: 'uelHwf8o7_U'
        },
        {
            id: 3,
            name: 'Eminem - Not Afraid',
            youtube: 'j5-yKhDd64s'
        },
        {
            id: 4,
            name: 'Red Hot Chili Peppers - Californication',
            youtube: 'YlUKcNNmywk'
        },
        {
            id: 5,
            name: 'Малышарики - Засоня [67 серия]',
            youtube: 'Z7b9o-Z_twc'
        }
    ]
};

function listReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

const ListReducer = {
    list: listReducer
};

export default ListReducer;
