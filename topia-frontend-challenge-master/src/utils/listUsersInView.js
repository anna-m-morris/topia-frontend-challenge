export default function listUsersInView(users, positionX, positionY, screenWidth, screenHeight) {
  const usersInView = [];

  // WRITE SOLUTION BELOW. ADD USERNAME AND IS_BROADCASTER TO 'usersInView' IF USER FALLS INTO VISIBLE RANGE
  console.log(Object.values(users), positionX, positionY, screenHeight, screenWidth)
  usersInView.push(Object.values(users))
  // END SOLUTION SECTION

  return usersInView;
}
