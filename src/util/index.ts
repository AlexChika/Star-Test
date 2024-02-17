function getID(length = 8) {
  const id = (
    Math.random().toString(36).substring(2) +
    Math.random().toString(36).substring(2)
  ).substring(0, length);

  return id;
}

export { getID };
