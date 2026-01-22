
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Search from "./components/search";
import AddContact from "./components/AddContact";
import Filter from "./components/Filter";
import EditContact from "./components/EditContact";
import useContacts from "./hoocks/useContacts";


function App() {
  const {
    contacts,
    addContact,
    setOriginalContacts,
    deleteContact,
    updateContact,
    searchByPhone,
    filterContacts
  } = useContacts();



  return (
    <BrowserRouter  basename="/contact-app/">
      <div className="p-4">
        <Routes>

          <Route path="/" element={
            <div>
              <Link to="/">
                <button className="border rounded px-1">Contact app</button>
              </Link>
              <h2 className="text-2xl font-bold mb-3">All Contacts</h2>
              <Search onSearch={searchByPhone} />
              <Link to="/add">
                <button className="border rounded px-1">Add New</button>
              </Link>
              <Filter onFilterChange={filterContacts} />
              <table cellPadding="5" cellSpacing="5" style={{ width: "90%", border: "2px solid black" }}>
                <thead>
                  <tr>
                    <th style={{ border: "2px solid black" }}>SN</th>
                    <th style={{ border: "2px solid black" }}>First Name</th>
                    <th style={{ border: "2px solid black" }}>Last Name</th>
                    <th style={{ border: "2px solid black" }}>Email</th>
                    <th style={{ border: "2px solid black" }}>Phone</th>
                    <th style={{ border: "2px solid black" }}>Actions</th>
                    <th style={{ border: "2px solid black" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    contacts.map((contact, index) => (
                      <tr key={contact.id}>
                        <td className="p-1" style={{ border: "1px solid black" }}> {index + 1} </td>
                        <td className="p-1" style={{ border: "1px solid black" }}> {contact.firstName} </td>
                        <td className="p-1" style={{ border: "1px solid black" }}> {contact.lastName} </td>
                        <td className="p-1" style={{ border: "1px solid black" }}> {contact.email} </td>
                        <td className="p-1" style={{ border: "1px solid black" }}> {contact.phone} </td>
                        <td className="p-1 text-center" style={{ border: "1px solid black" }}> <Link to={`/edit/${contact.id}`}><button className="border rounded px-1">Edit</button></Link> </td>
                        <td className="p-1 text-center" style={{ border: "1px solid black" }}><button className="border rounded px-1 text-red-600" onClick={() => deleteContact(contact.id)}>Delete</button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>}>
          </Route>

          {/* Add contact page */}
          <Route path="/add" element={<AddContact onAddContact={addContact} onAddNewContact={addContact} />}></Route>
          <Route
            path="/edit/:id"
            element={
              <EditContact
                contacts={contacts}
                onUpdateContact={updateContact}
              />
            }
          />




        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
