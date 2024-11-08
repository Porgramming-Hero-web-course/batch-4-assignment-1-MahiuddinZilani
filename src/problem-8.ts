{
  type Person = {
    name: string;
    age: number;
    email: string;
  };

  const validateKeys = (object: Person, keys: string[]): boolean => {
    let validate: boolean = false;
    keys.forEach((key) => {
      if (object.hasOwnProperty(key)) {
        validate = true;
      } else validate = false;
    });
    return validate;
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["age"]));
}
