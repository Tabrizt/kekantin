import axios from "axios";
import React, { useEffect, useState } from "react";
import { uid } from "uid";
import List from "./list";

const Form = () => {

  const[contact, setContact] = useState([]);

  const[fromData, setFromData] = useState(
    {
      name: "",
      telp: "",
    }
  );

  const[isUpdate, setIsUpdate] = useState({id:null, status:false});

  useEffect(() => {
    axios.get('http://localhost:3000/contact')
    .then((res) => {
      console.log(res.data )
      setContact(res.data)
    })
  })

  function handleChange (event) {
    let data = {...fromData};
    data[event.target.name] = event.target.value;
    setFromData(data);
  };

  function handleEdit (id) {
    let data = [...contact];
    let foundData = data.find((contact) => contact.id === id);
    setFromData({name: foundData.name, telp:foundData.telp})
    setIsUpdate({id:id, status: true})
  }

  function handleDelete(id){
    let data = [...contact];
    let filteredData = data.filter((contact) => contact.id !== id);

    axios.delete(`http://localhost:3000/contact/${id}`)
    .then((res) => {
      alert("data berhasil dihapus")
    })

    setContact(filteredData)
  }

  function handleSubmit (e){
    e.preventDefault();
    alert("oke")
    let data = [...contact];

    if(fromData.name === ""){
      return false;
    }
    if (fromData.telp === ""){
      return false;
    }

    if(isUpdate.status){
      data.forEach((contact) => {
        if(contact.id === isUpdate.id){
          contact.name = fromData.name;
          contact.telp = fromData.telp;
        }
      });

      axios.put(`http://localhost:3000/contact/${isUpdate.id}`)
      .then((res) => {
        alert("berhasil mengedit data");
      })

    }else{
      let newData = {id: uid(), name: fromData.name, telp: fromData.telp};
      data.push(newData);

      axios.post('http://localhost:3000/contact', newData)
      .then((res) => {
        alert("berhasil menyimpan data")
      })
    }

    // menambahkan contact
    setContact(data);
    setFromData({name:"", telp:""});
    setIsUpdate({id:null, status:false});
  }

  console.log(contact)

  return(
   <section className="">
    <div className="container m-auto">
      <form onSubmit={handleSubmit} className="py-10">
        <div class="mb-6">
          <label for="nama" class="block mb-2 text-sm font-medium text-gray-900 ">Nama</label>
          <input type="text" id="nama" name="name" value={fromData.name} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div> 
        <div class="mb-6">
          <label for="telp" class="block mb-2 text-sm font-medium text-gray-900 ">No. Telp</label>
          <input type="text" id="nama" name="telp" value={fromData.telp} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div> 
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
      </form>
    </div>

    <List handleEdit={handleEdit} handleDelete={handleDelete} data={contact}/>
   </section> 
  )
}

export default Form;