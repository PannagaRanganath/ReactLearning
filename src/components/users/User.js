import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const User = ({match}) => {
    const githubContext = useContext(GithubContext);

    const {user, loading, getUser} = githubContext;

    useEffect (() => {
        getUser('bradtraversy');
    }, []);

    const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
    } = user;

    return (
        <Fragment>{name}</Fragment>
    );
}

export default User;
