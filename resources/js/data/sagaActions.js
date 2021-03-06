// export const getUserData = () => {
//     return (dispatch) => {
//         dispatch({
//             type: "REQUEST.START",
//             payload: {
//                 name: "userdata",
//             },
//         });
//         axios
//             .get("api/user", { withCredentials: true })
//             .then(({ data }) => {
//                 dispatch({
//                     type: "ACTION.SUCCESS",
//                     payload: {
//                         name: "userdata",
//                     },
//                 });
//                 dispatch({
//                     type: "USER_DATA",
//                     data,
//                 });
//             })
//             .catch((error) => console.log(error));
//     };
// };
