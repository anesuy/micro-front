import React, { useContext, useEffect } from "react";
import GitHubContext from "../assets/GitHubContext";
import CircularProgress from "@mui/material/CircularProgress";
import RepoList from "../components/repos/RepoList";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";

export default function User() {
  const { state, dispatch, getDataAndRepos } = useContext(GitHubContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    getDataAndRepos("anesuy");
  }, [dispatch]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = state.user;

  if (state.loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <div className="user-page">
        <div className="img-name">
          <img
            src={avatar_url}
            alt="profile picture. just me, with dark hair and smiling"
          />
          <h1 className="user-name">{name}</h1>
        </div>
        <div className="user-info">
          <p className="user-login">{login}</p>
          
          {hireable && <p>Hireable</p>}
          <p> Bio: {bio}</p>

          <a href={html_url} target="_blank" rel="noreferrer">
            Visit Github Profile
          </a>

          {location && <div>Location: {location}</div>}
          {blog && (
            <a href={websiteUrl} target="_blank" rel="noreferrer">
              {websiteUrl}
            </a>
          )}
          {twitter_username && (
            <div>
              <a
                href={`https://twitter.com/${twitter_username}`}
                target="_blank"
                rel="noreferrer"
              >
                {twitter_username}
              </a>
            </div>
          )}
          <div className="user-info-git">
            <div>
              <FaUsers />
            </div>
            <div>Followers</div>
            <div>{followers}</div>

            <div>
              <FaUserFriends />
            </div>
            <div>Following</div>
            <div>{following}</div>

            <div>
              <FaCodepen />
            </div>
            <div>Public Repos</div>
            <div>{public_repos}</div>

            <div>
              <FaStore />
            </div>
            <div>Public Lists</div>
            <div>{public_gists}</div>
          </div>
        </div>
      </div>

      <RepoList repos={state.repos} />
    </>
  );
}
