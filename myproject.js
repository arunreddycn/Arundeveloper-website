document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
  
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('response').innerText = data.message;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('response').innerText = 'An error occurred. Please try again.';
    });
  });