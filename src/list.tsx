import React from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/facebook/members")
      .then((r) => r.json())
      .then(setMembers);
  }, []);

  return (
    <>
      <h3>Ola dende List</h3>

      <div className="user-list-container">
        <span className="header">Avatar</span>
        <span className="header">Id</span>
        <span className="header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`details/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
