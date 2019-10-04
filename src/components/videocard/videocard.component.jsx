import React from "react";
import Card from "react-bootstrap/Card";

export default function VideoCard({ file }) {
  return (
    <Card>
      {/*       <Card.Img variant="top" src={file.thumbnailLink} />
       */}
      <video controls height="200px">
        <source
          // src={`https://drive.google.com/uc?export=download&id=${file.id}`}
          src={`https://drive.google.com/file/d/${file.id}/view`}
          type="video/mp4"
        />
      </video>
      <Card.Body>
        {/* <Card.Title></Card.Title> */}
        <Card.Text>{`${file.name.substring(0, 20)}...`}</Card.Text>
      </Card.Body>
    </Card>
  );
}
