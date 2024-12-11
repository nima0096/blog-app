import React from "react";

export const Card = (props) => {
  const { index, blog } = props;
  return (
    <div
      key={index}
      style={{
        width: 360,
        height: 460,
        padding: 20,
        borderRadius: 12,
        border: "1px solid #E8E8EA",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div
        style={{
          height: 240,
          width: 360,
          border: "1px solid #E8E8EA",
          borderRadius: 6,
        }}
      />

      <div
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <span
          style={{
            backgroundColor: "#D3D3D3",
            color: blog.tag.name,
            padding: 6,
            borderRadius: 4,
            fontSize: 20,
            display: "inline",
          }}
        >
          {blog.tag.name}
        </span>

        <h1>{blog.title}</h1>

        {blog.createdAt.toDate().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
};
