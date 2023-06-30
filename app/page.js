import Image from "next/image";
import bg from "public/bg.jpg";
import Link from "next/link";
import Tree from "./components/Tree.js";
const juzes = [
	{
		name: "Kışı Jüz",
		img: "/junior.png",
		page: "/juzes/junior_juz",
	},
	{
		name: "Orta Jüz",
		img: "/medium.png",
		page: "/juzes/middle_juz",
	},
	{
		name: "Ūly Jüz",
		img: "/senior.png",
		page: "/juzes/senior_juz",
	},
];

const Juz = ({ juz }) => {
	return (
		<Link
			href={juz.page}
			className="space-y-4 hover:scale-105 duration-200"
		>
			<img
				src={juz.img}
				className="w-[300px]   drop-shadow-md"
			></img>
			<div className="text-center font-light text-cyan-950-950 pt-4">
				{juz.name}
			</div>
		</Link>
	);
};

const Juzes = () => {
	const toRender = juzes.map((juz) => {
		return <Juz juz={juz} />;
	});
	return (
		<div className="pt-60 pb-20">
			<div className="font-bold text-4xl text-center text-gray-800 pb-12">
				Jüzder
			</div>
			<div className="text-3xl justify-between w-[1280px] m-auto flex">
				{toRender}
			</div>
		</div>
	);
};

export default function Home() {
	return (
		<main className="pt-10">
			<img src="/bg.jpg" className="bg-pic"></img>
			<div className="w-[720px] text-white text-center m-auto p-2 text-6xl pt-48 font-extrabold">
				Connecting history and technology.
			</div>
			<div className="text-white text-center m-auto md:w-[720px] font-light pt-8 pb-12 text-lg">
				Lorem ipsum dolor, sit amet consectetur adipisicing
				elit. Voluptates, nulla ratione. Id tempora quis
				ducimus sint commodi! Voluptatibus blanditiis ipsum
				facilis, assumenda quam ad impedit.
			</div>
			<div className="text-center">
				<Link
					href="/"
					className="m-auto hover:bg-gray-300 hover:text-gray-800 duration-150 text-2xl bg-white p-3 px-4 rounded-2xl font-light "
				>
					Explore
				</Link>
			</div>
			<Juzes />
			{/* <Tree /> */}
		</main>
	);
}
