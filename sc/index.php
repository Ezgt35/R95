<?php
$files = [];
if(file_exists('files.json')){
    $files = json_decode(file_get_contents('files.json'), true);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Download File ZIP</title>
</head>
<body>
  <h1>Daftar File ZIP</h1>
  <ul>
    <?php foreach($files as $f): ?>
      <li>
        <b><?= htmlspecialchars($f['name']) ?></b> (<?= htmlspecialchars($f['size']) ?>) - <?= htmlspecialchars($f['description']) ?> -
        <a href="uploads/<?= htmlspecialchars($f['filename']) ?>" download>Download</a>
      </li>
    <?php endforeach; ?>
  </ul>
  <a href="admin.php">Login Admin</a>
</body>
</html>
