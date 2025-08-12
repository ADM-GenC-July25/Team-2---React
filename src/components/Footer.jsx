import React from 'react'

function Footer() {
    const socials = ["Facebook", "X", "Instagram", "LinkedIn"];
    return (
        <footer className="w-full bg-gradient-to-br from-[#0c0c1e] via-[#1a1a2e] to-[#16213e] text-blue-300 py-10 border-t-4 border-blue-400 shadow-inner relative overflow-hidden">
            {/* Decorative planet */}
            <div className="absolute top-5 right-12 w-20 h-20 rounded-full opacity-70 bg-gradient-to-br from-pink-300 to-pink-100 shadow-[0_0_30px_rgba(255,154,158,0.3)] pointer-events-none z-0"></div>
            {/* Decorative stars (simple dots for Tailwind) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* You can add a custom SVG or use absolute positioned dots for stars */}
                <span className="absolute left-5 top-8 w-1 h-1 bg-white rounded-full opacity-80"></span>
                <span className="absolute left-20 top-16 w-1 h-1 bg-white rounded-full opacity-80"></span>
                <span className="absolute left-40 top-10 w-0.5 h-0.5 bg-white rounded-full opacity-80"></span>
                <span className="absolute left-60 top-20 w-1 h-1 bg-white rounded-full opacity-80"></span>
                <span className="absolute left-80 top-6 w-1 h-1 bg-white rounded-full opacity-80"></span>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 mb-4 relative z-10">
                <div className="flex-1 mb-6 md:mb-0">
                    <h4 className=" text-lg font-mono font-bold mb-2 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] via-[#45b7d1] to-[#96ceb4] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">Contact Us</h4>
                    <p>Email: aliencafe@galaxy.com</p>
                    <p>Phone: +42 123 456 7890</p>
                    <p>Address: Asteroid Belt, Milky Way Galaxy</p>
                </div>
                <div className="flex-1">
                    <h4 className=" text-lg font-mono font-bold mb-2 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] via-[#45b7d1] to-[#96ceb4] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">Socials</h4>
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
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 relative z-10">
                <span className="text-lg font-mono font-bold mb-2 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] via-[#45b7d1] to-[#96ceb4] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">&copy; {new Date().getFullYear()} Cosmic Cuisine. All rights reserved.</span>
                <span className="text-lg font-mono font-bold mb-2 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] via-[#45b7d1] to-[#96ceb4] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"> Made with <span className="text-purple-400">👽</span> by Team 2 </span>
                <span className="text-sm mt-2 md:mt-0"></span>
            </div>
        </footer>
    )
}

export default Footer