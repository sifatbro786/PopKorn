import api from "../../utils/axios";

export { removeMovie } from "../reducers/movieSlice";

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
    try {
        const detail = await api(`/movie/${id}`);
        const externalId = await api(`/movie/${id}/external_ids`);
        const recommendations = await api(`/movie/${id}/recommendations`);
        const similar = await api(`/movie/${id}/similar`);
        const videos = await api(`/movie/${id}/videos`);
        const watchProviders = await api(`/movie/${id}/watch/providers`);

        let theUltimateDetails = {
            detail: detail.data,
            externalId: externalId.data,
            recommendations: recommendations.data,
            similar: similar.data,
            videos: videos.data,
            watchProviders: watchProviders.data,
        };

        console.log(theUltimateDetails);
    } catch (err) {
        console.error(err.message);
    }
};
