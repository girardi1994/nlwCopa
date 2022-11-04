import Image from "next/image";
import celular from "../assets/celular.png";
import logoImg from "../assets/logo.svg";
import avatarImg from "../assets/avares.png";
import iconImg from "../assets/icon.svg";
import { api } from "../lib/axios";

interface HomeProps{
  poolCount: number;
  guessCount: number;
}


export default function Home(props: HomeProps) {
  return (
    <div className="max-w-[1124px] h-screen mx auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logoImg} alt="NLW Copa" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={avatarImg} alt="" />

          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span> pessoas já estão
            usando
          </strong>
        </div>
        <form className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            type="text"
            required
            placeholder="Qual nome do seu bolão?"
          />
          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconImg} alt="" />
            <div className="flex flex-cool">
              <span className="font-bold text-2xl">+{props.poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600"/>

          <div className="flex items-center gap-6">
            <Image src={iconImg} alt="" />
            <div className="flex flex-cool">
              <span className="font-bold text-2xl">+{props.guessCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image
        src={celular}
        alt="dois celulares exibindo uma prévia"
        quality={100}
      />
    </div>
  );
}
export const getServerSideProps = async () => {
  const poolCountResponse = await api.get("pools/count");
  const guessCountResponse = await api.get("guesses/count");


  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: poolCountResponse.data.count,
    },
  };
};
