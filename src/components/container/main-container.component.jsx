import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VideoCard from "../videocard/videocard.component";
import "./main-container.scss";

export default function MainContainer() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8080/files", {
      headers: {
        mimeType: "video/mp4"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.files);
        setData(data.files);
      });
  }, []);

  // React.useEffect(() => {
  //   fetch(
  //     `https://cors-anywhere.herokuapp.com/https://docs.google.com/get_video_info?docid=1Eey77eCHvOaphBNavNDgP4K9zN9ACF-E`
  //   )
  //     .then(response => response.text())
  //     .then(data => console.log(data));
  // }, []);

  return (
    <Container>
      <div className="heading">
        <h4>New Releases</h4>
      </div>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}

      {
        <Row>
          {data.map((file, index) => {
            return (
              <Col className="videocard" key={index} xs={6} md={3}>
                <VideoCard file={file} />
              </Col>
            );
          })}
        </Row>
      }
    </Container>
  );
}
