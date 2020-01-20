import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Kishore"
          time="Today at 6:00PM"
          comment="Hello There!!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Harry"
          time="Today at 6:00PM"
          comment="Hello Harry!!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
