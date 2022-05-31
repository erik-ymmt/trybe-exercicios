// 1 - Adicione uma callback como parâmetro da função getUser.
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

// console.log(getUser(userFullName));
// console.log(getUser(userNationality));

// 2 - Passe, como parâmetro e como retorno, uma callback para a função getUser.
const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser2 = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(callback(user));
  }, delay());
};

getUser2(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser2(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
