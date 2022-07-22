
export interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  { id: '1', name: 'foo' },
  { id: '2', name: 'bar' },
];

export async function fetchCategories(): Promise<Category[]> {
  return categories;
}

export interface Memo {
  id: string;
  categoryId: string;
  title: string;
  body: string;
}

const memos: Memo[] = [
  { id: '1', categoryId: '1', title: '1-1', body: 'example text body' },
  { id: '2', categoryId: '2', title: '2-2', body: 'example text body' },
  { id: '3', categoryId: '2', title: '2-3', body: 'example text body' },
  { id: '4', categoryId: '2', title: '2-4', body: 'example text body' },
];

export async function fetchMemos(categoryId: string): Promise<Memo[]> {
  return memos.filter(memo => memo.categoryId === categoryId);
}

