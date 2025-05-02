import api from "../../utils/axios";
import { loadTv } from "../reducers/tvSlice";
export { removeTv } from "../reducers/tvSlice";

export const asyncLoadTv = (id) => async (dispatch) => {
    try {
        const detail = await api(`/tv/${id}`);
        const externalId = await api(`/tv/${id}/external_ids`);
        const recommendations = await api(`/tv/${id}/recommendations`);
        const similar = await api(`/tv/${id}/similar`);
        const translations = await api(`/tv/${id}/translations`);
        const videos = await api(`/tv/${id}/videos`);
        const watchProviders = await api(`/tv/${id}/watch/providers`);

        let theUltimateDetails = {
            detail: detail.data,
            externalId: externalId.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t) => t?.english_name),
            videos: videos.data.results.find((item) => item.type === "Trailer"),
            watchProviders: watchProviders.data.results.IN,
        };

        dispatch(loadTv(theUltimateDetails));
    } catch (err) {
        console.error(err.message);
    }
};
