import React from 'react'

function Footer() {
    const socials = ["Facebook", "X", "Instagram", "LinkedIn"];
    return (
        <footer className="w-full bg-gray-900 text-green-300 py-8 border-t-4 border-green-400 shadow-inner">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 mb-4">
                <div className="flex-1 mb-6 md:mb-0">
                    <h4 className="text-xl font-bold mb-2 text-purple-300">Contact Us</h4>
                    <p>Email: aliencafe@galaxy.com</p>
                    <p>Phone: +42 123 456 7890</p>
                    <p>Address: Asteroid Belt, Milky Way Galaxy</p>
                </div>
                <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-purple-300">Socials</h4>
                    <ul className="space-y-1">
                        {socials.map((platform, index) => {
                            return (
                                <li key={index} className="hover:text-purple-400 transition">
                                    {platform}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                <span className="text-lg font-mono">&copy; {new Date().getFullYear()} Alien Café. All rights reserved.</span>
                <span className="text-sm mt-2 md:mt-0">Made with <span className="text-purple-400">👽</span> by Team 2</span>
            </div>
        </footer>
    )
}

export default Footer