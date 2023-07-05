```js showLineNumbers {11,14,17}
const loggedUser = {
  role: "reader",
}

function getUserPermission(user) {
  let permission

  switch (user.role) {
    case "reader":
      permission = "can read"
      break
    case "writer":
      permission = "can write"
      break
    case "admin":
      permission = "can everything"
      break
  }

  return permission
}

console.log(getUserPermission(loggedUser))
```