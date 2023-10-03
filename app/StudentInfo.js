import React from "react";

// Returns H1, Paragraph, and Link
export default function StudentInfo() {
  return (
    <div>
      <MyHeading />
      <MyParagraph />
      <MyLink />
    </div>
  );
}

// Returns H1, Output Brayden Nickel
function MyHeading() {
  return <h1>Brayden Nickel</h1>;
}

// Returns Paragraph, Output CPRG 306 A
function MyParagraph() {
  return <p>CPRG 306 A</p>;
}

// Returns Link, Output Github
function MyLink() {
  return <a href="https://github.com/BraydenNickel"></a>;
}