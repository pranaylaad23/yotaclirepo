import React from "react";
import Button from "../../../ui/button/Button";
import classes1 from "./HeaderItem.module.css";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";
import "./styles.css";
import { placeholder } from "@babel/types";

const ClientQuestionForm = (props) => {
 
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      test: [{ Question: "", Answer: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const onSubmit = (data) => {
    // window.location.reload();
    console.log("data---------", data);
  
  };

  return (
    <>
      <hr />
      <form className="questionForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="row mt-3">
            <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
              <h5 className={classes1.boxtitle}>Add Client Question</h5>
            </div>

            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
              <form className="form-inline">
                <div className={classes1.btn}>
                  <button
                    type="button"
                    onClick={() => {
                      append({ Question: "", Answer: "" });
                    }}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {fields.map((item, index) => {
          return (
            <li
              key={item.id}
              style={{ display: "flex", flexDirection: "row" ,width:"100%"}}
            >
              <div style={{display:"flex",flexDirection:"column" ,background:"red",width:"80%"}}>
              <div >
                <input
                style={{width:"100%"}}
                  placeholder="Enter Interview Question"
                  {...register(`test.${index}.Question`, { required: true })}
                />
              </div>
              <div>
                <Controller
                  render={({ field }) => (
                    <input style={{width:"100%"}} placeholder="Enter Answer" {...field} />
                  )}
                  name={`test.${index}.Answer`}
                  control={control}
                />
              </div>
              </div>
              <div style={{ display:"flex", width:"20%", justifyContent:"center",alignItems:"center" ,justifyItems:"center"}}>
                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </div>

              {/* <button
            type="button"
            onClick={() =>
              reset({
                test: [{ Question: "", Answer: "" }],
              })
            }
          >
            reset
          </button> */}
            </li>
          );
        })}

        <input style={{width:"25%",alignSelf:"center" ,height:"50px"}} type="submit" />
      </form>
    </>
  );
};

export default ClientQuestionForm;
