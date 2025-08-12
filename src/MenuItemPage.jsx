import React from 'react'
import { useParams } from 'react-router-dom'
import MenuItem from './components/MenuItem'
import menuData from './assets/menuData'

function MenuItemPage() {
  const { id } = useParams()
  
  // Find the menu item by ID across all categories
  const allMenuItems = menuData.flatMap(category => category.items)
  const menuItem = allMenuItems.find(item => item.id === parseInt(id))
  
  // If menu item not found, show error message
  if (!menuItem) {
    return (
      <div className="p-5 text-center">
        <h1 className="text-2xl font-bold mb-2">Menu Item Not Found</h1>
        <p>The menu item you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <div className="p-5 flex flex-col items-center min-h-[80vh]">
      <h1 className="mb-8 text-center text-3xl font-bold">Menu Item Details</h1>
      <div className="max-w-md w-full flex flex-col items-center">
        <MenuItem item={menuItem} />
        <div className="my-10 py-5 rounded-xl bg-gray-200 dark:bg-black w-full">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p>{menuItem.description}</p>
        </div>
      </div>
    </div>
  )
}

export default MenuItemPage