import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const Navbar = () => {
    return (
		<NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
			<NavigationMenu.List className="center m-0 flex list-none rounded-md bg-blue-300 px-5 py-1 shadow-[0_2px_10px] shadow-blackA4 mt-3">
            <NavigationMenu.Item> 
                <Link href="/">Home</Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="pl-5"> 
                <Link href="/upload">Upload</Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="pl-5"> 
                <Link href="/stuff">Stuff</Link>
            </NavigationMenu.Item>
            </NavigationMenu.List>            
        </NavigationMenu.Root>
    );
}
export default Navbar;