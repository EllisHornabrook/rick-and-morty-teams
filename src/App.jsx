import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Routes from "./containers/Routes/Routes";
import firebase, { provider } from "./firebase";
import Header from "./components/Header/Header";
import Sidebar from './containers/Sidebar/Sidebar';
import "./data/fa-library";

function App() {
  const [characters, setCharacters] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
    .then((res) => res.json())
    .then((data) => {
      setCharacters(data.results);
  }).catch(reject => console.log(reject));
  }, []);

  const searchFetch = (searchString) => {
    fetch((`https://rickandmortyapi.com/api/character/?name=${searchString}`))
    .then(resp => resp.json())
    .then((data) => {
      setCharacters(data.results);
  }).catch(reject => console.log(reject));
  };

  const filterFetch = (filterString) => {
    fetch((`https://rickandmortyapi.com/api/character/?${filterString}`))
    .then(resp => resp.json())
    .then((data) => {
      setCharacters(data.results);
  }).catch(reject => console.log(reject));
  };

  const signIn = () => {
    firebase.auth().signInWithPopup(provider);
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => { 
    getUser();
  })

  return (
    <>
      <section className={styles.header}>
        <Header user={user} signIn={signIn} signOut={signOut} />
      </section>
      <section className={styles.sidebar}>
        <Sidebar searchFetch={searchFetch} filterFetch={filterFetch} user={user} />
      </section>
      <section className={styles.routes}>
        <Routes characters={characters} user={user} />
      </section>
    </>
  );
};

export default App;
