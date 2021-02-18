const userUpdate = (state, { email, avatar, name }) => {
    console.log({ email, avatar, name });
    return {
        ...state,
        email,
        avatar,
        name,
    };
};
export default userUpdate;
