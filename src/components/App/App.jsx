import user from 'data/user';
import data from 'data/statistics';
import friends from 'data/friends';
import transactions from 'data/transactions';

import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';

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
