window.addEventListener('DOMContentLoaded', (event) => {
    const fileInput = document.getElementById('file-input');
    const box = document.querySelector('.box');
    const box2 = document.querySelector('.box2'); // Add reference to box2
    const uploadStatus = document.querySelector('.upload-status');
    const startButton = document.querySelector('.start-button');
  
    fileInput.addEventListener('change', () => {
      const fileName = fileInput.value.split('\\').pop(); // Extract the filename from the input value
      uploadStatus.textContent = `Uploaded file: ${fileName}`;
      uploadStatus.parentNode.classList.add('uploaded');
    });
  
    function replaceBoxContent() {
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileReader = new FileReader();
  
        fileReader.onload = function (e) {
          const image = document.createElement('img');
          image.src = e.target.result;
          image.addEventListener('load', () => {
            const imageHeight = image.height;
            box.style.backgroundImage = `url("${e.target.result}")`;
            box.style.height = `${imageHeight}px`;
          });
        };
  
        fileReader.readAsDataURL(file);
        uploadStatus.style.display = 'none';
        document.querySelector('.upload-button').style.display = 'none';
        document.querySelector('.buttons').style.display = 'none';
  
        box2.style.display = 'block'; // Display box2
      }
    }
  
    startButton.addEventListener('click', replaceBoxContent);
  });
  