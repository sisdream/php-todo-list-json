<?php

echo $_GET['item'];

$json_todolist = file_get_contents('./todolist.json');

$todolist_array = json_decode($json_todolist);
