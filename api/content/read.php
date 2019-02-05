<?php
// required header
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/content.php';
 
// instantiate database and content object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$content = new Content($db);
 
// query content
$stmt = $content->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // products array
    $content_arr=array();
    $content_arr["contents"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['title'] to
        // just $title only
        extract($row);
 
        $content_item=array(
            "id" => $id,
            "title" => $title,
            "description" => html_entity_decode($description)
        );
 
        array_push($content_arr["contents"], $content_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show content data in json format
    echo json_encode($content_arr);
}
 
else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no content found
    echo json_encode(
        array("message" => "No content found.")
    );
}
?>