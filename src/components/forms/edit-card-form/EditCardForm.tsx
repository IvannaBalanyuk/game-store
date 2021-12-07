import React, { FC } from "react";
import { Form, Field } from "react-final-form";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import classNames from "classnames";
import style from "../form.module.scss";
import formStyle from "./editCardForm.module.scss";
import FormInput from "../../common/FormInput";
import TextAreaInput from "../../common/TextAreaInput";
import GenresField from "./GenresField";
import AgesField from "./AgesField";
import RatingField from "./RatingField";
import PlatformField from "./PlatformField";
import { ICard } from "../../../types/Card";

const EditCardForm: FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const onSubmit = (values: ICard) => {
    console.log(values);
  };

  const useStyles = makeStyles(() => ({
    root: {
      "&.MuiButtonBase-root": {
        backgroundColor: "#9933cc",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textTransform: "none",
        fontSize: "16px",
        padding: "0",
        transition: "all 1s ease",
        "&:hover, &:active, &:focus": {
          backgroundColor: "#60257c",
        },
      },
    },
  }));

  const btnStyle = useStyles();

  return (
    <>
      <Button className={btnStyle.root} onClick={handleOpen}>
        Edit
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className={style.box}>
          <Typography className={style.title}>Edit card</Typography>
          <Form
            onSubmit={onSubmit}
            initialValues={{ amount: 1 }}
            render={({ handleSubmit, submitting }) => (
              <form className={classNames(formStyle.editForm, style.form)} onSubmit={handleSubmit}>
                <div>
                  <Field label="Name" type="text" name="name" component={FormInput} placeholder="Name" />
                </div>
                <GenresField />
                <div>
                  <Field label="Price" type="number" name="price" component={FormInput} placeholder="Price" />
                </div>
                <RatingField />
                <div>
                  <Field label="Image" type="text" name="image" component={FormInput} placeholder="Image" />
                </div>
                <div>
                  <Field label="Description" name="deescription" component={TextAreaInput} placeholder="Description" />
                </div>
                <AgesField />
                <PlatformField />
                <div className={style.buttons}>
                  <button type="submit" disabled={submitting}>
                    Submit
                  </button>
                  <button type="submit">Delete card</button>
                </div>
              </form>
            )}
          />
        </Box>
      </Modal>
    </>
  );
};

export default EditCardForm;
