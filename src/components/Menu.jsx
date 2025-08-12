import React from 'react'

export default function Menu( { category, items } ) {
  return (
      <div className="rounded-xl p-6 shadow-2xl border-2 border-green-400 my-5">
        <h3 className="text-3xl font-extrabold text-green-300 tracking-widest mb-6 text-center drop-shadow-lg">{category} Menu</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex flex-row items-center justify-between text-green-300 text-lg font-mono rounded-xl shadow-lg hover:bg-green-800 hover:text-purple-300 transition-all duration-300 px-6 py-3 border-2 border-green-400"
            >
              <span className="text-2xl font-bold mr-6 drop-shadow-lg whitespace-nowrap">{item.name}</span>
              <span className="flex-1 text-green-200 mr-6 whitespace-nowrap overflow-hidden text-ellipsis">{item.description}</span>
              <span className="text-xl font-extrabold text-purple-300 bg-green-900 px-4 py-2 rounded-lg shadow-md whitespace-nowrap">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
  )
}