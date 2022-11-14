export type LocalGithubUser = {
    login: string,
    id: number,
    avatar: string,
    name: string,
    company: string,
    email: string,
    bio: string,
    twitter: string,
    followers: number,
    following: number,
    created: number,
}

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    email: string,
    bio: string,
    twitter_username: string,
    followers: number,
    following: number,
    created_at: number,
}

export type GithubError = {
    message: string,
    documentation_url: string 
}
