import React, { useState } from "react";
import { Modal } from "./Modal";
import { Box, CircularProgress } from "@mui/material";
import { Button } from "../button";

export const DeleteBlogModal = (props) => {
  const { open, handleClose } = props;

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

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
            alignItems: "center",
          }}
        >
          <p>Are you sure you want to delete the blog?</p>

          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleSubmit}>Yes</Button>
          </Box>
        </Box>
      )}
    </Modal>
  );
};
