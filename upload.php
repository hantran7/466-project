<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get the name and file from the form data
  $name = $_POST['name'];
  $file = $_FILES['file'];

  // Get the file size
  $size = $file['size'];

  // Save the file to the server
  $filename = $file['name'];
  $tmpname = $file['tmp_name'];
  $destination = 'uploads/' . $filename;
  move_uploaded_file($tmpname, $destination);

  // Display a message with the name and file size
  echo "Uploaded $filename ($size bytes) for $name.<br>";

  // Add a link to download the file
  echo "<a href=\"$destination\" download>Download $filename</a>";
}
?>
