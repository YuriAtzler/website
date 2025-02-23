import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";

export function Footer() {
  return (
    <footer>
      <div className="flex justify-center bg-gray-12/95">
        <div className="container grid grid-cols-4 py-6">
          <div className="col-span-1 flex flex-col gap-3">
            <h1 className="text-xl text-white font-bold">Lorem imdklfsjofes</h1>
            <div className="flex flex-col text-sm gap-2 text-white/75">
              <span>Santa maria, Rs</span>
              <span>Rua x no bairro y</span>
            </div>
            <div className="flex flex-col text-sm gap-2 text-white/75">
              <span>
                <b>Phone:</b> (55) 5555-5555
              </span>
              <span>
                <b>Email:</b> email@gmail.com.br
              </span>
            </div>
            <div className="flex gap-3 text-lg text-white">
              <LuFacebook />
              <LuTwitter />
              <LuInstagram />
              <LuYoutube />
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <h1 className="text-xl text-white font-bold">Links</h1>
            <a className="text-white/75">About</a>
            <a className="text-white/75">Carrousel</a>
            <a className="text-white/75">Galeria</a>
            <a className="text-white/75">Home</a>
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <h1 className="text-xl text-white font-bold">Lorem imdklfsjofes</h1>
            <div className="flex flex-col text-sm gap-2 text-white/75">
              <span>Santa maria, Rs</span>
              <span>Rua x no bairro y</span>
            </div>
            <div className="flex flex-col text-sm gap-2 text-white/75">
              <span>
                <b>Phone:</b> (55) 5555-5555
              </span>
              <span>
                <b>Email:</b> email@gmail.com.br
              </span>
            </div>
            <div className="flex gap-3 text-lg text-white">
              <LuFacebook />
              <LuTwitter />
              <LuInstagram />
              <LuYoutube />
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <h1 className="text-xl text-white font-bold">Lorem imdklfsjofes</h1>
            <div className="flex flex-col text-sm gap-2 text-white/75">
              <span>Santa maria, Rs</span>
              <span>Rua x no bairro y</span>
            </div>
            <div className="flex flex-col text-sm gap-2 text-white/75">
              <span>
                <b>Phone:</b> (55) 5555-5555
              </span>
              <span>
                <b>Email:</b> email@gmail.com.br
              </span>
            </div>
            <div className="flex gap-3 text-lg text-white">
              <LuFacebook />
              <LuTwitter />
              <LuInstagram />
              <LuYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-12 text-white items-center justify-center p-6">
        <p className="text-xs">
          <b>&copy; 2021 Mint.</b> Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
