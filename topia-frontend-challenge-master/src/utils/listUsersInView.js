export default function listUsersInView(users, positionX, positionY, screenWidth, screenHeight) {
  const usersInView = [];

  // WRITE SOLUTION BELOW. ADD USERNAME AND IS_BROADCASTER TO 'usersInView' IF USER FALLS INTO VISIBLE RANGE
  console.log("Users", Object.values(users), "UserCoord", positionX, positionY, "UserScreen", screenHeight, screenWidth)
  //User location is in the center of User screen. so DIVIDE the screen dimentions in half 
  //FOR EACH topi IF their coord is greater than User coord 
  //minus half User screen AND less than User coord plus half User screen then they are in veiw

  //Virtual graph centered on user
  const yAxis = screenWidth / 2;
  const xAxis = screenHeight / 2;

  const screen = {
    top: (xAxis + positionY),
    bottom: (positionY - xAxis),
    left: (positionX - yAxis),
    right: (positionX + yAxis),
  }

  console.log(screen)

  const inRange = (num, min, max) => {
    return num >= min && num <= max
  }

  //In veiw logic
  Object.values(users).forEach(topi => {
    if (inRange(topi.y, screen.bottom, screen.top) && inRange(topi.x, screen.left, screen.right)) {
      usersInView.push(topi)
    }
  })
  // END SOLUTION SECTION

  return usersInView;
}
