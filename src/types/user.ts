export type LocalGithubUser = {
    login: string,
    avatar: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    repos: number,
    bio: string,
    twitter: string,
    followers: number,
    following: number,
    created: string,
}

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    public_repos: number
    location: string,
    blog: string,
    bio: string,
    twitter_username: string,
    followers: number,
    following: number,
    created_at: string,
}

export type GithubError = {
    message: string,
    documentation_url: string 
}
