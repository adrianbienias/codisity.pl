```js showLineNumbers
const loggedUser = {
  role: "reader",
}

function getUserPermission(user) {
  let permission

  switch (user.role) {
    case "reader":
      permission = "can read"
    case "writer":
      permission = "can write"
    case "admin":
      permission = "can everything"
  }

  return permission
}

console.log(getUserPermission(loggedUser))
```