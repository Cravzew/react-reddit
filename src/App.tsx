import React, {useEffect, useState} from 'react';
import './main.global.css';
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardLists} from "./shared/CardLists";
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux'
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/store";
import thunk from "redux-thunk";
import {thunkSaveToken} from "./store/token/saveToken";
import {Post} from "./shared/Post";
import {NotFound} from "./shared/NotFound";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
))

function AppComponent() {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    store.dispatch(thunkSaveToken() as any)

    return (
        <Provider store={store}>
            {mounted && (
                <BrowserRouter>
                    <Layout>
                        <Header/>
                        <Content>
                            <Switch>
                                <Route exact path="/posts/:id">
                                    <Post/>
                                </Route>
                                <Route exact path="/posts">
                                    <CardLists/>
                                </Route>
                                <Route exact path="/auth">
                                    <Redirect to="/posts"/>
                                </Route>
                                <Route exact path="/">
                                    <Redirect to="/posts"/>
                                </Route>
                                <Route path="*">
                                    <NotFound/>
                                </Route>
                            </Switch>
                        </Content>
                    </Layout>
                </BrowserRouter>
            )}
        </Provider>
    );
}

export const App = hot(() => <AppComponent/>);