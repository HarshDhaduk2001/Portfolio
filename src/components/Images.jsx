import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: "9.jpg",
    title: "hd",
  },
  {
    img: "5.jpg",
    title: "hd",
  },
  {
    img: "3.jpg",
    title: "hd",
    rows: 2,
    cols: 1,
  },
  {
    img: "8.JPG",
    title: "hd",
  },
  {
    img: "4.jpg",
    title: "hd",
  },
];

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const Images = () => {
  return (
    <>
      <ImageList
        variant="quilted"
        cols={3}
        rowHeight={121}
        className="mt-10 mb-20 lg:hidden"
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div className="items-center justify-center gap-4 hidden lg:flex">
        <img
          src={itemData[1].img}
          alt={itemData[1].title}
          className="w-[50%] h-[50%] object-fit"
        />
        <img
          src={itemData[2].img}
          alt={itemData[2].title}
          className="w-[50%] h-[50%] object-fit"
        />
      </div>
    </>
  );
};

export default Images;
