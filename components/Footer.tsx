import AudioPlayer from "./AudioPlayer";

export default function Footer() {
  return (
    <footer className="bg-[#1b1d1a] text-[#d9d7d3] p-4 text-sm ">
      <div className="flex justify-between">
        <div className="flex left-[0%]">
          <p className="relative left-[15%]">Contacts</p>
          <div className="w-[2px] h-[50px] bg-white relative left-[20%]" />
          <div className="relative left-[25%]">
            <p>Tel: +49 1520 9539789</p>
            <p>Email: yelyseikudelia@gmail.com</p>
            <p>GitHub: <a className="underline" href="https://github.com/sfforrywetto">sfporryuett.to</a></p>
          </div>
        </div>
        <AudioPlayer src="/music/bonkers-pilsplaat.mp3" cdImage="/music/cd.png"/>
      </div>
    </footer>
  );
}
