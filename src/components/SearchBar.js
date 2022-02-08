import React from "react";

export default function SearchBar({ term, onChange }) {
  return (
    <div>
      {/* controlled component/element */}
      <input value={term} onInput={(e) => onChange(e.target.value)} />
    </div>
  );
}
