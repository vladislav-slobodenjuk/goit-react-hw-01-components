import user from '../../data/user.json';
import data from '../../data/statistics.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import { Profile } from '../Profile';
import { Statistics } from '../Statistics';
import { FriendList } from '../FriendList';
import { TransactionHistory } from '../TransactionHistory';

import s from './App.module.scss';

export const App = () => {
  return (
    <div className="App">
      <section className={s.wrapper}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </section>
    </div>
  );
};
