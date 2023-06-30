import Link from "next/link";

const Header = () => {
	return (
		<nav className="flex justify-between text-white pt-6 md:w-[720px] lg:text-xl md:pt-10 md:m-auto px-4">
			<div className="font-bold">Taipa</div>
			<div className="flex space-x-4 lg:space-x-8">
				<Link
					href="/"
					className="hover:text-gray-300 duration-150"
				>
					Home
				</Link>
				<Link
					href="/"
					className="hover:text-gray-300 duration-150"
				>
					About Us
				</Link>
				<Link
					href="/"
					className="hover:text-gray-300 duration-150"
				>
					Log In
				</Link>
			</div>
		</nav>
	);
};

export default Header;
