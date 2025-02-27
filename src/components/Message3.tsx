import Img1 from './images/img1.jpeg';
import Img2 from './images/img2.jpeg';
import Img3 from './images/img3.jpeg';
import Img4 from './images/img4.jpeg';
import Img5 from './images/img5.jpeg';
import Img6 from './images/img6upd.jpeg';
import Img7 from './images/img7.jpeg';
import Img8 from './images/img8.jpeg';
import Img9 from './images/img9.jpeg';
import Img10 from './images/img10.jpeg';
import Img11 from './images/img11.jpeg';
import Img12 from './images/img12.jpeg';
import Img13 from './images/img13.jpeg';
import Img14 from './images/img14.jpeg';
import Img15 from './images/img15.jpeg';
import Img16 from './images/img16.jpeg';
import Img17 from './images/img17upd.jpeg';
import Vid1 from './images/vid1.mp4';
import Vid2 from './images/vid2.mp4';
import Vid3 from './images/vid3.mp4';
import React from "react";

const Message3: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
          Another Surprise Awaits! 🎊
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
               Keep shining and smiling! 🌟💖🎂
        </p>
      </div>

      {/* 📸 Collage Section */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl">
        {/* Row 1 */}
        <img src={Img1} alt="Memory 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
        <img src={Img2} alt="Memory 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
        <img src={Img6} alt="Memory 3" className="w-full h-60 object-cover rounded-lg shadow-md" />
        <img src={Img4} alt="Memory 4" className="w-full h-60 object-cover rounded-lg shadow-md" />

        {/* Row 2 */}
        <img src={Img5} alt="Memory 5" className="w-full h-60 object-cover rounded-lg shadow-md col-span-2" />
        <img src={Img3} alt="Memory 6" className="w-full h-60 object-cover rounded-lg shadow-md col-span-2" />

        {/* Row 3 */}
        <img src={Img7} alt="Memory 7" className="w-full h-60 object-cover rounded-lg shadow-md" />
        <img src={Img8} alt="Memory 8" className="w-full h-60 object-cover rounded-lg shadow-md col-span-2" />
        <img src={Img9} alt="Memory 9" className="w-full h-60 object-cover rounded-lg shadow-md" />

        {/* Row 4 */}
        <img src={Img10} alt="Memory 10" className="w-full h-60 object-cover rounded-lg shadow-md col-span-2" />
        <img src={Img17} alt="Memory 11" className="w-full h-60 object-cover rounded-lg shadow-md" />
        <img src={Img12} alt="Memory 12" className="w-full h-60 object-cover rounded-lg shadow-md" />

        {/* Row 5 */}
        <img src={Img13} alt="Memory 13" className="w-full h-60 object-cover rounded-lg shadow-md" />
        <img src={Img14} alt="Memory 14" className="w-full h-60 object-cover rounded-lg shadow-md col-span-2" />
        <img src={Img15} alt="Memory 15" className="w-full h-60 object-cover rounded-lg shadow-md" />

        {/* Row 6 */}
        <img src={Img16} alt="Memory 16" className="w-full h-60 object-cover rounded-lg shadow-md" />
        <img src={Img11} alt="Memory 17" className="w-full h-60 object-cover rounded-lg shadow-md col-span-3" />
      </div>

      {/* 🎥 Video Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
        <video 
          src={Vid1} 
          className="w-full h-60 rounded-lg shadow-lg"
          controls 
          autoPlay 
          loop 
          muted
        />
        <video 
          src={Vid2} 
          className="w-full h-60 rounded-lg shadow-lg"
          controls 
          autoPlay 
          loop 
          muted
        />
        <video 
          src={Vid3} 
          className="w-full h-60 rounded-lg shadow-lg"
          controls 
          autoPlay 
          loop 
          muted
        />
      </div>
    </div>
  );
};

export default Message3;
