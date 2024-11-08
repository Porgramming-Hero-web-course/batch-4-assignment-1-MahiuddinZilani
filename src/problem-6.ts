{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    object: Profile,
    update: Partial<Profile>
  ): Profile => {
    return { ...object, ...update };
  };

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  console.log(updateProfile(myProfile, { age: 26, email: "a@gmail.com" }));
}
