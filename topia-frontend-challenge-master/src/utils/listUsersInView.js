export default function listUsersInView(users, positionX, positionY, screenWidth, screenHeight) {
  const usersInView = [];

  // WRITE SOLUTION BELOW. ADD USERNAME AND IS_BROADCASTER TO 'usersInView' IF USER FALLS INTO VISIBLE RANGE
  console.log(Object.values(users), positionX, positionY, screenHeight, screenWidth)
  Object.values(users).forEach(topi=>{usersInView.push(topi)})
  // END SOLUTION SECTION

  return usersInView;
}
