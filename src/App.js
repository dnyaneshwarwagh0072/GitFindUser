import Repolist from './components/Repolist';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Search from './components/Search';
import { github } from './utils';
import { useEffect, useState } from 'react';


function App() {
  const [detail, setDetail] = useState({});
  const [username, setUsername] = useState("dnyaneshwarwagh0072");
  const [repoList, setRepoList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [visibleComponent, setVisibleComponent] = useState(2);

  useEffect(_ => {
    setDetail({});
    (async _ => {
      const response = await github.get(`${username}`);
      setDetail(response.data);
    })();
  }, [username]);

  useEffect(_ => {
    setRepoList([]);
    (async _ => {
      const response = await github.get(`${username} /repos`);
      setRepoList(response.data);
    })();
  }, [username]);

  useEffect(_ => {
    setFollowerList([]);
    (async _ => {
      const response = await github.get(`${username} /followers`);
      setFollowerList(response.data);
    })();
  }, [username]);

  useEffect(_ => {
    setFollowingList([]);
    (async _ => {
      const response = await github.get(`${username} /following`);
      setFollowingList(response.data);
    })();
  }, [username]);

  const searchUsername = (enteredUserName) => {
    setUsername(enteredUserName);
  }

  return (
    <main>
      <Search searchUsername={searchUsername} />
      <Detail data={detail} changeVisibleComponent={setVisibleComponent} />
      {
        visibleComponent === 1 ? (
          <followerList data={followerList} />
        ) : (
          visibleComponent === 2 ? (
            <repoList data={repoList} />
          ) : (
            <followingList data={followingList} />
          )
        )
      }
      <Repolist data={repoList} />
      <Footer />
    </main>
  );
}

export default App;
