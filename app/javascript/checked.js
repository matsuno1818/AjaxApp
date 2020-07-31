function check() {
  const posts = document.getElementsByClassName("post");
  postsA = Array.from(posts);

  postsA.forEach(function (post) {
    post.addEventListener("click", (e) => { });
      const postId = post.getAttribute("data-id");
  });
}
window.addEventListener("load", check);