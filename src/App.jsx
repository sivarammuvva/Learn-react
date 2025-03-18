import { useState } from "react";
import "./App.css";
import Card from "./Card";

const data = [
  {
    id:1,
    image: "https://cdn05.nnnow.com/web-im",
    name: "Nike",
    discription: "U.S. Polo Assn. Men Panelled Colour Block Clanal Sneakers",
    count : 0
  },
  {
    id:2,
    image: "srcassetsimages\black shoes.jpg",
    name: "Nike",
    discription: "U.S. Polo Assn. Men Panelled Colour Block Clanal Sneakers",
    count : 0
  },
  {
    id:3,
    image: "srcassetsimages\brown.jpg",
    name: "Nike",
    discription: "U.S. Polo Assn. Men Panelled Colour Block Clanal Sneakers",
    count : 0
  },
  {
    id:4,
    image: "srcassetsimages\red shoes.jpeg",
    name: "Nike",
    discription: "U.S. Polo Assn. Men Panelled Colour Block Clanal Sneakers",
    count : 0
  },
  {
    id : 5,
    image: "srcassetsimages\redblue.jpg",
    name: "Nike",
    discription: "U.S. Polo Assn. Men Panelled Colour Block Clanal Sneakers",
    count : 0
  },
  {
    id : 6,
    image: "srcassetsimagesdull blue.jpg",
    name: "Nike",
    discription: "U.S. Polo Assn. Men Panelled Colour Block Clanal Sneakers",
    count : 0
  },
  {
    id : 7,
    image: "srcassetsimagesyello.jpg",
    name: "Nike",
    discription: "U.S. Polo Assn. Men Panelled Colour Block Clanal Sneakers",
    count : 0
  },
];

export default function App() {
  const[pdData,setPdData] = useState(data)
  return (
    <div>
      {pdData.map((item) => {
        return (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            discription={item.discription}
            count={item.count}
            setPdData={setPdData}
            id= {item.id}
          />
        );
      })}
    </div>
  );
}
