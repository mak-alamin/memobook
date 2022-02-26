import React from "react";

function StatusForm({ onSubmit, onChange, status }) {
  return (
    <div className="form-group">
      <form onSubmit={onSubmit}>
        <textarea
          name="status"
          className="form-control"
          placeholder="What's on your mind?"
          value={status}
          onChange={onChange}
        />
        <button className="btn bg-primary text-white btn-sm mt-2">Post</button>
      </form>
    </div>
  );
}

export default StatusForm;
