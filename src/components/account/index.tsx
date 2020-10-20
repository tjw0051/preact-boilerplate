import { FunctionalComponent, h } from "preact";
import { connect } from "unistore/preact";
import actions from "../../actions";
import * as style from "./style.css";

interface Props {
    account: any;
}

const Account: FunctionalComponent<Props> = (props: Props) => {
    return (
        <div class="flex-v">
            <h1 class={style.hello}>Hello world!</h1>
        </div>
    );
};

export default connect("account", actions)(Account);
