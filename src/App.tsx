import { createResource, type Component, For, createEffect } from 'solid-js';
import css from './App.module.css';
import { addBook, fetchBooks } from './server';

const App: Component = () => {
  const [data, {mutate, refetch}] = createResource(fetchBooks);

  const addNew = async () => {
    addBook();
    refetch();
  }

  createEffect(() => {
    console.log(data());
  })

  return (
    <div>
      <div>{data.state}</div>
      <button onclick={addNew}>Refetch!</button>
      <For each={data()}>{(item) => 
        <div>
          {item}
        </div>
      }</For>
    </div>
  );
};

export default App;
