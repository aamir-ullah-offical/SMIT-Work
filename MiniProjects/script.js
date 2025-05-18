const fetchUserBtn = document.getElementById("fetchUserBtn");
const userIdInput = document.getElementById("userIdInput");
const userCard = document.getElementById("userCard");
const postsContainer = document.getElementById("postsContainer");

fetchUserBtn.addEventListener("click", async () => {
  const id = userIdInput.value.trim();
  if (!id || id < 1 || id > 10) {
    alert("Enter a valid ID between 1 and 10.");
    return;
  }

  userCard.innerHTML = "";
  postsContainer.innerHTML = "";

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    displayUserCard(user);
  } catch (err) {
    userCard.innerHTML = `<div class="alert alert-danger text-center">User not found.</div>`;
  }
});

function displayUserCard(user) {
  userCard.innerHTML = `
    <div class="col-md-6">
      <div class="card glass p-4">
        <h3 class="fw-bold mb-2">${user.name}</h3>
        <p class="mb-1"><strong>Username:</strong> ${user.username}</p>
        <p class="mb-1"><strong>Email:</strong> ${user.email}</p>
        <p class="mb-1"><strong>Phone:</strong> ${user.phone}</p>
        <p class="mb-3"><strong>Company:</strong> ${user.company.name}</p>
        <button class="btn fancy-btn w-100 mt-3" onclick="fetchUserPosts(${user.id})">📜 See Posts</button>
      </div>
    </div>
  `;
}

async function fetchUserPosts(userId) {
  postsContainer.innerHTML = `<div class="text-center text-light">Loading posts...</div>`;

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await res.json();

    if (posts.length === 0) {
      postsContainer.innerHTML = `<div class="alert alert-warning text-center">No posts found for this user.</div>`;
      return;
    }

    postsContainer.innerHTML = `<h2 class="text-center text-white mb-4">📌 User Posts</h2>`;

    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'col-md-6';
      card.innerHTML = `
        <div class="card glass p-3">
          <h5 class="fw-bold">${post.title}</h5>
          <p>${post.body}</p>
        </div>
      `;
      postsContainer.appendChild(card);
    });

  } catch (err) {
    postsContainer.innerHTML = `<div class="alert alert-danger text-center">Failed to load posts.</div>`;
  }
}
