function isIPv4Address(inputString) {
  const splited = inputString.split(".");

  return (
    splited.length === 4 &&
    splited.filter((str) => !str).length === 0 &&
    splited.filter(
      (str) => Number(str) < 0 || Number(str) > 255 || isNaN(Number(str))
    ).length === 0 &&
    splited.filter(
      (str, index) =>
        (index === 0 && str.length > 1 && str[0] === "0") ||
        (index > 0 && str.length > 1 && str[0] === "0")
    ).length === 0
  );
}
