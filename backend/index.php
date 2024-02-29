<?php

$json_list_content = file_get_contents("./todolist.json");

$todolist_array = json_decode($json_list_content);

var_dump($todolist_array);

$todolist_array = array_filter($todolist_array, fn($item) => !empty ($item));

var_dump($todolist_array);








// header("Content-Type: application/json");

// echo $json_list_content;