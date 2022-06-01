const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};


test ('return HI if input is hi', (done) => {
  function callback(toUpper) {
    try {
      expect(toUpper).toBe('HI');
    done();
    } catch (err) {
      done(err);
    }
  }
  uppercase('hi', callback);
});
