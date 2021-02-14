const userUpdate = (state, { name, email, id }) => {
    console.log({ name, email, id });
    return {
        ...state,
        name,
        email,
        id,
    };
};
export default userUpdate;
