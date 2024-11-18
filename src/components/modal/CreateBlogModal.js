import React, { useState } from "react";
import { Modal } from "./Modal";
import { Box, CircularProgress } from "@mui/material";
import { TextField } from "../textfield";
import { Button } from "../button";
import { addDoc } from "firebase/firestore";
import { blogsCollection } from "../../firebase";
import { useUserContext } from "../../context";

export const CreateBlogModal = (props) => {
  const { open, handleClose } = props;
  const { currentUser } = useUserContext();
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      blogData.content === "" ||
      blogData.description === "" ||
      blogData.title === ""
    ) {
      alert("Please fill all the fields!");
    } else {
      setLoading(true);

      await addDoc(blogsCollection, {
        userId: currentUser.uid,
        title: blogData.title,
        description: blogData.description,
        context: blogData.content,
      });

      setBlogData({
        title: "",
        description: "",
        content: "",
      });

      handleClose();
      setLoading(false);
    }
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2 style={{ margin: 0 }}>Create Blog</h2>
          <TextField
            type="text"
            name="title"
            placeholder="Title..."
            value={blogData.title}
            onChange={handleChange}
          />
          <TextField
            type="text"
            name="description"
            placeholder="Description..."
            value={blogData.description}
            onChange={handleChange}
          />
          <TextField
            type="text"
            name="content"
            placeholder="Content..."
            value={blogData.content}
            onChange={handleChange}
          />

          <Box sx={{ display: "flex", gap: "60px" }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Create</Button>
          </Box>
        </Box>
      )}
    </Modal>
  );
};
