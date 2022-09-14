```
const getInitial = (name) => {
  const nameSplit = String(name).toUpperCase().split(' ')​
​
  let initials = ''

  if (nameSplit.length == 1) {
    initials = nameSplit[0] ? nameSplit[0].charAt(0) : '?';
  } else {
    initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
  }

  return initials
}
```