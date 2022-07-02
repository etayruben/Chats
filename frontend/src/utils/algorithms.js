class Algorithms {
  static prettyDate(date) {
    return date.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}

export default Algorithms;
