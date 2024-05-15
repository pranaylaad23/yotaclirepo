import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditIcon } from '../../components/icons/Icons';
import { fetchAllTechnology } from '../../features/technology/technologyAction';
import Card from '../../components/Card/Card';
import styles from './AddCategory.css';
import AddCategory from './AddCategory';
import { useParams } from 'react-router-dom';
import { getAllCategoriesUnderTechnologyById } from '../../features/category/categoryAction';

function CategoryList() {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.auth);
  const { technologies } = useSelector(state => state.technologies);
  const { categories } = useSelector(state => state.categories);

  const { id } = useParams("id");

  console.log(id)

  useEffect(() => {
    if (userData.token) {
      dispatch(fetchAllTechnology());
    }
  }, [userData]);

  useEffect(() => {
    if (userData.token) {
      dispatch(getAllCategoriesUnderTechnologyById((id)));
    }
  }, [userData]);

  return (
    <div>
      {
        categories.length != 0 ? (
          <>
            <h6>Category List</h6>
            <Card className="users-list">
              <div className="card-header">
                <AddCategory technologyId={id} />
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
          </>
        ) : (
          <div className={styles["custom-text-center"]}>
            <b>No categories found please try to add..</b>
          </div>
        )
      }
    </div>
  );
}

export default CategoryList;