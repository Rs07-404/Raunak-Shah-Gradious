import { useState } from 'react';
import './App.css';
import MyGallery from './MyGallery';


function App() {
  const [someValue, setSomeValue] = useState(5);
  const increment = () => {
    setSomeValue((prevSumValue) => prevSumValue + 1);
    setSomeValue((prevSumValue) => prevSumValue + 1);
    setSomeValue((prevSumValue) => prevSumValue + 1);
    setSomeValue((prevSumValue) => prevSumValue + 1);
    setSomeValue((prevSumValue) => prevSumValue + 1);
  }
  const decrement = () => {
    setSomeValue(someValue-1);
  }
  return (
    <>
    <div className="App">
        <h1>State Hook</h1>
        <h1>{someValue}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <div className='imageContainer'>
          <MyGallery link="https://i.ytimg.com/vi/WKVf1N3sHqE/maxresdefault.jpg" text="Scenario" alt="Scenario"/>
          <MyGallery link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnw65Hr-asDzJo42bqCn-bN69Nyl4dhv7RUQ&s" text="Scenario" alt="Scenario"/>
          <MyGallery link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrR8cG0t7nhae1cDIcs8HffCFZhl8FCsbsbA&s" text="Scenario" alt="Scenario"/>
          <MyGallery link="https://wallpapers-clan.com/wp-content/uploads/2023/11/cool-minecraft-pixel-desktop-wallpaper-preview.jpg" text="Scenario" alt="Scenario"/>
          <MyGallery link="https://images8.alphacoders.com/479/thumb-1920-479393.jpg" text="Scenario" alt="Scenario"/>
          <MyGallery link="https://wallpapers.com/images/featured/minecraft-s2kxfahyg30sob8q.jpg" text="Scenario" alt="Scenario"/>
          <MyGallery link="https://images3.alphacoders.com/118/thumb-1920-1184187.jpg" text="Scenario" alt="Scenario"/>
          <MyGallery link="https://www.minecraft.net/content/dam/games/minecraft/key-art/MC-Vanilla_Updates-Carousel_CandC-Part-II_800x450.jpg" text="Scenario" alt="Scenario"/>
          <MyGallery link="https://external-preview.redd.it/animated-wallpaper-i-made-v0-yz6-idEZMoxAn3IVA3YzNjshvLA12Hh5WcjKSxq8WCo.png?format=pjpg&auto=webp&s=2821d358ec05cadf4fd468572c138b0cd8d485c7" text="Scenario" alt="Scenario"/>
          <MyGallery link="https://pcsite.co.uk/wp-content/uploads/2023/12/minecraft-wallpaper.jpg" text="Scenario" alt="Scenario"/>
          <MyGallery link="https://preview.redd.it/here-are-some-wallpapaer-i-made-fell-free-to-share-ideas-of-v0-7buzb5xztqhb1.png?width=640&crop=smart&auto=webp&s=58a2f1d72fb5cd016d68e74bcb6b2c35b95bb000" text="Scenario" alt="Scenario"/>
          <MyGallery link="https://c.wallhere.com/photos/34/1a/Minecraft_cherry_blossom-2248584.jpg!s1" text="Scenario" alt="Scenario"/>
          <MyGallery link="https://www.minecraft.net/content/dam/games/minecraft/key-art/MC-Vanilla_Media-Block-Image_Java-Keyart_800x450.jpg" text="Scenario" alt="Scenario"/>
        </div>
    </div>
    </>
  );
}

export default App;
