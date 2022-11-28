import React from "react";
import { MemberEntity } from './model';

import { MemberTableRow } from './member-table-row';
import { MemberTableHeader } from "./member-table-header";

export const App = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch('https://api.github.com/orgs/lemoncode/members')
      .then(r => {
        if (r.ok) { return r.json(); }
      })
      .then(json => { setMembers(json) })
      .catch(console.error);
  }, []);

  return (
    <div className="user-list-container">
      <MemberTableHeader />
      {members.map((member) => (
        <MemberTableRow key={member.id} member={member} />
      ))}
    </div>
  );
};