
export default function Home() {
  const cardsContent = [
    {
      img:"https://plus.unsplash.com/premium_photo-1709971210110-34735660e82c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBjYXJkfGVufDB8fDB8fHww",
      text:"Film"
    },
    {
      img:"https://images.unsplash.com/photo-1700275032086-2d871b3c8722?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBjYXJkfGVufDB8fDB8fHww",
      text:"Quinn"
    },
    {
      img:"https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllJTIwY2FyZHxlbnwwfHwwfHx8MA%3D%3D",
      text:"Theatre"
    },
  ]
  return (
    <div>
     <h1 className="text-red-400">Hello World!</h1>
      {cardsContent.map((d,i) => (
        <Card
        key={i}
        img = {d.img}
        text = {d.text}
        />
      ))}
    </div>
  );
}

const Card = ({img,text}) => {
  return (
    <div className="bg-amber-600 w-fit p-2 rounded-lg">
      <img src={img} className="w-60" alt="" />
      <p className="font-bold">{text}</p>
     </div>
  )
}
