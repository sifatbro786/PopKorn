import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncLoadMovie } from "../store/actions/movieAction";

export default function MovieDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(asyncLoadMovie(id));
    }, [dispatch, id]);

    return <div>MovieDetails</div>;
}
