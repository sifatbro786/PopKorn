import api from "../../utils/axios";
import { loadMovie } from "../reducers/movieSlice";

export { removeMovie } from "../reducers/movieSlice";

export const asyncLoadMovie = (id) => async (dispatch) => {
    try {
        const detail = await api(`/movie/${id}`);
        const externalId = await api(`/movie/${id}/external_ids`);
        const recommendations = await api(`/movie/${id}/recommendations`);
        const similar = await api(`/movie/${id}/similar`);
        const translations = await api(`/movie/${id}/translations`);
        const videos = await api(`/movie/${id}/videos`);
        const watchProviders = await api(`/movie/${id}/watch/providers`);

        let theUltimateDetails = {
            detail: detail.data,
            externalId: externalId.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t) => t?.english_name),
            videos: videos.data.results.find((item) => item.type === "Trailer"),
            watchProviders: watchProviders.data.results.IN,
        };

        dispatch(loadMovie(theUltimateDetails));
    } catch (err) {
        console.error(err.message);
    }
};
