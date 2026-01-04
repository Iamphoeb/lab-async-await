'use strict';

async function fetchAndDisplayPosts() {
  const postList = document.getElementById('post-list');
  const url = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const posts = await response.json();

    posts.forEach(post => {
      const li = document.createElement('li');
      const h1 = document.createElement('h1');
      const p = document.createElement('p');

      h1.textContent = post.title;
      p.textContent = post.body;

      li.appendChild(h1);
      li.appendChild(p);
      postList.appendChild(li);
    });

    console.log("Posts successfully loaded!");
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}


(async () => {
  const postList = document.getElementById('post-list');

  
  const firstPost = { 
    title: "sunt aut facere repellat", 
    body: "quia et suscipit\nsuscipit" 
  };
  const li = document.createElement('li');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  h1.textContent = firstPost.title;
  p.textContent = firstPost.body;
  li.appendChild(h1);
  li.appendChild(p);
  postList.appendChild(li);

  
  await fetchAndDisplayPosts();
})();
