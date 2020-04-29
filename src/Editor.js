import React from "react";

export default function Editor({ content, onChange }) {
  return (
    <div className="editor-box">
      <textarea id="editor" value={content} onChange={onChange} />
    </div>
  );
}
