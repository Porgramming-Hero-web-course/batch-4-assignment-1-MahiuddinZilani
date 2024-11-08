{
  const getProperty = <T, X extends keyof T>(object: T, key: X) => {
    return object[key];
  };

  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
}
