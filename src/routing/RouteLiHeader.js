import RouteItem from "./RouteItem";
import { Route } from "react-router-dom";
import Header from "../components/organisms/Header";

export default class RouteLiHeader extends RouteItem {
    constructor(name, linkTo, page) {
        super(name, linkTo, page);
        this.type = "li";
        this.header = true;
    }

    createLiHeader(linkTo, page, name) {
        return <Route key="" path={`/${linkTo}`} element={
            <>
                <button>123</button>
                <Header liProp={name} />
                {page}
            </>
        } />
    }
}

