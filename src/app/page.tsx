import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-4xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-6 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpeg"
                alt="Capa do álbum Rust in Peace da banda Megadeth"
                width={104}
                height={104}
              />
              <strong>Rust in Peace</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpeg"
                alt="Capa do álbum Rust in Peace da banda Megadeth"
                width={104}
                height={104}
              />
              <strong>Rust in Peace</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpeg"
                alt="Capa do álbum Rust in Peace da banda Megadeth"
                width={104}
                height={104}
              />
              <strong>Rust in Peace</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpeg"
                alt="Capa do álbum Rust in Peace da banda Megadeth"
                width={104}
                height={104}
              />
              <strong>Rust in Peace</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center overflow-hidden hover:bg-white/20"
            >
              <Image
                src="/album.jpeg"
                alt="Capa do álbum Rust in Peace da banda Megadeth"
                width={104}
                height={104}
              />
              <strong>Rust in Peace</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center overflow-hidden hover:bg-white/20"
            >
              <Image
                src="/album.jpeg"
                alt="Capa do álbum Rust in Peace da banda Megadeth"
                width={104}
                height={104}
              />
              <strong>Rust in Peace</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made For Fabricio Cruzz
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.jpeg"
                alt="Capa do álbum Rust in Peace da banda Megadeth"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                AC/DC, Lynyrd Skynyrd, Judas Priest and more
              </span>
            </a>

            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.jpeg"
                alt="Capa do álbum Rust in Peace da banda Megadeth"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                AC/DC, Lynyrd Skynyrd, Judas Priest and more
              </span>
            </a>

            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                className="w-full"
                src="/album.jpeg"
                alt="Capa do álbum Rust in Peace da banda Megadeth"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                AC/DC, Lynyrd Skynyrd, Judas Priest and more
              </span>
            </a>

            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.jpeg"
                alt="Capa do álbum Rust in Peace da banda Megadeth"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                AC/DC, Lynyrd Skynyrd, Judas Priest and more
              </span>
            </a>

            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.jpeg"
                alt="Capa do álbum Rust in Peace da banda Megadeth"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                AC/DC, Lynyrd Skynyrd, Judas Priest and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
