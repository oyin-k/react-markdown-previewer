import React from "react";

export default function Preview({ content }) {
  return <div id="preview" dangerouslySetInnerHTML={content} />;
}
