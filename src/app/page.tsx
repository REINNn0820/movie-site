import Image from "next/image";

type Cat = {
  name: string;
  age: number;
  isAlive: boolean;
};

let cat1: Cat = {
  name: "Tom",
  age: 1,
  isAlive: true,
};
console.log(cat1);
export default function Home() {
  return <div></div>;
}
