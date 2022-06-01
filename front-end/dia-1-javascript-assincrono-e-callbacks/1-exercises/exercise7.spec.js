const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// ??

// test('uppercase "oi" to equal "OI"', (done) => {
//   uppercase('oi', (str) => {
//     try {
//       expect(str).toBe('OI');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });
