import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import axios from 'axios';

function Home() {
  let [newdata, setNewData] = useState([]);

  // const [isChecked, setIsChecked] = useState(false);



  const [masterChecked, setMasterChecked] = useState(false);
 


  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then(
      Response => {
        const array = Response.data.data;
        setNewData(array)
      }
    ).catch(e => {
      console.log("Error", e)
    })
  }, []);


  const onMasterCheck = (e) => {
    let tempList = newdata;
    console.log("check status", e.target.checked)
    tempList.map((user) => (user.selected = e.target.checked));
    setMasterChecked(e.target.checked);
    setNewData(tempList)
  }

  const onItemCheck = (e, item) => {
    let tempList = newdata;
    let updatedUser = tempList.map((user) => {
      // console.log("user id",user.id)
      // console.log("item id",item.id)
      if (user.id === item.id) {
        //   console.log("user id",user.id)
        // console.log("item id",item.id)
        user.selected = e.target.checked;
        // console.log(user.selected)
      }
      return user;
    });



    console.log("user1 :", updatedUser)
    //To Control Master Checkbox State
    const totalItems = newdata.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;
    setMasterChecked(totalItems === totalCheckedItems);
    setNewData(updatedUser)
  }

  return (
    <div>
      <h1>Data which is get by API</h1>
      <table id="Table" >
        <thead>
          <th><input type="checkbox"
            checked={masterChecked}
            id="mastercheck"
            onChange={(e) => onMasterCheck(e)}
          /></th>
          <th>Avatar</th>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>

        </thead>
        <tbody>
          {newdata.map((value) => {
            return (
              <>

                <tr>

                  <td><input type="checkbox"
                    checked={value.selected}
                    id={`rowcheck${value.id}`}
                    onChange={(e) => onItemCheck(e, value)}
                  /></td>
                  <td><div id='image'><img src={value.avatar} alt="avatar" /></div></td>
                  <td>{value.id}</td>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>{value.email}</td>


                </tr>

              </>
            )
          })}
        </tbody>
      </table>

















    </div>
  )
}

export default Home
