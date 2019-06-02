<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/content.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare content object
$content = new Content($db);
 
// set ID property of record to read
$content->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// read the details of content to be edited
$content->readOne();
 
if($content->id!=null){
    // create array
    $content_arr = array(
        "id" =>  $content->id,
        "title" => $content->title,
        "description" => $content->description
    );
 
    // set response code - 200 OK
    http_response_code(200);
 
    // make it json format
    echo json_encode($content_arr);
}
 
else{
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user content does not exist
    echo json_encode(array("message" => "content does not exist."));
}
?>