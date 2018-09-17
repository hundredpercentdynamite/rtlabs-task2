import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const AlbumListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
`;

const LinkWrapper = styled.div`
    flex-basis: 22%;
    box-sizing: border-box;
    margin-bottom: 30px;
    background-color: #ccc;
    border-radius: 5px;
    font-family: "Helvetica", sans-serif;
    a {
        display: block;
        box-sizing: border-box;
        padding: 10px;
        height: 100%;
        color: #000;
        text-decoration: none;
        text-transform: capitalize;
    }
`;


function AlbumList(props) {
    const albums = props.albumList.map((album) => {
        return <LinkWrapper key={album.id} onClick={() => props.handleClickOnLink(album.id.toString())}>
            <Link to={"/album-" + album.id}>{album.title}</Link>
        </LinkWrapper>
    });

    return (
        <AlbumListWrapper>
            {albums}
        </AlbumListWrapper>
    )
}

AlbumList.propTypes = {
    albumList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string
        }).isRequired
    )
};

export default AlbumList;
