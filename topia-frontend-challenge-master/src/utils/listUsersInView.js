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
    right: (positionX + yAxis),
    bottom: (positionY - xAxis),
    left: (positionX - yAxis),
  }

  //In veiw logic
  const inRange = (num, min, max) => {
    return num >= min && num <= max
  }
  Object.values(users).forEach(topi => {
    if (inRange(topi.y, screen.bottom, screen.top) && inRange(topi.x, screen.left, screen.right)) {
      usersInView.push(topi)
    }
  })

  //Sort visable users by distance
  const distance = (topi, positionX, positionY) => {
    return (Math.abs(topi.x - positionX) + Math.abs(topi.y - positionY))
  }
  const sortdistance = (a, b) => {
    return (a[0] - b[0])
  }
  const sorted = usersInView.map((topi) => {
    return ([distance(topi, positionX, positionY), topi])
  })
  const result = sorted.sort(sortdistance).map((topi) => {
    return (topi[1])
  })

  // END SOLUTION SECTION

  return result;
}
