const userUpdate = (state, { data }) => {
    const { email, avatar, name } = data;
    return {
        ...state,
        email,
        avatar,
        name,
    };
};
export default userUpdate;
