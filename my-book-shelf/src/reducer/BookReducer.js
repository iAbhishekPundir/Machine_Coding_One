
export const BookReducer = (state, action) => {
    switch (action.type) {
        case "NEW_STATUS":
            return {
                ...state,
                bookData: state.bookData.map((item) =>
                    item.title === action.payload.title
                        ? { ...item, status: action.payload.newStatus }
                        : item
                )
            };
        default:
            return {
                state
            };
    }
}


