import styles from './UserCard.module.scss';
import { UserStat } from './../UserStat/UserStat';
import { LocalGithubUser } from '../../types';
import { UserTitle } from '../UserTitle';
import { UserInfo } from '../UserInfo';

interface UserCardProps extends LocalGithubUser { }

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img 
      src={props.avatar} 
      alt={props.name} 
      className={styles.avatar}/>
    <UserTitle 
      login={props.login}
      name={props.name}
      created={props.created}/>
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || 'This component has no bio'}
    </p>
    <UserStat repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo 
      location={props.location}
      blog={props.blog}
      twitter={props.twitter}
      company={props.company}
    />
  </div>
);
