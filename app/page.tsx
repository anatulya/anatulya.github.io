import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl">Anatulya Nandi 𖢥</h1>
          <div className="flex flex-row items-center space-x-3">
            <a href="https://www.linkedin.com/in/anatulya/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={24} className="fill-slate-700 hover:fill-slate-500"><path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"/></svg>
            </a>
            <a href="https://github.com/anatulya" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={24} className="fill-slate-700 hover:fill-slate-500"><path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </a>
            <a href="https://x.com/anatulya_n" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={24} className="fill-slate-700 hover:fill-slate-500"><path d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"/></svg>
            </a>
          </div>
        </div>
        <h1 className="font-medium">Computer Science @ University of Illinois</h1>
        <h1 className="font-medium text-md">Hello! I'm Anatulya. People call me Ant. I'm currently quite interested in exploring <b>tactile methods to form better perception</b> in robotics, and <b>improving memory for long-horizon robot tasks</b>. I'm currently doing research on incorporating 3D continual state reprsentations in VLAs for improved long-horizon manipulation.</h1>
        <h1 className="font-semibold text-lg">Work</h1>
          <div className="flex flex-col text-sm space-y-2">
            <div className="flex justify-between items-center font-semibold">
              <h1>JiT Architecture for Robot Manipulation</h1>
              <div className="flex flex-col">
                <h1><a href="https://github.com/anatulya/flow-matching-manipulation" target="_blank" className="underline hover:text-slate-900 hover:bg-slate-200">Github</a> Feb 2026</h1>
              </div>
            </div>
            <h1 className="">
              Implementing x-prediction flow-matching robot policy, and evaluating against v-prediction baseline to measure possible improvements. Refer to the JiT (Just Image Transformer) <a href="https://arxiv.org/pdf/2511.13720" target="_blank" className="underline hover:text-slate-900 hover:bg-slate-200">paper</a>. Currently v-prediction baseline is finished (shown below), and testing x-prediction training on Push-T.
            </h1>
            <div className="flex flex-row mt-2 space-x-4">
              <video autoPlay loop width={256}>
                <source src="/fm.mp4" type="video/mp4" />
              </video>
              <video autoPlay loop width={256}>
                <source src="/pusht.mp4" type="video/mp4" />
              </video>
            </div>
             <div className="flex justify-between items-center font-semibold pt-8">
              <h1>In-Hand Exploration with Tactile Sensing</h1>
              <div className="flex flex-col">
                <h1><a href="https://github.com/anatulya/gel-viz" target="_blank" className="underline hover:text-slate-900 hover:bg-slate-200">Github</a> Feb 2026</h1>
              </div>
            </div>
            <h1 className="">
              Trained an in-hand exploration policy in IsaacLab with GelSights on fingertips. Utilizing <a href="https://joehjhuang.github.io/gelslam/" className="underline hover:text-slate-900 hover:bg-slate-200">GelSLAM</a>, I am implementing offline map fusion to autonomously reconstruct surfaces of objects, from the simulated GelSight images (<a className="underline hover:text-slate-900 hover:bg-slate-200" target="_blank" href="https://github.com/DH-Ng/TacEx">TacEx</a>). 
              Currently, the policy can be improved to be less discontinuous, focus on exploration rather than rotation of object, and generalize to various objects. The goal is to utilize this as an autonomous data collector for GelSight images and associated low-error reconstructions.
            </h1>
            <div className="flex flex-row mt-2 space-x-4">
              <video autoPlay loop width={512}>
                <source src="/explore.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
      </div>
    </div>
  );
}
