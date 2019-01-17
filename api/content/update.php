<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/content.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare content object
$content = new Content($db);
 
// get id of content to be edited
$data = json_decode(file_get_contents("php://input"));
 
// set ID property of content to be edited
$content->id = $data->id;
 
// set content property values
$content->id = $data->id;
$content->title = $data->title;
$content->description = $data->description;
 
// update the content
if($content->update()){
 
    // set response code - 200 ok
    http_response_code(200);
 
    // tell the user
    echo json_encode(array("message" => "content was updated."));
}
 
// if unable to update the content, tell the user
else{
 
    // set response code - 503 service unavailable
    http_response_code(503);
 
    // tell the user
    echo json_encode(array("message" => "Unable to update content."));
}
?>