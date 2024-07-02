import { Image } from "antd";
import Video from "next-video";
// const videoSource = "https://youtu.be/1QxfsoYpaC4";
export function Media() {
  return (
    <>
      <div>
        <h3 className="py-4 font-bold">Room Diagram</h3>
        <div className="overflow-hidden rounded-md p-4">
          <Image src="/assets/home/diagram/01.png" alt="Image diagram" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="w-full py-4 text-left font-bold">Walkaround</h3>
        <div className="max-w-lg overflow-hidden rounded-md p-4 text-center">
          {/* <Video
            accentColor="#ffc531"
            src={videoSource}
            controls
            muted
            className="mx-auto overflow-hidden rounded-md"
          /> */}
        </div>
      </div>
    </>
  );
}
