import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import { AuthProvider } from "./providers/AuthProvider";
import { LoginButton } from "./LoginButton";
import { QueryProvider } from "./providers/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} grid px-24 grid-cols-12 w-screen h-screen`}
			>
				<QueryProvider>
					<AuthProvider>
						<Sidebar className="col-span-3 ml-24" />
						<div className="col-span-6 border-gray-800 border-r-[0.5px] border-l-[0.5px]">
							{children}
						</div>
						<div className="col-span-3">
							<div className="flex flex-col items-center gap-2 p-4">
								<LoginButton>
									<h1 className="font-semibold text-2xl">New to twitter?</h1>
								</LoginButton>
							</div>
						</div>
					</AuthProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
