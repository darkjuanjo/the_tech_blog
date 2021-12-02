async function editFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const title = document.querySelector('input[name="post-title"]').value.trim() 
                  || document.querySelector('input[name="post-title"]').getAttribute("placeholder");
    const post_text = document.querySelector('textarea[name="post-text"]').value.trim()
                  || document.querySelector('textarea[name="post-text"]').getAttribute("placeholder");
    console.log(title);
    console.log(post_text);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          post_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
  };
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);