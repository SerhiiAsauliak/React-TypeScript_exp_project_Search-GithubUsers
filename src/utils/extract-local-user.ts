import { GithubUser, LocalGithubUser } from '../types';

export const extractLocalUser = (user: GithubUser): LocalGithubUser => ({
    login: user.login,
    avatar: user.avatar_url,
    name: user.name,
    blog: user.blog,
    company: user.company,
    repos: user.public_repos,
    bio: user.bio,
    location: user.location,
    twitter: user.twitter_username,
    followers: user.followers,
    following: user.following,
    created: user.created_at,
})
