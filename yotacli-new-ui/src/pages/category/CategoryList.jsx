import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  EditIcon } from '../../components/icons/Icons';
import { fetchAllTechnology } from '../../features/technology/technologyAction';
import Card from '../../components/Card/Card';
import styles from './AddCategory.css';
import AddCategory from './AddCategory';
import { useParams } from 'react-router-dom';
import { getAllCategoriesUnderTechnologyById } from '../../features/category/categoryAction';

function CategoryList() {
    const dispatch = useDispatch();
  const {userData} = useSelector(state => state.auth);
  const {technologies} = useSelector(state => state.technologies);
  const {categories} = useSelector(state => state.categories);
 
  const {id}=useParams("id");

  console.log(id)

  useEffect(() => {
    if (userData.token){
       dispatch(fetchAllTechnology());
       }
}, [userData]);

useEffect(() => {
 if (userData.token){
     dispatch(getAllCategoriesUnderTechnologyById((id)));
     }
}, [userData]);

// useEffect(()=>{
//   let techs=technologies?.filter((tech)=> tech.id===id);
//        console.log('techs: ',techs);
//       //  setCategories(techs?.categories);
//       //  console.log("Technologies List",technologies);
// },[technologies]);

  return (
    <div>
      <Card className="users-list">
        <div className="card-header">
          <h4>Category List</h4>{" "}
          <AddCategory technologyId={id}/>
        </div>{" "}
        <div className="users-list1">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Category Name</th>
                <th scope="col">QuestionCount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{category.name}</td>
                  <td>{category.questionCountUnderCategory}</td>
                  <td>
                    <div className={styles["action-buttons"]}>
                      
                      <EditIcon />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export default CategoryList;