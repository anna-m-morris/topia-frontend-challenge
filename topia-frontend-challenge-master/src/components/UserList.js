import React, { useContext } from "react";
import { UsersContext } from "../Contexts/UsersContext";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./userlist.css"

export const UserList = (props) => {
  const { users } = useContext(UsersContext);

  // TODO: Create a Modal component with inputs for position and screen size (screen size should default to actual window width and height but be editable).
  // CTA in Modal should close modal, call listUsersInView with updated values, and update usersInView
  // Add a list of the users in view in the render statement below
  // console.log(props)

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          The following Users are currently visible based on position and screen
          size.
        </Typography>
      </Box>
      <div className="list">
        {users.map((topi) => {
          return (
            <UserCard
              key={topi.id}
              broadcaster={topi.is_broadcaster}
              name={topi.username}
            />
          );
        })}
      </div>
      {users.length === 0 && (
        <Box my={4}>
          <Typography component="p" gutterBottom>
            There are currently no users within view.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

const UserCard = (props) => {
  return (
    <div className="card">
      <h5>{props.name}</h5>
      {props.broadcaster === true && <p>broadcaster</p>}
    </div>
  );
};
