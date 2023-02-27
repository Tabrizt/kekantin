import React from "react";

const List = ({data,handleEdit,handleDelete}) => {
  return(
   <section className="container m-auto">
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              No
            </th>
            <th scope="col" class="px-6 py-3">
              Nama
            </th>
            <th scope="col" class="px-6 py-3">
              No Telp
            </th>
            <th scope="col" class="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(((contact, index) => {
              return(
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index + 1}
                  </th>
                  <td class="px-6 py-4">
                    {contact.name}
                  </td>
                  <td class="px-6 py-4">
                    {contact.telp}
                  </td>
                  <td class="px-6 py-4">
                    <button onClick={() => handleEdit(contact.id)} className="bg-green-500 px-4 py-2 text-white mr-2">Edit</button>
                    <button onClick={() => handleDelete(contact.id)} className="bg-green-500 px-4 py-2 text-white mr-2">Delete</button>
                  </td>
                </tr>
              )
            }))
          }
        </tbody>
      </table>
    </div>
   </section> 
  )
}

export default List;