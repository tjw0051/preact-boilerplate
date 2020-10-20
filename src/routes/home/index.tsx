import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";
import { connect } from "unistore/preact";
import actions from "../../actions";
import * as style from "./style.css";
import Account from "../../components/account";
import { useEffect } from "preact/hooks";
import { getURLParams } from "../../utils/urlParams";

interface Props {
    loadURLParams: any;
}

const Home: FunctionalComponent<Props> = (props: Props) => {
    useEffect(() => {
        props.loadURLParams(getURLParams());
    }, []);

    return (
        <div class={style.home}>
            <Router>
                <Route path="account" component={Account} default />
            </Router>
        </div>
    );
};

export default connect("", actions)(Home);
