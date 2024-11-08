{
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };

  const calculateArea = (shape: Circle | Rectangle): number => {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.shape === "rectangle") {
      return shape.height * shape.width;
    } else {
      throw new Error("Invalid Shape");
    }
  };

  const circle: Circle = {
    shape: "circle",
    radius: 1,
  };

  const rectangle: Rectangle = {
    shape: "rectangle",
    height: 10,
    width: 20,
  };

  console.log(calculateArea(rectangle));
}
