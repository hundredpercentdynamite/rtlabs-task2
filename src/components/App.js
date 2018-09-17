import React, {Component} from "react";
import {Switch, Route} from "react-router";
import {BrowserRouter as Router} from 'react-router-dom';
import AlbumList from "./AlbumList";
import Album from "./Album";


class App extends Component {
    constructor() {
        super();

        this.state = {
            albumList: [],
            albumId: "1"
        }
    }

    render() {
        const albumId = this.state.albumId;
        return (
            <Router>
                <Switch>
                    <Route exact path={"/"}
                           render={() => <AlbumList albumList={this.state.albumList}
                                                    handleClickOnLink={this.handleClickOnLink}
                                        />}
                    />
                    {this.makePathToAlbum(albumId)}
                </Switch>
            </Router>
        )
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    albumList: data
                })
            })
            .catch(console.log)
    }

    handleClickOnLink = (albumId) => {
        this.setState({
            albumId: albumId
        })
    };

    makePathToAlbum = (albumId) => {
        const pathnameId = window.location.pathname.replace(/\D+/g,"");//вытаскиваем айди из pathname

        if (albumId === pathnameId) {
            return <Route path={"/album-" + albumId} render={() => <Album albumId={albumId}/>}/>
        } else {
            return <Route path={"/album-" + pathnameId} render={() => <Album albumId={pathnameId}/>}/>
        }
    }
}

export default App;