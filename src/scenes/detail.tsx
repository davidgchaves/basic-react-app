import React from "react";
import { Link, useParams } from "react-router-dom";
import { routes } from "core";

interface MemberDetail {
  login: string;
  id: number | null;
  name: string;
  company: string;
  bio: string;
  type: "standard" | "pro";
}

const createDefaultMember = (): MemberDetail => ({
  login: "",
  bio: "",
  id: null,
  company: "",
  name: "",
  type: "standard",
});

const handleFetchJsonResponse = (r: Response) => {
  if (r.ok) {
    return r.json();
  }
};

const retrieveMember = (login: string): Promise<MemberDetail> =>
  fetch(`https://api.github.com/users/${login}`)
    .then(handleFetchJsonResponse)
    .then((value) => ({ ...value, type: "standard" }));

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetail>(createDefaultMember);
  const { id } = useParams();

  React.useEffect(() => {
    retrieveMember(id).then(setMember).catch(console.error);
  }, []);

  return (
    <>
      <h3>Ola dende Detail</h3>
      <p>id: {member.id}</p>
      <p>login: {member.login}</p>
      <p>name: {member.name}</p>
      <p>company: {member.company}</p>
      <p>bio: {member.bio}</p>
      <p>type: {member.type}</p>
      <Link to={routes.list}>Back to List page</Link>
    </>
  );
};
