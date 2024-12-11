import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Header, Footer, Button, Card } from "../../components";
import { useBlogContext, useTagContext, useUserContext } from "../../context";
import { signOutFunction } from "../../firebase";
import "./HomePage.css";

export const HomePage = () => {
  const { loading, currentUser } = useUserContext();
  const { blogs, blogsLoading } = useBlogContext();
  const { tags, tagLoading } = useTagContext();

  const [selectedTagId, setSelectedTagId] = useState("");

  const fitleredBlogs = selectedTagId
    ? blogs.filter((blog) => selectedTagId === blog.tagId)
    : blogs;

  const handleSignOut = async () => {
    await signOutFunction();
  };

  if (loading || blogsLoading || tagLoading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div id="home-container">
        {currentUser ? (
          <>
            <h3>Welcome back, {currentUser.displayName}!</h3>
            <Button onClick={handleSignOut} style={{ width: "100px" }}>
              Sign out
            </Button>
          </>
        ) : (
          <h3>Welcome, Guest!</h3>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginTop: 100,
          }}
        >
          <h2>All Blog Posts</h2>

          <div
            style={{
              display: "flex",
              gap: 10,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {tags.length === 0
              ? "No tags"
              : [{ name: "All", tagId: "" }, ...tags].map((tag, index) => (
                  <div
                    key={index}
                    style={{
                      color: selectedTagId === tag.tagId ? "#D4A373" : "#000",
                    }}
                    onClick={() => setSelectedTagId(tag.tagId)}
                  >
                    {tag.name}
                  </div>
                ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            {fitleredBlogs.map((blog, index) => (
              <div key={index}>
                <Card blog={blog} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
