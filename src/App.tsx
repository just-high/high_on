import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import {Test} from "./Test";
import {css} from "@emotion/react";
import {BgStars} from "./components/bg/bg";
import {NavHeader} from "./components/stucture/NavHeader";
import {Title} from "./components/atom/Typography";
import {Main} from "./components/stucture/Main";
function App() {
    return (<Router>
            <div className="App" css={css`position: relative`}>
                <NavHeader/>
                                    <Switch>
                        <Route exact path={'/hello'} component={Main} />
                    </Switch>
                                <BgStars>
                </BgStars>
            </div>
        </Router>
    );
}

export default App;
