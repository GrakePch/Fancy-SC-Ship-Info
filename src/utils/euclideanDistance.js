function euclideanDistance(pos1, pos2) {
  return (
    ((pos1[0] - pos2[0]) ** 2 +
      (pos1[1] - pos2[1]) ** 2 +
      (pos1[2] - pos2[2]) ** 2) **
    0.5
  );
}
export default euclideanDistance;
