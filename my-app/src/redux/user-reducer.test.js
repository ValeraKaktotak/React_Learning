import usersReducer, {preloaderActionCreator} from "./users-reducer";

const state = {
    users: [],
    usersCountOnPage: 10,
    usersCurrentPage: 1,
    usersCount: 0,
    isLoader: false,
    isFollowingProcess: []
}

test('test preloader', () => {

    const action = preloaderActionCreator(true);

    const reducer = usersReducer(state, action);

    expect(reducer.isLoader).toBe(true);
});
