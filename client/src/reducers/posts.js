//function

export default (posts = [], action) => {
    switch(action.type)
    {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        case '':
            return posts;
        default:
            return posts;

    }
}