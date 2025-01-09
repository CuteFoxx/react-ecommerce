import {useParams} from "react-router";
import Headphones from "./Headphones.tsx";
import Earphones from "./Earphones.tsx";
import Speakers from "./Speakers.tsx";
import Error from "../components/Error/Error.tsx";

const Category = () => {
    const {category} = useParams()

    switch (category) {
        case 'headphones':
            return <Headphones/>
        case 'earphones':
            return <Earphones/>
        case 'speakers':
            return <Speakers/>
        default:
            return <Error/>
    }

};

export default Category;