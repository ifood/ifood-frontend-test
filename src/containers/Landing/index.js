import React from "react";
import { authorize } from "services/api";

export default function Landing() {
  return (
    <div className="landing">
      <button
        onClick={() => {
          authorize();
        }}
      >
        Autorizar
      </button>
    </div>
  );
}
