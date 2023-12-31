function greet(name) {
  if (isInvalidString(name)) {
    return 'Hello, my friend.';
  }

  if (isAList(name) && name.length > 2) {
    return listToString(name);
  }

  if (isAList(name)) {
    return 'Hello, ' + name[0] + ' and ' + name[1] + '.';
  }

  if (isUpperCase(name)) {
    return 'HELLO, ' + name + '!';
  }
  return 'Hello, ' + name + '.';
}

function isInvalidString(name) {
  return name === null || name === undefined || name === '';
}

function isUpperCase(name) {
  return name === name.toUpperCase();
}

function isAList(list) {
  return typeof list === 'object';
}

function listToString(name) {
  let txt = 'Hello';
  let uppercaseName;

  for (let i = 0; i < name.length - 1; i++) {
    if (isUpperCase(name[i])) {
      uppercaseName = name[i];
    } else {
      txt += ', ' + name[i];
    }
  }

  txt += ' and ' + name[name.length - 1] + '.';

  if (uppercaseName) {
    txt += 'AND HELLO ' + uppercaseName + ' !';
  }

  return txt;
}

module.exports = { greet };
