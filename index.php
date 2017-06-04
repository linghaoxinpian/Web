<?php
    header("Content-Type:text/html;charset=gbk");
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="gbk">
    <title>Document</title>
</head>
<body>
<?php
    $files=scandir(getcwd());
    foreach ($files as $file){ ?>
        <div><a href="<?php echo $file ?>"><?php echo $file?></a> </div>
<?php    }
?>
</body>
</html>

