import React from 'react'
import { Category, fetchCategories, fetchMemos, Memo } from './api'
import './App.css'


function App() {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [memos, setMemos] = React.useState<Memo[]>([]);

  React.useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const handleCategoryClick = async (categoryId: string) => {
    fetchMemos(categoryId).then(setMemos);
  }

  return (
    <div className="App">
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => handleCategoryClick(category.id)}>switch</button>
          </li>
        ))}
      </ul>

      <h3>Memos</h3>
      <ul>
        {memos.map(memo => (
          <li key={memo.id}>
            {memo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
