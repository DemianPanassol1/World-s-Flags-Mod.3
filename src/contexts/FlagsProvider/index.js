import { useReducer } from "react";

import { flagsContext, dispatchFlagsContext } from "./context";
import initialContext from "./data";
import reducer from "./reducer";

function FlagsProvider(props) {
    const [flagsState, flagsDispatch] = useReducer(reducer, initialContext);

    return (
        <flagsContext.Provider value={flagsState}>
            <dispatchFlagsContext.Provider value={flagsDispatch}>
                {props.children}
            </dispatchFlagsContext.Provider>
        </flagsContext.Provider>
    );
};

export default FlagsProvider;