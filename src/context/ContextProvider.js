import React, { useState, useEffect } from "react";
import axios from "axios";
import Fcontacts from "../Components/Fcontacts";
import Contacts from "../Components/Contacts";

const ContextProvider = () => {
  const [contacts, setContacts] = useState([]);
  const [fcontacts, setFcontacts] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/YatharthVyas/93b13e4fd8687ecb6d692fedf852299a/raw/e9515185ca107d05dad1032c60917e2f511a805c/contact.json"
      )
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addFav = (id) => {
    if (!fcontacts.includes(contacts.find((contact) => contact.id === id))) {
      setFcontacts([
        ...fcontacts,
        contacts.find((contact) => contact.id === id),
      ]);
      setIds([...ids, id]);
    } else removeFav(id);
  };

  const removeFav = (id) => {
    setFcontacts(fcontacts.filter((contact) => contact.id !== id));
    setIds(ids.filter((i) => i !== id));
  };

  return (
    <div>
      <Fcontacts value={fcontacts} button={removeFav} />
      <Contacts value={contacts} fav={ids} button={addFav} />
    </div>
  );
};

export default ContextProvider;
