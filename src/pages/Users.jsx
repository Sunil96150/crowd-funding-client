import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users , setUsers] = useState(loadedUsers)

    const handelUserDelete = id =>{
        console.log(id)


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            

            //delete from the data db
            fetch(`http://localhost:5000/users/${id}` ,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log('deleted the user' , data)
                if(data.deletedCount > 0){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers)
                }
            })

            }
          });

    }


    return (
            <div>
                <h2 className="text-5xl">users : {users.length}</h2>
                <div className="overflow-x-auto">
    <table className="table">
        {/* head */}
        <thead>
        <tr>
            <th>Serial</th>
            <th>Name</th>
            <th>Email</th>
            <th>created At</th>
            <th>lastSignInTime
            </th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {/* row 1 */}
        {
            users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastSignInTime
                }</td>
                <td>
                    <button className='btn mr-2'>edit</button>
                    <button  onClick={() => handelUserDelete(user._id) }
                    className='btn'>X</button>
                </td>
            </tr>)
        }
        
        
        </tbody>
    </table>
    </div>
            </div>
    );
};

export default Users;