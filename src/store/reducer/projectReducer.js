const initState = {
    projects: [
        { id: '1', title: 'Galaxiator', date: 'Sep 3 2019' },
        { id: '2', title: 'Holo ASL', date: 'Sep 31 2019' },
        { id: '3', title: 'Dixton', date: 'Sep 23 2019' }
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;