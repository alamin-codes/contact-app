import { useEffect, useState } from "react";

const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [originalContacts, setOriginalContacts] = useState([]);
  console.log(originalContacts);

  useEffect(() => {
    fetch("http://localhost:3001/contacts")
      .then(res => res.json())
      .then(data => {
        setContacts(data);
        setOriginalContacts(data);
      });
  }, []);

  const addContact = (contact) => {
    setContacts(prev => [...prev, contact]);
    setOriginalContacts(prev => [...prev, contact]);
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(c => c.id !== id));
    setOriginalContacts(prev => prev.filter(c => c.id !== id));
  };

  const updateContact = async (updatedContact) => {
  const res = await fetch(
    `http://localhost:3001/contacts/${updatedContact.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedContact)
    }
  );

  const data = await res.json();

  setContacts(prev =>
    prev.map(c => String(c.id) === String(data.id) ? data : c)
  );

  setOriginalContacts(prev =>
    prev.map(c => String(c.id) === String(data.id) ? data : c)
  );
};


  const searchByPhone = (value) => {
    if (!value) {
      setContacts(originalContacts);
      return;
    }

    setContacts(
      originalContacts.filter(c => c.phone.includes(value))
    );
  };

  const filterContacts = (type) => {
    let sorted = [...originalContacts];

    if (type === "fname")
      sorted.sort((a, b) => a.firstName.localeCompare(b.firstName));
    if (type === "lname")
      sorted.sort((a, b) => a.lastName.localeCompare(b.lastName));
    if (type === "oldest")
      sorted.sort((a, b) => a.id - b.id);

    setContacts(sorted);
  };

  return {
    contacts,
    setContacts,
    setOriginalContacts,
    addContact,
    deleteContact,
    updateContact,
    searchByPhone,
    filterContacts
  };
};

export default useContacts;
