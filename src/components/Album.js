import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PhotosWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const AlbumTitle = styled.h1`
    text-align: center;
    font-family: "Helvetica", sans-serif;
    font-weight: 400;
`;


class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album: []
        }
    }

    static propTypes = {
        albumId: PropTypes.string.isRequired
    };

    render() {
        const photos = this.state.album.map((photo) => {
           return <div key={photo.id}><img src={photo.thumbnailUrl} alt={photo.title}/></div>
        });
        return (
            <div>
                <AlbumTitle>
                    Album {this.props.albumId}
                </AlbumTitle>
                <PhotosWrapper>
                    {photos}
                </PhotosWrapper>
            </div>
        )
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + this.props.albumId)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    album: data
                })
            })
            .catch(console.log);
    }
}

export default Album;