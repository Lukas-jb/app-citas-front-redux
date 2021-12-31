import actionTypes from "./padecimientos.actionTypes";

const padecimientosLoadStart = () => ({
    type: actionTypes.PADECIMIENTOS_LOAD_START,
});

const padecimientosLoadSuccess = (padecimientos) => ({
    type: actionTypes.PADECIMIENTOS_LOAD_SUCCESS,
    payload: padecimientos,
})

const padecimientosLoadError = (errorMessage) => ({
    type: actionTypes.PADECIMIENTOS_LOAD_ERROR,
    payload: errorMessage,
});

export default {
    padecimientosLoadStart,
    padecimientosLoadSuccess,
    padecimientosLoadError
};