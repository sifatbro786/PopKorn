import api from "../../utils/axios";
import { loadPerson } from "../reducers/personSlice";
export { removePerson } from "../reducers/personSlice";

export const asyncLoadPerson = (id) => async (dispatch) => {
    try {
        const detail = await api(`/person/${id}`);
        const externalId = await api(`/person/${id}/external_ids`);
        const combinedCredits = await api(`/person/${id}/combined_credits`);
        const tvCredits = await api(`/person/${id}/tv_credits`);
        const movieCredits = await api(`/person/${id}/movie_credits`);

        let theUltimateDetails = {
            detail: detail.data,
            externalId: externalId.data,
            combinedCredits: combinedCredits.data,
            tvCredits: tvCredits.data,
            movieCredits: movieCredits.data,
        };

        dispatch(loadPerson(theUltimateDetails));
    } catch (err) {
        console.error(err.message);
    }
};
